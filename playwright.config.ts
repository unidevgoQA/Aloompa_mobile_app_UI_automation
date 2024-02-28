import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
var date = new Date();
var ReportDate = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);

const config: PlaywrightTestConfig = {
  // testDir: './tests',
  testMatch: [
    "001Login.test.ts",
    // "002Design(Beta).test.ts",
    // "003Design.test.ts",
    // "004Screen.test.ts",
    "005EventData.test.ts",
    // "006Messaging.test.ts",
    // "007AppStore.test.ts",
    // "008Settings.test.ts",
    
  ],
  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 25000

  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: process.env.CI ? [["junit", {
    outputFile: "results.xml"
  }]] : [["json", {
    outputFile: "report.json"
  }], ["html", {
    open: "never"
  }]],

  // reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],



  // reporter: [["html", {
  //   open: "never"
  // }], ["allure-playwright"], ['./My-Reporter.js']],

  //  globalTeardown: require.resolve("./mailer.js"),



  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://dragonflyadmin-dev.loompavision.com/",
    launchOptions: {
      args: [
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--no-sandbox',
        '--disable-features=UseOzonePlatform',
        `--use-file-for-fake-video-capture=${__dirname}/mobile.y4m`
      ],
      slowMo: 300

    },
    permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    headless: process.env.CI ? true : false,
    //headless: true ,
    browserName: 'chromium',
    channel: 'msedge',
    viewport: { width: 1200, height: 720 },
    ignoreHTTPSErrors: true,
    // permissions: ["camera"],


    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "off",
    video: process.env.CI ? "off" : "off",
    screenshot: process.env.CI ? "off" : "on",
  },




  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //   },

  //   // {
  //   //   name: 'firefox',
  //   //   use: {
  //   //     ...devices['Desktop Firefox'],
  //   //   },
  //   // }
  // ]
};

export default config;
