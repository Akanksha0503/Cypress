const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    experimentalStudio: true,
    defaultCommandTimeout: 100000,

    reporter: 'mochawesome', // ✅ Correct reporter
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'OrangeHRM Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      // Register the mochawesome plugin
      // require('cypress-mochawesome-reporter/plugin')(on);

      // Optional: log messages from test
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',

  video: true,
  videosFolder: 'cypress/videos',
  viewportWidth: 1280,
  viewportHeight: 720,
});
