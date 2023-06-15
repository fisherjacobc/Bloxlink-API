<h1 align="center"><strong>@codiium/bloxlink-api</strong></h1>
<br />
<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/@codiium/bloxlink-api"><img src="https://img.shields.io/npm/v/@codiium/bloxlink-api.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@codiium/bloxlink-api"><img src="https://img.shields.io/npm/dt/@codiium/bloxlink-api.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/fisherjacobc/@codiium/Bloxlink-API/actions"><img src="https://github.com/fisherjacobc/Bloxlink-API/workflows/Tests/badge.svg" alt="Tests status" /></a>
  </p>
</div>

An unofficial Bloxlink API wrapper for Node.js

## Installation

### Note

> **Warning**: Check the package name when you are installing, as it is **case sensitive**. There is a similar package called `@codiium/bloxlink-api` that is outdated, and is **not** this package.

```
npm install @codiium/bloxlink-api
yarn add @codiium/bloxlink-api
pnpm add @codiium/bloxlink-api
```

## Getting your API Key

Visit the [Bloxlink Developer page](https://www.blox.link/dashboard/developer) to get your API key.

## Setup/Usage

### Global API

You can import the global library by adding `/global` to the package import path

```ts
import global from "@codiium/bloxlink-api/global";

global.setGlobalApiKey("YOUR-API-KEY-HERE");

const response = await global.DiscordToRoblox("756614666066591836");

console.log(response);
```

### Guild API

You can import the guild library by adding `/guild` to the package import path

```ts
import guild from "@codiium/bloxlink-api/guild";

guild.setGuildApiKey("YOUR-API-KEY-HERE");

const response = await guild.DiscordToRoblox("756614666066591836");

console.log(response);
```

## Typings

This package comes with some typings, such as certain data responses, and enums for the different error types. All respones include a `statusCode` property if you would like to know the status code. That is **not** included by default in the response body from Bloxlink's API.
