import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 📁 Test folder
  testDir: './tests',

  // ⚡ Run tests in parallel
  fullyParallel: true,

  // 🚫 Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // 🔁 Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // 👥 Workers control
  workers: process.env.CI ? 1 : undefined,

  // 📊 HTML report
  reporter: 'html',

  // ⚙️ Global settings
  use: {
    headless: false,
    trace: 'on-first-retry',
  },

  // 🌐 Browser projects
  projects: [

    // 🟡 Chromium (default engine)
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chromium',
      },
    },

    // 🦊 Firefox
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // // 🍏 WebKit (Safari engine)
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

  ],
});