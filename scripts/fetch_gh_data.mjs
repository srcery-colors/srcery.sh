#!/usr/bin/env node

import { Octokit } from "octokit";
import uniqBy from "lodash/uniqBy.js";
import flatten from "lodash/flatten.js";
import ps from 'node:process';
import fs from 'node:fs';
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  org: "srcery-colors",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
}

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

// Takes a url, passes it to octokit
async function fetchUrl(url) {
  const resp = await octokit.request(url, options)
  return resp.data;
}

// Fetch a list of contributors
// Iterate through all public repos, getting contributors, flatten, and filter
// out dups
async function fetchContributors() {
  let resp = await octokit.request("GET /orgs/{org}/repos", options);
  const urls = resp.data.map(x => x.contributors_url);

  resp = await Promise.all(
    urls.map(url => {
      return octokit.request(url, options).then(result => {
        return result.data;
      });
    })
  )
  const f = flatten(resp)
  return uniqBy(f, x =>  x.login)
}

// Fetch members, used to filter out from contributors
async function fetchMembers() {
  let resp = await octokit .request("GET /orgs/{org}/public_members", options);
  return resp.data;
}
// Entry
async function main() {
  const contributors = await fetchContributors();
  const members = await fetchMembers();
  const memberIds = members.map(x => x.id);
  const obj = {
    members: members,
    contributors: contributors.filter(c => {
      return !memberIds.includes(c.id)
    })
  }
  let error = false;
  fs.writeFileSync(
    join(resolve(__dirname, "../src"), "github.json"),
    JSON.stringify(obj),
    (err) => {
      if (err) {
        error = true;
        console.error(err)
      };
      console.log("Github organization contribution data written to file!");
  });
  if (error) return 1
  return 0;
}

ps.exit(await main());
