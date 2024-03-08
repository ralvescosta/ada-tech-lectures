import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ak64wg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
  },
});
