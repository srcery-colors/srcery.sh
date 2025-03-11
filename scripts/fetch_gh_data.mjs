#!/usr/bin/env node

import { Octokit } from "octokit";
import uniqBy from "lodash/uniqBy.js";
import flatten from "lodash/flatten.js";
import ps from "node:process";
import fs from "node:fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

// ECMAScript doesn't define __dirname, this is a workaround
// https://stackoverflow.com/a/64383997/4306379
// Might not need this, can use relative paths but I've been burned before
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define options passed to a get request using octokit
const options = {
  org: "srcery-colors",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

// If you want to use this script locally you need to define an environment var
// named GH_TOKEN. It can be a personal access token with no permissions other
// than public info. We just need to get around the rate limit, all the data is
// available publicly, but this script without auth hits the rate limit after
// two passes.
function newOctokit() {
  if (process.env.GH_TOKEN) {
    return new Octokit({
      auth: process.env.GH_TOKEN,
    });
  }
  console.error("No GH_TOKEN found, proceeding with no authentication...");
  return new Octokit({});
}

const octokit = newOctokit();

function printExit(error) {
  if (error.response) {
    console.error(
      `Error! Status: ${error.response.status}. Message: ${error.response.data.message}`,
    );
  }
  console.error(error);
  ps.exit(1);
}

// Dispatch request and handle error
// Will exit on first error
async function fetchUrl(url) {
  try {
    return await octokit.request(url, options);
  } catch (error) {
    printExit(error);
  }
}

// Fetch a list of contributors. Iterate through all public repos, getting
// contributors, flatten, and filter out dups
async function fetchContributors() {
  let resp = await fetchUrl("GET /orgs/{org}/repos");
  const urls = resp.data.map((x) => x.contributors_url);

  resp = await Promise.all(
    urls.map((url) => {
      return fetchUrl(url).then((result) => {
        return result.data;
      });
    }),
  );
  const f = flatten(resp);
  return uniqBy(f, (x) => x.login);
}

// Fetch members, used to filter out from contributors
async function fetchMembers() {
  let resp = await fetchUrl("GET /orgs/{org}/public_members");
  return resp.data;
}
// ENTRY:
// Fetch and compile data then write to src/github.json. This file is not
// tracked, so it needs be generated either by manually calling the script, or
// via a build action (remember to define GH_TOKEN)
async function main() {
  const contributors = await fetchContributors();
  const members = await fetchMembers();
  const memberIds = members.map((x) => x.id);
  const obj = {
    members: members,
    contributors: contributors.filter((c) => {
      return (
        !memberIds.includes(c.id) &&
        !(
          c.login.includes("dependabot") ||
          c.login.includes("renovate") ||
          c.login.includes("traviscibot")
        )
      );
    }),
  };
  let error = false;
  fs.writeFileSync(
    join(resolve(__dirname, "../src"), "github.json"),
    JSON.stringify(obj),
    (err) => {
      if (err) {
        error = true;
        console.error(err);
      }
    },
  );
  if (error) return 1;
  console.log("GitHub organization contribution data written to file!");
  return 0;
}

ps.exit(await main());
