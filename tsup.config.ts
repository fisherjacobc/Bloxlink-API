import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  watch: true,
  silent: true,
  dts: true
});
