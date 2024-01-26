import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class Design {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    private Design_elements = {
        click_design:"//span[text()='Design']",
        Splash_Page:"//a[@title='Splash Page']",
        




    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  

    async click_design1(){
        const ele = this.page.locator(this.Design_elements.click_design)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  Splash_Page
    async Splash_Page(){
        const ele = this.page.locator(this.Design_elements.Splash_Page)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    





}