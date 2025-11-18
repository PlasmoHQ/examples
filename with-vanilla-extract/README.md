This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Notes

This example demonstrates how to use [vanilla-extract](https://vanilla-extract.style/) with Plasmo for type-safe CSS-in-TypeScript.

### Features

- **Type-safe styles**: Get TypeScript autocomplete and type checking for your CSS
- **Zero-runtime CSS**: Styles are extracted at build time, not runtime
- **Modern CSS**: Support for pseudo-classes, media queries, and CSS variables
- **Scoped by default**: Class names are automatically hashed to prevent conflicts

### How it works

This example uses the official `@vanilla-extract/parcel-transformer` to process `.css.ts` files at build time. The transformer:

1. Compiles `.css.ts` files to extract CSS
2. Generates unique, scoped class names
3. Returns TypeScript modules with class name mappings
4. Bundles the CSS for browser extension contexts

### Configuration

The example includes a `.parcelrc` file that extends Plasmo's default config:

```json
{
  "extends": "@plasmohq/parcel-config",
  "transformers": {
    "*.css.ts": ["@vanilla-extract/parcel-transformer"]
  }
}
```

This configuration tells Parcel to process `.css.ts` files using vanilla-extract's transformer.

### Usage

Define your styles in `.css.ts` files:

```typescript
// styles.css.ts
import { style } from "@vanilla-extract/css"

export const button = style({
  backgroundColor: "#0070f3",
  ":hover": {
    backgroundColor: "#0051cc"
  }
})
```

Import and use them in your React components:

```tsx
// popup.tsx
import * as styles from "./styles.css"

function Popup() {
  return <button className={styles.button}>Click me</button>
}
```

Note: Import as `.css` (not `.css.ts`) as the transformer outputs CSS modules.

### Requirements

**Parcel 2.10.0 or later** is required for vanilla-extract support.

The vanilla-extract transformer depends on `@vanilla-extract/integration`, which uses the `node:` protocol for importing Node.js built-in modules (e.g., `require('node:module')`). This protocol was not properly supported in Parcel versions prior to 2.10.0, causing build failures.

Parcel 2.10.0 introduced support for the `node:` prefix in CommonJS dependencies through [PR #9244](https://github.com/parcel-bundler/parcel/pull/9244) and [PR #9250](https://github.com/parcel-bundler/parcel/pull/9250). This fix allows vanilla-extract and other tools using modern Node.js import conventions to work correctly.

For more information, visit the [vanilla-extract documentation](https://vanilla-extract.style/).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
