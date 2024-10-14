import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // Set your application's base URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false, // Disable video recording for faster tests
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 5000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    // Environment variables
    API_URL: 'https://nf-api.onrender.com/api/v1',
  },
});
