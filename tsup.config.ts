import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/hcs-log-store.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
});
