#!/usr/bin/env node

import { Octokit } from "octokit";
import uniqBy from "lodash/uniqBy.js";
import flatten from "lodash/flatten.js";
import ps from 'node:process';
import fs from 'node:fs';

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
  let urls = resp.data.map(x => x.contributors_url);
  urls = urls.slice(0, 2);

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
    members: await fetchMembers(),
    contributors: contributors.filter(c => {
      return !memberIds.includes(c.id)
    })
  }
  console.log(obj);
  return 0;
}

ps.exit(await main());
