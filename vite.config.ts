import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function resolveBase(): string {
  if (process.env.GITHUB_PAGES === "true") {
    return "/demo-prototype/";
  }
  if (process.env.FILE_LOCAL === "true") {
    return "./";
  }
  return "/";
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
});
