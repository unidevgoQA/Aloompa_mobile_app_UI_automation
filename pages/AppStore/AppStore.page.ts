import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";

export default class AppStore {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }



    private AppStore_Page_Elements = {
        CMSReservationEvent:"//a[contains(text(),'001 test arif')]",
        AutomationEvent:"//p[text()='Only For automation']",
        

    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: This is a Click function to navigate to a CMS Reservation Event.
    async CMSReservationEventClick(){
        const ele = this.page.locator(this.AppStore_Page_Elements.CMSReservationEvent)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | CMS Reservation Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Navigate to the Automation Event.

    async CMSEventClick(){
        const ele = this.page.locator(this.AppStore_Page_Elements.AutomationEvent)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | Event | Event Element Not Found : Error occured'+error)
       
        }
    }

    
      
}