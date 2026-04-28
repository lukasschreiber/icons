import { defineConfig } from "tsup";
import { globSync } from "glob";

export default defineConfig({
  entry: [
    "src/index.ts",
    ...globSync("src/icons/**/*.tsx")
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  external: ["react"],
});