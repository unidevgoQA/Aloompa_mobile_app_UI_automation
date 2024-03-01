import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import AccountManagement from "@pages/Design_Beta";
import Design from "@pages/Design.page";
import ReservationPage from "@pages/Messaging";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'

test.only(" Design | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
    await test.step('Login as Admin', async() =>{ 
        await page.goto('/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`,{state:'visible'});
        // Login with valid credentials
        await loginPage.login(data.username, data.password)

        
    })

    await test.step('Type search function ', async() =>{ 
        await AppsPage.typeSearchFunction('2024 UnidevGo Automation')
    })

    await test.step('click on unidev test 001', async() =>{ 
        await AppsPage.click_on_app('2024 UnidevGo Automation')
    })

    await test.step('click on 3 by 3 grid', async() =>{ 
        await AppsPage.click_on_3_by_3_grid()
    })

    await test.step('click on live order reservations', async() =>{ 
        await AppsPage.click_on_liveorder_reservations()

        await page.waitForLoadState('domcontentloaded')
        await page.context().storageState({ path: authFile })
    })
})


test.describe('use the same authentication mechanism',async()=>{
    test.use({storageState:authFile}) 

    test("009 Settings Page 001 | Validate the Navigation On the General Settings page", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the General settings page', async() =>{ 
            await Settings.click_Generalsettings()
        })
    })
    test("009 Settings Page 002 | Validate the Required fields On the General Settings page", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the General settings page', async() =>{ 
            await Settings.click_Generalsettings()
        })
        await test.step('Clear the IOS Version Number', async() =>{ 
            await Settings.IOS_Version_Input_Required()
            await Settings.Save_Click()
            await Settings.IOS_RequiredAlert()
        })
        await test.step('Clear the IOS Version Number', async() =>{ 
            await Settings.Android_Version_Input_Required()
            await Settings.Save_Click()
            await Settings.Android_RequiredAlert()
        })
    })
    test("009 Settings Page 003 | Validate the Functionalities On the General Settings page are working accordingly", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the General settings page', async() =>{ 
            await Settings.click_Generalsettings()
        })
        await test.step('Input The Display Name', async() =>{ 
            await Settings.display_Name_Input()
        })
        await test.step('Input The Display Name bn', async() =>{ 
            await Settings.display_Name_BN()
        })
        await test.step('Input The City', async() =>{ 
            await Settings.City_Input()
        })
        await test.step('Input The Lattitude', async() =>{ 
            await Settings.Lattitude_Input()
        })
        await test.step('Input The Longitude', async() =>{ 
            await Settings.Longitude_Input()
        })
        await test.step('Click On The Timezone Dropdown', async() =>{ 
            await Settings.TimeZone_drpdwnClick()
        })
        await test.step('Select The Timezone From The Dropdown', async() =>{ 
            await Settings.Select_TimeZone()
        })
        await test.step('Click on the Active Setup Checkbox', async() =>{ 
            await Settings.Active_Setup_Click()
        })
        await test.step('Click on the Add to schedule Checkbox', async() =>{ 
            await Settings.Add_To_Schedule_Click()
        })
        await test.step('Click on the Display Event Checkbox', async() =>{ 
            await Settings.Display_Event_Click()
        })
        await test.step('Click on the Display End Checkbox', async() =>{ 
            await Settings.Display_End_Click()
        })
        await test.step('Input the App store URL', async() =>{ 
            await Settings.AppStore_Input()
        })
        await test.step('Input the Google play store URL', async() =>{ 
            await Settings.PLayStore_Input()
        })
        // await test.step('Click on the language dropdown', async() =>{ 
        //     await Settings.Language_Click()
           
        // })
        // await test.step('Select the language from the dropdown', async() =>{ 
        //     await Settings.Select_Language()
        // })
        await test.step('Fill the IOS bundle ID', async() =>{ 
            await Settings.IOS_Bundle_Input()
        })
        await test.step('Fill the IOS Version Number', async() =>{ 
            await Settings.IOS_Version_Input()
        })
        await test.step('Fill the Android Version Number', async() =>{ 
            await Settings.Android_Version_Input()
        })
        await test.step('Fill the Android bundle ID', async() =>{ 
            await Settings.Android_Bundle_Input()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Save_Click()
        })
    })
    
    test("009 Settings Page 004 | Validate the Navigation On the Ticketmaster Settings page", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the Ticketmaster settings page', async() =>{ 
            await Settings.Ticketmaster_Click()
        })
    })

    test("009 Settings Page 005 | Validate the Functionalities On the Ticketmaster Settings page are working accordingly", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the Ticketmaster settings page', async() =>{ 
            await Settings.Ticketmaster_Click()
        })
        await test.step('Input the android customer key', async() =>{ 
            await Settings.Android_CustomerKey_Input()
        })
        await test.step('Input the IOS customer key', async() =>{ 
            await Settings.IOS_CustomerKey_Input()
        })
        await test.step('Input the Team Name', async() =>{ 
            await Settings.Team_Name_Input()
        })
        await test.step('Validate the color scheme', async() =>{ 
            await Settings.Color_Scheme_Click()
            await Settings.Color_Code_Input()
        })
        await test.step('Validate the Scheme Input', async() =>{ 
            await Settings.Scheme_Input()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Ticketmaster_Save_Click()
        })
    })

    test("009 Settings Page 006 | Validate the Navigation On the AXE Settings page", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the AXE settings page', async() =>{ 
            await Settings.Axe_Click()
        })
    })


    test("009 Settings Page 007 | Validate the Functionalities On the Axe Settings page are working accordingly", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the AXE settings page', async() =>{ 
            await Settings.Axe_Click()
        })
        await test.step('Validate the client ID input field', async() =>{ 
            await Settings.ClientID_Input()
        })
        await test.step('Validate the client Secret input field', async() =>{ 
            await Settings.Client_Secret_Input()
        })
        await test.step('Validate the verify email checkbox', async() =>{ 
            await Settings.Verify_Email_Checkbox_Click()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Ticketmaster_Save_Click()
        })
    })

    test("009 Settings Page 008 | Validate the Navigation On the CUE Lightshow Settings page", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the AXE settings page', async() =>{ 
            await Settings.Lightshow_Click()
        })
    })

    
    test("009 Settings Page 009 | Validate the Functionalities On the CUE Lightshow Settings page are working accordingly", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the CUE Lightshow settings page', async() =>{ 
            await Settings.Lightshow_Click()
        })
        await test.step('Navigate to the CUE Lightshow settings page', async() =>{ 
            await Settings.URL_Input()
            await Settings.Light_Click()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Ticketmaster_Save_Click()
        })
    })
    test.only("009 Settings Page 010 | Validate the Functionalities On the CUE Lightshow Settings page with invalid data", async ({Design, page,AppsPage, Settings }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the CUE Lightshow settings page', async() =>{ 
            await Settings.Lightshow_Click()
        })
        await test.step('Navigate to the CUE Lightshow settings page', async() =>{ 
            await Settings.InvalidURL_Input()
            await Settings.Light_Click()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Ticketmaster_Save_Click()
        })
        await test.step('validate the invalid input alert is visible', async() =>{ 
            await Settings.Invalid_Alert()
        })
    })  

    test("009 Settings Page 011 | Validate the Required fields On the CUE Lightshow Settings page", async ({Design, page,AppsPage, Settings }) => {


        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7/settings')
            
        })
        await test.step('Navigate to the CUE Lightshow settings page', async() =>{ 
            await Settings.Lightshow_Click()
        })
        await test.step('Navigate to theCUE Lightshow settings page', async() =>{ 
            await Settings.RequiredURL_Input()
            await Settings.Light_Click()
        })
        await test.step('Click on the Save Button', async() =>{ 
            await Settings.Ticketmaster_Save_Click()
        })
        await test.step('validate the invalid input alert is visible', async() =>{ 
            await Settings.Required_Alert()
        })
    })
       


        
       
    
    

     


   
   
   

    


    
})