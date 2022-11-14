const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e',
    projectId: 'yn556e',
    excludeSpecPattern: 'cypress/e2e/accesibility.test.js'
  },
  env: {
    EMAIL: 'test@gmail.com',
    PASSWORD: '123456'
  }
})
