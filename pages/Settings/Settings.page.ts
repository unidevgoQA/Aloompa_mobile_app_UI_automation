import { expect, Page } from "@playwright/test";

export default class Settings {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Settings_Page_Elements = {
        General_settings_navigator: "//a[contains(text(),'General')]",
        Display_NameInput:"//input[@placeholder='Display Name']",
        display_BN:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        City_Input:"//input[@placeholder='City']",
        LattitudeINput:"//input[@placeholder='33.66147']",
        LongitutdeINput:"//input[@placeholder='-117.77222']",
        Timezone_Drpdwn:"//div[@role='button']",
        SelectTimezone:"//li[@data-value='Asia/Dhaka']//p[1]",
        Active_Setup:"(//input[@type='checkbox'])[1]",
        Add_To_Schedule:"(//input[@type='checkbox'])[2]",
        Display_Event:"(//input[@type='checkbox'])[3]",
        Display_End:"(//label[text()='Display Event End Times in List View']/following::input)[1]",
        AppStore_Url:"//input[@placeholder='https://apps.apple.com/us/app/<package_name>/id<app_id>']",
        Google_Store_URL:"//input[@placeholder='https://play.google.com/store/apps/details?id=com.organization.name']",
        Language_Dropdown:"(//span[@class='MuiIconButton-label'])[2]",
        Select_Language:"//li[@id='mui-autocomplete-84815-option-0']",
        IOS_Bundle_Id:"//input[@placeholder='com.organization.name']",
        IOS_Version_Number:"//input[@placeholder='1.0.0']",
        AndroidVersion:"//input[@placeholder='1']-",
        Android_BundleID:"//input[@placeholder='com.aloompa.festapp']",
        SaveBTn:"//input[@placeholder='com.aloompa.festapp']",
        ErrorVersion:"(//div[text()='Version number is required.'])[1]",
        AnErrorVerAlert:"(//div[text()='Version number is required.'])[2]",
        TicketmasterNav:"//a[contains(text(),'Ticketmaster')]",
        AndroidCustomerkeyinput:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
        IOSCustomerkeyinput:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        Team_Name_Inout:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
        ColorScheme:"//input[@class='sc-kHNMoK YuGGQ']",
        Color_Code_Input:"//input[@placeholder='#000000']",
        Scheme_Input:"//input[@placeholder='psdkscheme']",
        SaveButtonTicketmaster:"(//span[text()='Save'])[2]",
        AXE_Nav:"//a[contains(text(),'AXS')]",
        ClientID_INput:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
        Client_Secret_Input:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        Verify_Email_Chkbox:"//input[@type='checkbox']",
        CUE_Lightshow_Nav:"//a[contains(text(),'CUE Lightshow')]",
        URL_Input:"input.MuiInputBase-input.MuiOutlinedInput-input",
        Light:"//h1[text()='CUE Lightshow']",
        Invalid_Alert:"//div[text()='Please enter a valid URL beginning with https://']",
        Required_URL_Alert:"//div[text()='The Url is required']",

        

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicks on General settings from the Left panel

    async click_Generalsettings() {
        const ele = this.page.locator(this.Settings_Page_Elements.General_settings_navigator)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  General settings page element not found at top, click failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Input Display Name 

    async display_Name_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Display_NameInput)
        try {
            await ele.clear()
            await ele.fill("UnidevGO 001")
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  Display Name Inpput element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Display Name Bn

    async display_Name_BN() {
        const ele = this.page.locator(this.Settings_Page_Elements.display_BN)
        try {
           await ele.clear()
           await ele.fill("UnidevGO 001")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  Display Name Bn element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the City input field

    async City_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.City_Input)
      
        try {
            await ele.clear()
            await ele.fill("Dhaka")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  City Name Input element not found , Input failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Lattitude input field

    async Lattitude_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.LattitudeINput)
      
        try {
            await ele.clear()
            await ele.fill("33.66147")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  Lattitude Input element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Longitude input field

    async Longitude_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.LongitutdeINput)
      
        try {
            await ele.clear()
            await ele.fill("-117.77222")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  Longitude Input element not found , Input failed|  Error occured: ' + error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the timezone dropdown

    async TimeZone_drpdwnClick() {
        const ele = this.page.locator(this.Settings_Page_Elements.Timezone_Drpdwn)
      
        try {
            await ele.dblclick()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Timezone Dropdown element not found , Click failed|  Error occured: ' + error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the timezone option from the dropdown

    async Select_TimeZone() {
        const ele = this.page.locator(this.Settings_Page_Elements.SelectTimezone)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Timezone option element not found , Click failed|  Error occured: ' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Active Setup Checkbox

    async Active_Setup_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Active_Setup)
      
        try {
            await ele.dblclick()
            await this.page.waitForTimeout(3000)
            await ele.dblclick()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Active Setup element not found , Click failed|  Error occured: ' + error)
        }
    }
                
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Add to schedule Checkbox

    async Add_To_Schedule_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Add_To_Schedule)
      
        try {
            await ele.dblclick()
            await this.page.waitForTimeout(3000)
            await ele.dblclick()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Add to schedule element not found , Click failed|  Error occured: ' + error)
        }
    }
                    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Display Event Checkbox

    async Display_Event_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Display_Event)
      
        try {
            await ele.dblclick()
            await this.page.waitForTimeout(3000)
            await ele.dblclick()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Display Event element not found , Click failed|  Error occured: ' + error)
        }
    }
                        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Display End Checkbox

    async Display_End_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Display_End)
      
        try {
            await ele.dblclick()
            await this.page.waitForTimeout(3000)
            await ele.dblclick()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Display End element not found , Click failed|  Error occured: ' + error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the App store URL input field

    async AppStore_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.AppStore_Url)
      
        try {
            await ele.clear()
            await ele.fill("https://www.apple.com/app-store/")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  App Sote URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Google Play store URL input field

    async PLayStore_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Google_Store_URL)
      
        try {
            await ele.clear()
            await ele.fill("https://play.google.com/store/apps/details?id=gal.bandas.stickers&gclid=CjwKCAiA8YyuBhBSEiwA5R3-E2gOgRjBM94Sp87RozqFlOvN2yHAQmVv-buXu4TOiM1xLGFZO2W-thoC8qUQAvD_BwE&pli=1")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page |  Play Sote URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Language dropdown

    async Language_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Language_Dropdown)
      
        try {
            await ele.click()
            await ele.fill("bn")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Language Dropdown element not found , Click failed|  Error occured: ' + error)
        }
    }
                
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the option from the Language dropdown

    async Select_Language() {
        const ele = this.page.locator(this.Settings_Page_Elements.Select_Language)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Language option element not found , Click failed|  Error occured: ' + error)
        }
    }
                    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the IOS bundle ID

    async IOS_Bundle_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.IOS_Bundle_Id)
      
        try {
            await ele.clear()
            await ele.fill("com.aloompa.dannytest")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | IOS Bundle Input element not found , Click failed|  Error occured: ' + error)
        }
    }
                        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the IOS Version Number

    async IOS_Version_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.IOS_Version_Number)
      
        try {
            await ele.clear()
            await ele.fill("16.7.5")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | IOS Version Number Input element not found , Click failed|  Error occured: ' + error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Android Version Number

    async Android_Version_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.AndroidVersion)
      
        try {
            await ele.clear()
            await ele.fill("16.7.5")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Android Version Number Input element not found , Click failed|  Error occured: ' + error)
        }
    }
                        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Fill the Android bundle ID

    async Android_Bundle_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Android_BundleID)
      
        try {
            await ele.clear()
            await ele.fill("com.aloompa.dannytest")
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Android Bundle Input element not found , Click failed|  Error occured: ' + error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Save Button

    async Save_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.SaveBTn)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Save button element not found , Click failed|  Error occured: ' + error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clear the IOS Version Number

    async IOS_Version_Input_Required() {
        const ele = this.page.locator(this.Settings_Page_Elements.IOS_Version_Number)
      
        try {
            await ele.clear()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | IOS Version Number Input element not found , Click failed|  Error occured: ' + error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clear the Android Version Number

    async Android_Version_Input_Required() {
        const ele = this.page.locator(this.Settings_Page_Elements.AndroidVersion)
      
        try {
            await ele.clear()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Android Version Number Input element not found , Click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Checking if the IOS version required Alert is visible

    async IOS_RequiredAlert() {
        const ele = this.page.locator(this.Settings_Page_Elements.ErrorVersion)
      
        try {
            await ele.isVisible()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | IOS Version Error Alert element not found , Click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Checking if the Android version required Alert is visible

    async Android_RequiredAlert() {
        const ele = this.page.locator(this.Settings_Page_Elements.AnErrorVerAlert)
      
        try {
            await ele.isVisible()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Android Version Error Alert element not found , Click failed|  Error occured: ' + error)
        }
    }

                                
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Save Button

    async Ticketmaster_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.TicketmasterNav)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin | Settings page | Ticketmaster button element not found , Click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Android Customer Key Input

    async Android_CustomerKey_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.AndroidCustomerkeyinput)
      
        try {
            await ele.clear()
            await ele.fill("asdfgh1235g")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Android Customer keyy Input element not found , Input failed|  Error occured: ' + error)
        }
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: IOS Customer Key Input

    async IOS_CustomerKey_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.IOSCustomerkeyinput)
      
        try {
            await ele.clear()
            await ele.fill("asdfgh1235g")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Android Customer keyy Input element not found , Input failed|  Error occured: ' + error)
        }
    }

        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Team Name Input

    async Team_Name_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Team_Name_Inout)
      
        try {
            await ele.clear()
            await ele.fill("Team Skylarks")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Team Name Input element not found , Input failed|  Error occured: ' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Color Scheme Click

    async Color_Scheme_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.ColorScheme)
      
        try {
            await ele.click()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Color scheme element not found , Click failed|  Error occured: ' + error)
        }
    }

            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Color Code Input

    async Color_Code_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Color_Code_Input)
      
        try {
            await ele.clear()
            await ele.fill("#008080")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Color Code Input element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Scheme Input

    async Scheme_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Scheme_Input)
      
        try {
            await ele.clear()
            await ele.fill("Test Scheme")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketmaster settings page | Scheme Input element not found , Input failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Save Button

    async Ticketmaster_Save_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.SaveButtonTicketmaster)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin | General settings page | Save button element not found , Click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the AXE Button From Navigation

    async Axe_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.AXE_Nav)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin |  settings page | AXE button element not found , Click failed|  Error occured: ' + error)
        }
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Client ID Input

    async ClientID_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.ClientID_INput)
      
        try {
            await ele.clear()
            await ele.fill("dfgr754hgfd")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | AXE settings page | Client ID Input element not found , Input failed|  Error occured: ' + error)
        }
    }

        
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Client Secret Input

    async Client_Secret_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.Client_Secret_Input)
      
        try {
            await ele.clear()
            await ele.fill("dfgr754hgfdfghkjsfg123er")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | AXE settings page | Client Secret Input element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the Verify Email Checkbox

    async Verify_Email_Checkbox_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Verify_Email_Chkbox)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin |  Axe settings page | Verify Email Checkbox element not found , Click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Click on the CUE Lightshow Button From Navigation

    async Lightshow_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.CUE_Lightshow_Nav)
      
        try {
            await ele.click()
           
        } catch (error) {
            throw new Error('Aloompa|admin |  settings page | Cue Lightshow button element not found , Click failed|  Error occured: ' + error)
        }
    }

            
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: URL Input

    async URL_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.URL_Input).first()
      
        try {
            await ele.clear()
            await ele.fill("https://www.youtube.com/watch?v=79kiNUGNG1s")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking outside the URL Input field

    async Light_Click() {
        const ele = this.page.locator(this.Settings_Page_Elements.Light)
      
        try {
            await ele.click()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Validate the invalid Alert is visible

    async Invalid_Alert() {
        const ele = this.page.locator(this.Settings_Page_Elements.Invalid_Alert)
      
        try {
            await ele.isVisible()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Input invalid alert element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Invalid URL Input

    async InvalidURL_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.URL_Input).first()
      
        try {
            await ele.clear()
            await ele.fill("/watch?v=79kiNUGNG")
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Validate the Required Alert is visible

    async Required_Alert() {
        const ele = this.page.locator(this.Settings_Page_Elements.Required_URL_Alert)
      
        try {
            await ele.isVisible()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Required alert element not found , Input failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Invalid URL Input

    async RequiredURL_Input() {
        const ele = this.page.locator(this.Settings_Page_Elements.URL_Input).first()
      
        try {
            await ele.clear()
            await ele.fill("/watch?v=79kiNUGNG")
            await ele.clear()
            
           
        } catch (error) {
            throw new Error('Aloompa|admin | CUE Lightshow settings page | URL Input element not found , Input failed|  Error occured: ' + error)
        }
    }

}
