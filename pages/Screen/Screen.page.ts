import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class Screen {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }




    private Screen_Page_Elements = {
        click_design:"(//a[@class='sc-fePcYi jszvzQ'])[1]",
        app_link:'//a[@title]',
        click_manage_event:"//a[@title='Manage Event']//span[1]",
        click_event_details:"//a[@title='Event Details']",
        clear_and_type_event_name:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
        clear_and_type_Event_Subtitle:"//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//textarea[1]",
        


    }


    


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_3rd_app_name_2023_coachella  
    async click_3rd_app_name_2023_coachella(){
        const ele = this.page.locator(this.Screen_Page_Elements.app_link).nth(2)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  click app name |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_dropdown
    async click_location_dropdown(){
        const ele = this.page.locator(this.Screen_Page_Elements.click_location_dropdown)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |   Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  select_location
    async select_location(){
        const ele = this.page.waitForSelector(this.Screen_Page_Elements.select_location)
        try {
            await (await ele).click({delay:1000})
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     










}