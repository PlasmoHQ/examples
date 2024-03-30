import preprocess from "svelte-preprocess"

/**
 * This will add autocompletion if you're working with SvelteKit
 * https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
  })
  // ...other svelte options
}

export default config
