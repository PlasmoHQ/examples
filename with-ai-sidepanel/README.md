# AI Side Panel Browser Extension

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo). It provides an AI-powered side panel that offers intelligent assistance while browsing the web.

## Tech Stack

- React 19
- TypeScript
- Ant Design 5.x
- Plasmo Extension Framework

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the Chrome browser using Manifest V3, load the `build/chrome-mv3-dev` directory.

## Features

- Open the AI side panel by clicking on the extension icon
- Beautiful UI built with Ant Design components
- Support for Chrome side panel API

## Project Structure

- `background.ts` - Sets up side panel behavior
- `sidepanel.tsx` - React component for the side panel
- `theme.tsx` - Theme configuration file

## Building the Extension

To build the production version of the extension:

```bash
pnpm build
# or
npm run build
```

## Customization

You can customize the side panel content and functionality by modifying the `sidepanel.tsx` file. The project supports hot reloading, so changes will update automatically.
