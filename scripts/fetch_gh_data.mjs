#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { Octokit } from "octokit";

const org = "srcery-colors";
const options = {
  org,
  per_page: 100,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

async function fetchContributors() {
  const repos = await octokit.paginate("GET /orgs/{org}/repos", options);
  const contributors = (
    await Promise.all(
      repos.map((repo) =>
        octokit.paginate("GET /repos/{owner}/{repo}/contributors", {
          owner: org,
          repo: repo.name,
          per_page: 100,
          headers: options.headers,
        }),
      ),
    )
  ).flat();

  return contributors.filter(
    (user, index) =>
      contributors.findIndex(({ login }) => login === user.login) === index,
  );
}

function fetchMembers() {
  return octokit.paginate("GET /orgs/{org}/public_members", options);
}

async function main() {
  const [contributors, members] = await Promise.all([
    fetchContributors(),
    fetchMembers(),
  ]);
  const memberIds = new Set(members.map((user) => user.id));
  const bots = ["dependabot", "renovate", "traviscibot"];

  const data = {
    members,
    contributors: contributors.filter(
      (user) =>
        !memberIds.has(user.id) &&
        !bots.some((bot) => user.login.includes(bot)),
    ),
  };

  writeFileSync(
    new URL("../src/github.json", import.meta.url),
    JSON.stringify(data),
  );
  console.log("GitHub organization contribution data written to file!");
}

await main();
