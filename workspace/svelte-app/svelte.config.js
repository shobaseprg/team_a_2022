const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;

const preprocessOptions = {
  sourcemap: !production,
  defaults: {
    script: "typescript",
    style: "scss",
  },
  postcss: {
    plugins: [require('autoprefixer')()]
  }
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
}
