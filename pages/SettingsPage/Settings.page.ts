import { expect, Page } from "@playwright/test";

export default class SettingsPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private settings_page_elements = {
        settings_navigator: '//a[@title="Settings"]',
        store_settings:'//a[@title="Store Settings"]',
        radio_element:'//input[@type="radio"]',
        save_button:'//span[text()="Save"]//parent::span//parent::button',
        create_new_category_button:'//span[text()="+ Create new category"]//parent::span//parent::button',
        create_new_category_header:'//div[text()="Create New Category"]',
        category_name:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        remove_image_ele:'//span[text()="Remove Image"]',
        yes_radio_button:'//span[text()="Yes"]//preceding-sibling::span//input',
        no_radio_button:'//span[text()="No"]//preceding-sibling::span//input',
        confirm_delete_button:'//span[text()="Delete"]//parent::span//parent::button',
        Landing_PAGE_Checkbox:"(//label[text()='Landing Page']/following::input)[1]",
        Cart_timer:"(//label[text()='Cart Timer (in minutes)']/following::input)[1]",
        Create_new_Fee_button:"//span[text()='+ Create New Fee']",
        Fee_name:"(//span[text()='Tax']/following::input)[1]",
        fee_Amount:"//input[@max='100']",
        Apply_Fee:"(//label[text()='Tax Exempt']/following::input)[1]",
        Save_fee:"button.MuiButtonBase-root-25929.MuiButton-root-25902",
        Edit_Created_Fee:"(//span[text()='Edit'])[2]",
        EventZone:"//p[text()='Select One']",
        TiemZone:"//li[@data-value='America/Antigua']",
        Store_Currency:"//li[@data-value='USD']",
        Store_Currency_Dropdown:"//div[contains(@class,'MuiSelect-root jss24226')]",
        Store_Country:"//div[contains(@class,'MuiSelect-root jss24227')]",
        Store_Country_US:"//li[@data-value='US']",
        Password_Protection_Checkboix:"(//label[text()='Password Protection']/following::input)[1]",
        Access_ticket_Message:"(//label[text()='Access Tickets Message']/following::input)[1]",
        Copy_link:"//span[text()='Copy Link']",
        SAVE:"(//span[text()='Save'])[2]",

    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicks on settings on top left corner

    async click_settings() {
        const ele = this.page.locator(this.settings_page_elements.settings_navigator)
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
        const ele = this.page.locator(this.settings_page_elements.store_settings)
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
        const ele = this.page.locator(this.settings_page_elements.radio_element).nth(0)
        const savebutton= this.page.locator(this.settings_page_elements.save_button)
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
        const ele = this.page.locator(this.settings_page_elements.radio_element).nth(1)
        const savebutton= this.page.locator(this.settings_page_elements.save_button)
      
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
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Mobile page
    // Description: checks wheather the events are opened in page

    async check_if_mobile_page_is_open(){
        const ele = this.page.locator('//input[@placeholder="Email"]')
        try {
           await expect.soft(ele).toBeVisible()  
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store open page not correct |  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Mobile page
    // Description: checks wheather the events are opened in page

    async check_if_mobile_page_is_close(){
        const ele = this.page.locator('//p[text()="The store will open soon"]')
        try {
           await expect.soft(ele).toBeVisible()  
        } catch (error) {
            throw new Error('Aloompa|admin | mobile page |"The store will open soon"|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: click on new category
    async click_new_category(){
        const ele = this.page.locator(this.settings_page_elements.create_new_category_button)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  create new category button click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: check create new category popup


    async check_create_new_category_popup(){
        const ele = this.page.locator(this.settings_page_elements.create_new_category_header)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page | create new category header element missing |  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: input category name in check create new category popup

    async input_category_name(value:string){
        const ele = this.page.locator(this.settings_page_elements.category_name).nth(0)
        try {
            await ele.type(value,{delay:300})
        } catch (error) {
            throw new Error('Aloompa | admin | settings page | category name input element missing |  Error occured: ' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: uploads a image file


    async upload_image(value:string){
        const filePath0 = `testData/images/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator('//input[@data-testid="fileInput"]').click()
        ]);
        await fileChooser.setFiles([filePath0]);
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: wait for image upload to complete

    async wait_for_image_upload(){
        const ele = this.page.locator(this.settings_page_elements.remove_image_ele)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Image upload not worked properly, error occured'+error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: select category enabled yesh

    async select_category_enabled_yesh(){
        const ele = this.page.locator(this.settings_page_elements.yes_radio_button)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
            throw new Error('select yesh in category enabled section failed, error occured'+error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: select category enabled no

    async select_category_enabled_no(){
        const ele = this.page.locator(this.settings_page_elements.no_radio_button)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
            throw new Error('select no in category enable section failed, error occured'+error)
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: checks if the newly added category is visible

    async check_the_newly_added_category(value:string){
        const ele = this.page.locator(`//div[text()="${value}"]`)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('newly added category is not visible properly with the desired name, error occured'+error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the settings for newly added category
    async click_settings_for_event_category_names(value:string){
        const ele= this.page.locator(`//div[text()="${value}"]//following-sibling::button//img[@data-testid="settings-blueIcon"]`)
       try {
         await ele.click()
       } catch (error) {
        throw new Error('click on newly added category settings failed, error occured'+error)
   
       }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the delete for newly added category
    async click_delete_for_event_category_names(value:string){
        const ele= this.page.locator(`//div[text()="${value}"]//following-sibling::button//img[@data-testid="trash-blueIcon"]`)
       try {
         await ele.click()
       } catch (error) {
        throw new Error('clicks on the delete for newly added category failed, error occured'+error)
   
       }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the delete for newly added category
    
    async click_confirm_delete_button(){
        const ele= this.page.locator(this.settings_page_elements.confirm_delete_button)
        try {
          await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('click on confirm delete button delete failed, error occured'+error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the Landing Page checkbox    
    async click_Landing_Page_Checkbox(){
        const ele= this.page.locator(this.settings_page_elements.Landing_PAGE_Checkbox)
        try {
          await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('click on the lkanding page checkbox is failed, error occured'+error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Input on the cart timer input field  
    async cart_Timer_Input(){
        const ele= this.page.locator(this.settings_page_elements.Cart_timer)
        try {
            await ele.clear()
          await ele.fill("10")
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Cart timer input failed, error occured'+error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new hyperlink text click  
    async Create_New_fee_Click(){
        const ele= this.page.locator(this.settings_page_elements.Create_new_Fee_button)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Create new fee hyperlink text click failed, error occured'+error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee name input 
    async FeeNameInput(){
        const ele= this.page.locator(this.settings_page_elements.Fee_name)
        try {
            await ele.fill("Test fee")
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Fee name input failed, error occured'+error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee amount input 
    async FeeAmountInput(){
        const ele= this.page.locator(this.settings_page_elements.fee_Amount)
        try {
            await ele.fill("10")
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Fee Amount input failed, error occured'+error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee Apply fee checkbox click 
    async ApplyFee(){
        const ele= this.page.locator(this.settings_page_elements.Apply_Fee)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Apply fee checkbox click failed, error occured'+error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee save click 
    async SaveFeeClick(){
        const ele= this.page.locator(this.settings_page_elements.Save_fee)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Save button click failed, error occured'+error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Created new fee edit button click 
    async EditFeeClick(){
        const ele= this.page.locator(this.settings_page_elements.Edit_Created_Fee)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Save button click failed, error occured'+error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee name input edit
    async EditFeeNameInput(){
        const ele= this.page.locator(this.settings_page_elements.Fee_name)
        try {
            await ele.fill("Test fees")
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Fee name input failed, error occured'+error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Event time zone dropdown click
    async EventTimeZoneDropdownClick(){
        const ele= this.page.locator(this.settings_page_elements.EventZone)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('event Time zone click failed, error occured'+error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Event time zone click
    async EventTimeZoneClick(){
        const ele= this.page.locator(this.settings_page_elements.TiemZone)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('event Time zone click failed, error occured'+error)
        }
    }

        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Currency dropdown click
    async StoreCurrencyDropdownClick(){
        const ele= this.page.locator(this.settings_page_elements.Store_Currency_Dropdown)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Store currency dropdown click failed, error occured'+error)
        }
    }

            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Currency dropdown click
    async StoreCurrencyClick(){
        const ele= this.page.locator(this.settings_page_elements.Store_Currency)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Store currencyclick failed, error occured'+error)
        }
    }
                
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Country dropdown click
    async StoreCountryDRopdownClick(){
        const ele= this.page.locator(this.settings_page_elements.Store_Country)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Store Country dropdown click failed, error occured'+error)
        }
    }

                    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Country click from the dropdown
    async StoreCountryClick(){
        const ele= this.page.locator(this.settings_page_elements.Store_Country_US)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Store Country click from the dropdown click failed, error occured'+error)
        }
    }

                        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Password protection checkbox click
    async PasswordProtectionClick(){
        const ele= this.page.locator(this.settings_page_elements.Password_Protection_Checkboix)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Password protection checkbox click failed, error occured'+error)
        }
    }

                        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Access Tickets message input
    async AccessTicketsMessageInput(){
        const ele= this.page.locator(this.settings_page_elements.Access_ticket_Message)
        try {
            await ele.fill("Test Message")
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Access Tickets message input failed, error occured'+error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Copy Link Click
    async CopyLinkClick(){
        const ele= this.page.locator(this.settings_page_elements.Copy_link)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Copy Link Click failed, error occured'+error)
        }
    }

                                
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Save Button Click
    async SaveClick(){
        const ele= this.page.locator(this.settings_page_elements.SAVE)
        try {
            await ele.click()
          await this.page.waitForTimeout(3000)
        } catch (error) {
         throw new Error('Save Button Click failed, error occured'+error)
        }
    }

}
