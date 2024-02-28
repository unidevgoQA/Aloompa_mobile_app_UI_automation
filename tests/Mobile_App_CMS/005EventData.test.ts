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
        await page.context().storageState({ path: authFile })
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
        await EventData.Place_Name('A new Place Name')
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
        await EventData.font_uploader_for_description('Midnight.ttf')
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
        await EventData.Click_action_btn_for_category()
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
        await EventData.Click_action_btn_for_user_group()
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
test("Aloompa-MobileApp-TC-009_Event_Data_Places_009 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

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
test("Aloompa-MobileApp-TC-010_Event_Data_Places_010 | validate Create  new Product and select created new product   ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.Click_Create_new_product()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_product_name("New product 001")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_product_Description("New product description 001")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Upload_product_image('banner.png')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_product_Price("10")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_product()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Delete_product()
    })


    
    
})
test("Aloompa-MobileApp-TC-011_Event_Data_Places_011 | validate 'Common Button Color'   ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.Fill_Common_Button_Color_code("#74c107")
    })
    await test.step('fill_color_code ', async() =>{ 
        await EventData.Common_Button_Color_code('#74C107');
        
    })
    
    
    
})
test("Aloompa-MobileApp-TC-012_Event_Data_Places_012 |Create New places ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.Place_Name('Delete Place')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_places()
    })
    

    
})
test("Aloompa-MobileApp-TC-013_Event_Data_Places_013 |validate search functionality  ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.input_on_Search_field('Place Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality()
    })
    

    
})
test("Aloompa-MobileApp-TC-014_Event_Data_Places_014 |validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_1()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_category_1_is_Visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_2()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_category_2_is_Visible()
    })
    

    
})
test("Aloompa-MobileApp-TC-015_Event_Data_Places_015 |validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Page_Size()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Page_Size()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.click_View_all()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_page_size_is_working()
    })
    
    

    
    

    
})
test.skip("Aloompa-MobileApp-TC-016_Event_Data_Places_016 |validate Check box  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Checkbox()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_all_checkbox()
    })
    
    
    

    
    

    
})
test.skip("Aloompa-MobileApp-TC-017_Event_Data_Places_017 |validate Sorting  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.click_Name_sorting()
    // })
    await test.step('click on Places button', async() =>{
        await page.waitForTimeout(5000) 
        await EventData.Validate_Name_sorting()
    })
    
    
    

    
    

    
})
test("Aloompa-MobileApp-TC-018_Event_Data_Places_018 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Make_hidden_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
        await page.waitForTimeout(3000)

    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Make_Visible_btn()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_delete_place()
    })
    
    await test.step('click on Places button', async() =>{ 
        
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.PLace_Description('Place Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Place_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Places()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_place_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_delete_place()
    })
    await test.step('click on Places button', async() =>{ 
        
        await EventData.Click_Delete_place()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Yes_btn()
        await page.waitForTimeout(2000)
    })



    
})
test("Aloompa-MobileApp-TC-019_Event_Data_Places_019 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Make_Hidden()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_status_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Make_Visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_status_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Visible()
    })
    
    

    
    

    
})
test("Aloompa-MobileApp-TC-020_Event_Data_Places_020 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.Place_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_places()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-021_Event_Data_Places_021 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working()
    })
    
    

    
})


                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Stages --------------------------------------- //

                    //////////////////////////////////////////////////////////////////////////////////////



test("Aloompa-MobileApp-TC-022_Event_Data_Stages_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Stages()
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
test("Aloompa-MobileApp-TC-023_Event_Data_Stages_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_stages()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-024_Event_Data_Stages_003 | validate all text input fields in New Stage from Stages ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })

    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Name('A new Stage Name')
    })


    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Description('Place Description')
    })

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Custom_Preview_Text()
        
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
test("Aloompa-MobileApp-TC-025_Event_Data_Stages_004 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-026_Event_Data_Stages_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Name('Stage Name')
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
        await EventData.Click_Save_Stage()
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
        await EventData.Click_action_btn_for_category()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Delete_category_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-027_Event_Data_Stages_006 | Validate create a new group and select a group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
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
        await EventData.Stage_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Stage()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_User_Group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field_user_group("User")
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Click_action_btn_for_user_group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Delete_User_Group_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_final_Delete_User_Group_btn()
    })



    
})
test("Aloompa-MobileApp-TC-028_Event_Data_Stages_007 |validate all text input fields in 'Include this place on a map' ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Name('Stage Name')
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
test("Aloompa-MobileApp-TC-029_Event_Data_Stages_008 | select Category for Map and  primary Map ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
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
        await EventData.Click_Category_item_for_stages()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Primary_map()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Primary_map_item()
    })
    
})
test("Aloompa-MobileApp-TC-030_Event_Data_Stages_009 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-031_Event_Data_Stages_010 | validate 'Common Button Color'   ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_Common_Button_Color_code("#74c107")
    })
    await test.step('fill_color_code ', async() =>{ 
        await EventData.Common_Button_Color_code('#74C107');
        
    })
    
    
    
})




test("Aloompa-MobileApp-TC-032_Event_Data_Stages_012 |Create New Stages ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Stage()
    })
    

    
})
test("Aloompa-MobileApp-TC-033_Event_Data_Stages_013 |validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('A new Srage Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Stage()
    })
    

    
})
test("Aloompa-MobileApp-TC-034_Event_Data_Stages_014 |validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_stage_1()
    })

    

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Stage_category_1_is_Visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
    })
    
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_stage_2()
    })

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Stage_category_2_is_Visible()
    })
    
    

    
})
test("Aloompa-MobileApp-TC-035_Event_Data_Stages_015 |validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Page_Size()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Page_Size()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.click_View_all()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_page_size_is_working()
    })
    
    

    
    

    
})






// validate all check box is checked
// validate sorting
// validate action button and its features
// validate make visible and Hidden from bottom dropdown
// validate Delete from bottom dropdown
// validate next And Previous button


test.skip("Aloompa-MobileApp-TC-036_Event_Data_Stages_016 |validate Check box  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Checkbox()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_all_checkbox()
    })
    
    
    

    
    

    
})
test.skip("Aloompa-MobileApp-TC-037_Event_Data_Stages_017 |validate Sorting  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Places()
    })
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.click_Name_sorting()
    // })
    await test.step('click on Places button', async() =>{
        await page.waitForTimeout(5000) 
        await EventData.Validate_Name_sorting()
    })
    
    
    

    
    

    
})
test("Aloompa-MobileApp-TC-038_Event_Data_Stages_018 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Make_hidden_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
        await page.waitForTimeout(3000)

    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Make_Visible_btn()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Description('Place Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Stage()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Stages()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Stages_is_visible()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Delete_Stages()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Yes_btn()
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-039_Event_Data_Stages_019 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Make_Hidden()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_status_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Make_Visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_status_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Visible()
    })
    
    

    
    

    
})
test("Aloompa-MobileApp-TC-040_Event_Data_Stages_020 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Stages()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Stage_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Stage()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-041_Event_Data_Stages_021 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_stage()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_fpr_stage()
    })
    
    

    
})






//02/02/2024
})


