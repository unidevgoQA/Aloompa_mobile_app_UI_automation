import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class Design_Beta{
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Design_Beta_Page_Elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        


       

    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click settings on top right

    async click_settings(){
        const ele = this.page.locator(this.Design_Beta_Page_Elements.settings_button)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | click faild |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click Account Management in settings
    async click_Account_Management(){
        const ele = this.page.locator(this.Design_Beta_Page_Elements.Account_Management_btn)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | click faild |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate Account Management is visible
    async validate_Account_Management(){
        const ele = this.page.locator(this.Design_Beta_Page_Elements.User_Management_text)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management |  Error occured: '+error)       
        }
    }




   





}
    