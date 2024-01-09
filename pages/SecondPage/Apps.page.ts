import { expect, Page } from "@playwright/test";

export default class AppsPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    
    private apps_page_elements = {
        search_input:'//input[@placeholder="Search for an app..."]',
        three_by_three_grid:'//img[@data-testid="navIcon"]//parent::div',
        liveOrder_li_item:'//p[text()="Reservations"]//parent::div//parent::li',
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        dropdown_container_header:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        search_input_ele:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        no_match_found:'//p[text()="No match found"]',
        actions_button:'//span[text()="Actions"]//parent::button',
        hidden_ele_icon:'//img[@data-testid="hidden-outlinedIcon"]',
        make_hidden_li_item:'//p[text()="Make Hidden"]//parent::li',
        edit_details_li_item:'//p[text()="Edit Details"]//parent::li',
        make_visible_li_item:'//p[text()="Make Visible"]//parent::li',
        table_hidden_ele_icon:'//td[2]//img[@data-testid="visible-outlinedIcon"]',
        app_link:'//a[@title]',
        explore_all_events_header:'//h2[text()="Explore all events"]',
        event_dashboard_link:'//a[@title="Event Dashboard"]',
        import_csv_header:'//h1[text()="Import CSV"]',
        new_event_header:'//h1[text()="New Event"]',
        app_name_text:'//div[text()="The App name is required"]',
        app_slug_text:'//div[text()="The App slug is required"]',
        app_type_text:'//div[text()="The App type is required"]',
        app_timezone_text:'//div[text()="The App timezone is required"]',
        app_dropdown_header_element:'//div[@class="sc-LwQvY jcqefh"]',
        app_dropdown_list:'//ul[@role="listbox"]',
        event_name_input:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        event_subtitle_input:'//textarea',
        click_event_catagory:'//p[text()="Select a Category"]//parent::div',
        event_description_text:'//div[@class="rdw-editor-main"]',
        image_input:'//input[@accept="image/png, image/jpeg"]',
        name_input_field:'//input[@placeholder="Name"]',
        select_country:'//p[text()="Select Country"]//parent::div',
        button_create_new_app:'//span[text()="Create New Location"]//parent::span//parent::button',
        select_location:'//p[text()="Select a Location"]//parent::div',
        select_category:'//p[text()="Select a Category"]//parent::div',
        save_button:'//span[text()="Save"]//parent::span//parent::button',
        looking_for_event_names:'//input[@placeholder="Event Names"]',
        date_input_element:'//input[@type="text"]',
        date_search_input:'//input[@placeholder="Any Date"]',
        calendar_button:'//button[@class="MuiButtonBase-root MuiIconButton-root"]',
        year_selector:'//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPickersToolbarButton-toolbarBtn"]',
        ok_button:'//span[text()="OK"]//parent::button',
        next_button:'//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton"]',
        place_search_input:'//input[@placeholder="Any Location"]',
        explore_events:'//div[@class="MuiFormControl-root"]',
        clear_search_filters_button:'//span[text()="Clear Search Filters"]//parent::span//parent::button'

    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: This is a search function for super admin section to Search created App.
    async typeSearchFunction(value:string){
        const ele = this.page.locator(this.apps_page_elements.search_input)
        await ele.type(value,{delay:100})
    }


    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: ---------------------------------------------------------?
    // async waitForElementTovisible(value:string){
    //     const ele = this.page.locator(`//div[text()="${value}"]`)
    //     await expect(ele).toBeVisible()
    // }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on aloompa app name "2023 UniDev Test 0001"
    async click_on_app(value:string){
        const ele = this.page.locator(`//div[text()='${value}']`)
        await ele.click({force:true})
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking menu button on "2023 UniDev Test 0001"
    async click_on_3_by_3_grid(){
        const ele=this.page.locator(this.apps_page_elements.three_by_three_grid)
        await ele.click()
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking menu section on "2023 UniDev Test 0001"
    async click_on_liveorder_reservations(){
        const ele=this.page.locator(this.apps_page_elements.liveOrder_li_item)
        await ele.click()
        await this.page.waitForTimeout(3000)
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on first app (001 test arif)
    async click_first_app_name(){
        const ele = this.page.locator(this.apps_page_elements.app_link).nth(1)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on first app (001 test arif)
    async click_3rd_app_name(){
        const ele = this.page.locator(this.apps_page_elements.app_link).nth(3)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: create New App On App directory (LiveOrder&reservations)
    async click_create_new_app(){
        const ele = this.page.locator(this.apps_page_elements.button_ele)
       try {       
         await ele.click()
         await this.page.waitForTimeout(3000)
       } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | click on create new app button failed, Error occured'+error)
       }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input text for app name
    async input_add_name(value:string){
        const ele = this.page.locator(this.apps_page_elements.input_ele_form).first()
        try {
            await ele.type(value,{timeout:100})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | App name input element not found : Error occured'+error)
       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input text for app slug
    async input_app_slug(value:string){
        const ele = this.page.locator(this.apps_page_elements.input_ele_form).last()
       try {
         await ele.type(value,{timeout:100})
       } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | App slug input element not found : Error occured'+error)
       
       }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click app_type dropdown in create app section
    async click_app_type_dropdown(){
        const ele = this.page.locator(this.apps_page_elements.dropdown_container_header).first()
      try {
          await ele.click({delay:1000,force:true}) 
      } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | App type dropdown input element not found : Error occured'+error)
  
      } 
      
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select app_type in create app section
    async select_app_type(value:string){
        const list_ele=this.page.locator(`//li[@data-value="${value}"]`)
       try {
         await list_ele.click()
       } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | App type dropdown input element not found : Error occured'+error)
  
       }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking timezone dropdown in create app section
    async click_timezone_dropdown(){
        const ele = this.page.locator(this.apps_page_elements.dropdown_container_header).last()
    try {
            await ele.click({delay:1000,force:true})  
    } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | timezone dropdown input element not found : Error occured'+error)
     
    }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  select timezone in create app section
    async select_timezone(value:string){
       const list_ele=this.page.locator(`//li[@data-value="${value}"]`)
       try {
        await list_ele.click()
       } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | selected timezon dropdown list input element not found : Error occured'+error)
   
       }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select cancel button in create app section
    async select_cancel(){
        const ele= this.page.locator(this.apps_page_elements.button_ele).first()
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | cancel button element not found, click failed : Error occured'+error)
     
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click on "Cancel" button in create new app
    async select_create_new_app(){
        const ele= this.page.locator(this.apps_page_elements.button_ele).last()
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | cancel button element not found, click failed : Error occured'+error)
     
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "The app name is required" Text is visible
    async validate_app_name_required_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.app_name_text)
        try {
                await expect(ele).toBeVisible() 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  app name required input text not visible |  Error occured: '+error)
          
        }  
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "The app slug is required" Text is visible
    async validate_app_slug_required_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.app_slug_text)
        try {
                await expect(ele).toBeVisible() 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  app slug required input text not visible |  Error occured: '+error)
          
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "The app type is required" Text is visible
    async validate_app_type_required_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.app_timezone_text)
        try {
                await expect(ele).toBeVisible() 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  app type required input text not visible |  Error occured: '+error)
          
        }
    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "The app timezone is required" Text is visible
    async validate_app_timezone_required_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.app_timezone_text)
        try {
                await expect(ele).toBeVisible() 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  app time zone required input text not visible |  Error occured: '+error)
          
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: ------------------------------------------------------------------?
    async type_search_in_field(value:string){
        const ele= this.page.locator(this.apps_page_elements.search_input_ele)
        try {
            await ele.type(value,{delay:100})   
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Search field input element not Found | click failed : Error occured'+error)
  
        }    
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "No Match Found" after searched invalid search credentials 
    async check_no_match_found(){
        const ele = this.page.locator(this.apps_page_elements.no_match_found)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | No match found text element not found|  Error occured: '+error)
 
        }
    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on actions button
    async click_on_actions_button(){
        const ele = this.page.locator(this.apps_page_elements.actions_button).first()
       try {
         await ele.click()
       } catch (error) {
        throw new Error('Aloompa|admin | Apps directory | click on actions element not found|  Error occured: '+error)
       }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check hidden icon visiblity
    async check_hidden_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.hidden_ele_icon)
    try {
            await expect(ele).toBeVisible() 
    } catch (error) {
        throw new Error('Aloompa|admin | Apps directory |  hidden icon element not visible |  Error occured: '+error)
      
    }  
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check "edit details" button visiblity
    async check_edit_details_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.edit_details_li_item)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  edit details element not visible |  Error occured: '+error)
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Check Hidden button is visible or not
    async check_make_hidden_visiblity(){
        const ele= this.page.locator(this.apps_page_elements.make_hidden_li_item)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  make hidden list item element not visible |  Error occured: '+error)   
        }    
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "make hidden " button
    async click_make_hiddent(){
        const ele= this.page.locator(this.apps_page_elements.make_hidden_li_item)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  make hidden list item element not found, click failed|  Error occured: '+error)   
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click Edit Details element.
    async click_edit_details(){
        const ele= this.page.locator(this.apps_page_elements.edit_details_li_item)
        try {
                await ele.click()
        
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  Edit Details element not found, click failed|  Error occured: '+error)   
     
        }  
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on "Make visible" button on action section
    async click_make_visible(){
        const ele= this.page.locator(this.apps_page_elements.make_visible_li_item)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  make visible list item element not found, click failed|  Error occured: '+error)     
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: cheking "visible" button is visible or not
    async check_hidden_invisiblity(){
        const ele= this.page.locator(this.apps_page_elements.table_hidden_ele_icon)
        try {
                await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  table hidden list item is still visible| Error occured: '+error)       
        }
    }

 
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select category from "create new event"
    async select_first_category(value:string){
        const ele = this.page.locator(this.apps_page_elements.select_category)
        const list_ele=this.page.locator(`//p[text()="${value}"]//parent::li`)
        try {
            await ele.click()
            await list_ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    
    

}