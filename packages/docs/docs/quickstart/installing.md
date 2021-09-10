---
sidebar_position: 1
---

# Setup and Installation

## Prerequisites
Relive doesn't require anything other than a recent (≥ v16.5.0) version of Node.js. If you don't have Node.js installed, have a look at the [installing Node.js](https://nodejs.org/en/download/) guide.

## Scaffold
The easiest way to get setup with Relive is to scaffold a Relive project. All you need to do is to run the following on your terminal.

```bash
npm init @relivecg [name]
```

:::note

Don't forget the `cg` at the end of `relive`. It's there because CG stands for Character Generation (which is the industry term for what Relive does), and because `@relive` was already taken.

:::

Example:

```bash
npm init @relivecg helloWorld
```

After running the command, a folder will be created with whatever name you specified and the NPM modules will be installed. The resulting folder structure should look like:

```
- helloWorld/
| - node_modules/
| - package.json
| - package-lock.json
| - index.jsx
```

## Running Relive
After setting up your Relive project, you can run the program by running the following in your terminal.

```bash
npm run start
```

This should bundle `index.jsx` and serve up the UI on [http://localhost:3000](http://localhost:3000) or similar.

The underlying command that `npm run start` executes is:

```bash
npx @relive/cli run index.jsx
```

:::caution

Relive does not automatically rebundle your code if `index.jsx` changes. You will need to exit the CLI program and restart it with `npm run start`. This is in place to avoid code unexpectedly reloading while broadcasting.

:::