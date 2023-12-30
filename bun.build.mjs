await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "bun", // default
  format: "esm",
  minify: true,
});
