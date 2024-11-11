Bun.build({
  root: "./src",
  target: "bun",
  splitting: true,
  entrypoints: ["./src/index.ts", "./src/!config.ts"],
  outdir: "./dist",
  format: "esm",
  naming: {
    // default values
    entry: "[dir]/[name]-[hash].[ext]",
  },
  minify: true,
  external: ["chalk", "dayjs", "ws"],
});
