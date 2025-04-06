import { build, type BuildConfig } from "bun";
import dts from 'bun-plugin-dts';

const config: BuildConfig = {
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
//   minify: false,
};

await Promise.all([
  build({
    format: "esm",
    target: "node",
    naming: "[dir]/[name].js",
    plugins: [dts()],
    ...config,
  }),
  build({
    format: "cjs",
    target: "node",
    naming: "[dir]/[name].cjs",
    // plugins: [dts()],
    ...config,
  }),
]);
