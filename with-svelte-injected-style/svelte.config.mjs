import preprocess from "svelte-preprocess"

/**
 * This will add autocompletion if you're working with SvelteKit
 * https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
  }),
  compilerOptions: {
    css: 'injected', // this is the default mode, but I'm setting it here for clarity of the example
  }
  // ...other svelte options
}

export default config
