const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Telling the path where Our Files are Located
    specPattern: "cypress/Integration/AdepsiAutomation/*.js",
  },

  
});
