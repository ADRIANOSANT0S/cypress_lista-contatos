const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/relatorio',
      reportTitle: 'Testes Para as Funcionalidades da Agenda',
      timestamp: 'ddmmyyyy_HHMMss',
      overwrite: true,
      html: true,
      json: false
    }
  },
});
