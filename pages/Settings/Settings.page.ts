import { expect, Page } from "@playwright/test";

export default class Settings {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Settings_Page_Elements = {
        settings_navigator: '//a[@title="Settings"]',
        store_settings:'//a[@title="Store Settings"]',
        radio_element:'//input[@type="radio"]',
        

    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicks on settings on top left corner

    async click_settings() {
        const ele = this.page.locator(this.Settings_Page_Elements.settings_navigator)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  settings page element not found at top, click failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicks on store settings on left panel

    async click_store_settings() {
        const ele = this.page.locator(this.Settings_Page_Elements.store_settings)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store settings page element not found at left, click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check open button in radio

    async check_radio_button_open() {
        const ele = this.page.locator(this.Settings_Page_Elements.radio_element).nth(0)
        const savebutton= this.page.locator(this.Settings_Page_Elements.save_button)
        try {
            if(!await ele.isChecked())
            {
                await ele.check()
                await savebutton.click()
            }
           
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store settings page element not found at left, click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check open button in radio

    async check_radio_button_close() {
        const ele = this.page.locator(this.Settings_Page_Elements.radio_element).nth(1)
        const savebutton= this.page.locator(this.Settings_Page_Elements.save_button)
      
        try {
            if(!await ele.isChecked())
            {
                await ele.check()
                await savebutton.click()
            }
           
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  close radio button is missing |  Error occured: ' + error)
        }
    }
    
    
}
