import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    include: /\.js$/,
    exclude: [],
    loader: "jsx",
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
