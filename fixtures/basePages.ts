import LoginPage from "@pages/Login.page";
import AppsPage from "@pages/Apps.page";
import { test as baseTest } from "@playwright/test";
import functions from "@helper-function/functions";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"
import Design from "@pages/Design.page";
import Design_Beta from "@pages/Design_Beta";
import EventData from "@pages/EventData.page";
import AppStore from "@pages/AppStore.page";
import Messaging from "@pages/Messaging";
import Settings from "@pages/Settings.page";
import Screen from "@pages/Screen.page";


const test = baseTest.extend<{
    loginPage: LoginPage;
    functions: functions;
    testData: testData;
    BaseFunctions: BaseFunctions;
    AppsPage:AppsPage;
    Design_Beta:Design_Beta;
    EventData:EventData;
    Design:Design;
    AppStore:AppStore;
    Messaging: Messaging;
    Settings:Settings;
    Screen: Screen;
    
}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    BaseFunctions: async ({ page }, use) => {
        await use(new BaseFunctions(page));
    },
    AppsPage: async ({ page }, use) => {
        await use(new AppsPage(page));
    },
    Design_Beta: async ({ page }, use) => {
        await use(new Design_Beta(page));
    },
    Design: 
    async ({ page }, use) => {
        await use(new Design(page));
    },
    Screen:
    async ({ page }, use) => {
        await use(new Screen(page));
    },
    EventData:
    async ({ page }, use) => {
        await use(new EventData(page));
    },
    AppStore:
    async ({ page }, use) => {
        await use(new AppStore(page));
    },
    Messaging: 
    async ({ page }, use) => {
        await use(new Messaging(page));
    },
    Settings:
    async ({ page }, use) => {
        await use(new Settings(page));
    }

})
export default test;
export const expect = test.expect;

