import { defineConfig } from "vite";

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      // The output directory for your bundled assets
      outDir: "build",
      // This can be useful to bundle your CSS into a single file
      cssCodeSplit: false,
    },
    // You can keep this if you have specific dependency pre-bundling needs,
    // otherwise, it can also be removed.
    optimizeDeps: {
      exclude: ['./settings.json']
    },
  };
});
