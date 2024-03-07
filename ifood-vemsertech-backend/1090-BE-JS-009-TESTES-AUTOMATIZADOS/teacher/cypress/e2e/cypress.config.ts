import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'jtf1nj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
  },
});
