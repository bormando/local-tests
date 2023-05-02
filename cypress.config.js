const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    excludeSpecPattern: [
      'cypress/e2e/1-getting-started/*',
      'cypress/e2e/2-advanced-examples/*',
    ],
  },
});
