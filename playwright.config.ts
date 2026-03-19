import { defineConfig, devices } from '@playwright/test';
import * as fs from 'fs';

/**
 * Smart base URL configuration
 * Priority order:
 * 1. Environment variable BASE_URL
 * 2. test-config.json file
 * 3. Default: Production environment
 */
let baseURL = process.env.BASE_URL;

if (!baseURL) {
  try {
    const configFile = fs.readFileSync('./test-config.json', 'utf8');
    const config = JSON.parse(configFile);
    baseURL = config.baseURL;
  } catch (error) {
    // Config file does not exist or is invalid → fallback to Production
  }
}

if (!baseURL) {
  baseURL = 'https://pocketaces2.github.io/fashionhub/';
}

export default defineConfig({
  // Test directory
  testDir: './tests',

  // Global timeout settings
  timeout: 30_000,
  expect: { timeout: 5000 },

  // Run tests in parallel
  fullyParallel: true,

  // Do not allow .only in CI
  forbidOnly: !!process.env.CI,

  // Retries only in CI environment
  retries: process.env.CI ? 2 : 0,

  // Number of workers (1 in CI to avoid resource issues)
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Global test settings
  use: {
    baseURL,
    trace: 'on-first-retry',        // Save trace only on first failure
    screenshot: 'only-on-failure',  // Take screenshot only on failure
    video: 'retain-on-failure',     // Keep video only on failure
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
