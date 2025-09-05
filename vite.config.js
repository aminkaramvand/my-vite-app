import { defineConfig } from "vite";

export default defineConfig({
  build: {
    //sourcemap: true, Recommendation: Set to true for staging environments to help debug, but set to false for production to make your bundle smaller and obfuscate your code.
    server: {
      open: true, // Automatically open the browser when starting the server
    },
  },
});
