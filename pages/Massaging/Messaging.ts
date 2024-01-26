import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class Messaging {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Messaging_Page_Elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        dropdown_container_header:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        

    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Type Event name input 
    async input_add_name(value:string){
        const ele = this.page.locator(this.Messaging_Page_Elements.input_ele_form).first()
        try {
            await ele.type(value,{delay:200})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Event name input element not found : Error occured'+error)
       
        }
    }

    


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Check "Explore all event" Text in header element of event dashboard
    async check_explore_all_events_visiblity(){
        const ele = this.page.locator(this.Messaging_Page_Elements.explore_all_events_header)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Explore all event header element is missing |  Error occured: '+error)       
       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click event Dashboard in top right corner
    async click_event_dashBoard(){
        const ele = this.page.locator(this.Messaging_Page_Elements.event_dashboard_link)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Event dashboard link element is missing |  Error occured: '+error)       
       
        }
    }

    
    
    

   
}