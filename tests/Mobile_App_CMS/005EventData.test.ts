import test, { expect } from "@fixtures/basePages"
import ReservationPage from "@pages/Messaging";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'
test("005EventData | Verify Mobile App navigation is working properly", async ({EventData, loginPage, page, AppsPage }) => {
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
    //  await AppsPage.waitForElementTovisible('2023 Unidev Test 0001')
    await test.step('click on 2024 UnidevGo Automation', async() =>{ 
        await AppsPage.click_on_app('2024 UnidevGo Automation')
    })

    
})
test.describe('use the same authentication mechanism',async()=>{
    test.use({storageState:authFile})
test("Aloompa-MobileApp-TC-001_Event_Data_Places_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Places()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Multi_Value_Separator()
    })



    await test.step('click select file button', async() =>{ 
        await EventData.file_uploader_for_csv_file('reservations-events-export.csv')
    })
    await test.step('click select file button', async() =>{ 
        await EventData.check_import_CSV_file_is_uploaded()
    })

    await test.step('check the first row header', async() =>{ 
        await EventData.check_first_row_is_header_import_box()
    })

    await test.step('now check if the csv uploaded text is visible', async() =>{ 
        await EventData.check_csv_uploaded_text()
    })

    await test.step('check if the parse button is disabled', async() =>{ 
        await EventData.click_parse_button()
    })

    await test.step('check if the parsing worked correctly', async() =>{ 
        await EventData.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
    })
    

    await test.step('click on upload another button element is missing', async() =>{ 
        await EventData.click_upload_another()
    })






    
})
test("Aloompa-MobileApp-TC-002_Event_Data_Places_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-003_Event_Data_Places_003 | validate all text input fields in New Place from Places  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Name('Place Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.PLace_Description('Place Description')
    })

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Custom_Preview_Text()
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Preview_Text('Preview Text')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Image_Copyright_Text('Image Copyright Text')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Written_Location('Written Location')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Website_URL('Website URL')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Facebook_Username('Facebook Username')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Facebook_Page_ID('Facebook Page ID')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.X_User_Name('X User Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Instagram_User_Name('Instagram User Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.SnapChat_User_Name('SnapChat User Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Channel_URL('Youtube Channel URL')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Spotify_URL('Spotify URL')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Spotify_URI('Spotify URI')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Common_Button_Text('Common Button Text')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Common_Button_URL('Common Button URL')
    })
    
    
})
test("Aloompa-MobileApp-TC-004_Event_Data_Places_004 | Validate upload your own font   ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('AdmirationPains.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-005_Event_Data_Places_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Name('Place Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.is_featured()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Assign_Category_Tag_Color()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Category Name")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Category_tag_color("#AD2525")
    })
    // await test.step('click on import csv button ', async() =>{ 
    //     await EventData.Map_icon()
    // })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.map_icon_value("github")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.icon_uploader_for_category_map("github.svg")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Map_icon_color("#AD2525")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("cate")
        await page.waitForTimeout(2000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Click_action_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Delete_category_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-006_Event_Data_Places_006 | Validate create a new group and select a group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_User_group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.User_Group_Name('User Group Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Name('Place Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_User_Group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field_user_group("User")
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Click_action_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Delete_User_Group_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_final_Delete_User_Group_btn()
    })


    


    




    


    


    
})
test("Aloompa-MobileApp-TC-007_Event_Data_Places_007 |validate all text input fields in 'Include this place on a map' ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Name('Place Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Include_this_place_on_a_map()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_address()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Type_Address("Dhaka")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Cordinates()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.type_cordinates_Lati("20.32165")
    }) 
    await test.step('click on import csv button ', async() =>{ 
        await EventData.type_cordinates_Long("30.3216")
    })

    
})
test("Aloompa-MobileApp-TC-008_Event_Data_Places_008 | select Category for Map and  primary Map ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Include_this_place_on_a_map()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_address()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Category_for_map()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Category_item()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Primary_map()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Primary_map_item()
    })
    
})
test("Aloompa-MobileApp-TC-009_Event_Data_Places_009 | select Category for Map and  primary Map ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Places()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})




//02/02/2024
})


