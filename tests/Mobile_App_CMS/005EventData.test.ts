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
        await EventData.User_Group_Name('Delete User Group')
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
        await EventData.input_on_Search_field_user_group("Delete")
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
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_action_btn_for_delete_place()
    //     await page.waitForTimeout(1000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_delete_place()
        await page.waitForTimeout(1000)
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


//                     ////////////////////////////////////////////////////////////////////////////////////////

//                     //----------------------------------- Stages --------------------------------------- //

//                     //////////////////////////////////////////////////////////////////////////////////////



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
    // await test.step('click on import csv button ', async() =>{ 
    //     await EventData.Click_Category_for_map()
    // })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Category_for_map()
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
        await EventData.Stage_Description('Stage Description')
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
        await EventData.Click_action_btn_1() 
        await EventData.Click_Delete_Stages()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
        await EventData.Validate_Previous_btn_is_working_for_stage()
    })
    
    

    
})

//                     ////////////////////////////////////////////////////////////////////////////////////////

//                     //----------------------------------- Performers -------------------------------------//

//                     //////////////////////////////////////////////////////////////////////////////////////


test("Aloompa-MobileApp-TC-042_Event_Data_Performers_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Performers()
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
test("Aloompa-MobileApp-TC-043_Event_Data_Performers_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_Performers()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-044_Event_Data_Performers_003 | validate all text input fields in New Stage from Stages ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Name('A new performers Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Description('performers Description')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Custom_Preview_Text()
        
    })

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.performers_Preview_Text('Preview Text')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Image_Copyright_Text('Image Copyright Text')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Website_URL('Website URL')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Music_URL('Music URL')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Facebook_Page_ID('Facebook Page ID')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Facebook_Username('Facebook Username')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Instagram_User_Name_for_performers('Instagram User Name')
    })

    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.SnapChat_User_Name_for_performers('SnapChat User Name')
    })

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.SoundCloud_User_Name_for_performers('SoundCloud_User_Name')
    })


    
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Tictok_User_Name_for_performers('Tictok User Name')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Twitch_User_Name_for_performers('Twitch User Name')
    })

   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.X_User_Name_for_performers('X User Name')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Channel_URL('Youtube Channel URL')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Video_embed('Youtube Video embed')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Spotify_URL('Spotify URL')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Spotify_URI('Spotify URI')
    })
   
    
    
})
test("Aloompa-MobileApp-TC-045_Event_Data_Performers_004 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-046_Event_Data_Performers_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Name('performers Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.is_featured_for_performers()
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



   


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
test("Aloompa-MobileApp-TC-047_Event_Data_Performers_006 | Validate create a new group and select a group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
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
        await EventData.performers_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-048_Event_Data_Performers_007 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-049_Event_Data_Performers_008 | Create New Performers ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
    })
    

    
})
test("Aloompa-MobileApp-TC-050_Event_Data_Performers_009 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Stage()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Performers()
    })
    

    
})
test("Aloompa-MobileApp-TC-051_Event_Data_Performers_010 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
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
        await EventData.Select_category_for_Performers_1()
    })

    

    

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Performers_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Performers_2()
    })


    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Performers_category_2_is_Visible()
    })
    
    

    
})
test("Aloompa-MobileApp-TC-052_Event_Data_Performers_011 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
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


test.skip("Aloompa-MobileApp-TC-053_Event_Data_Performers_012 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-054_Event_Data_Performers_013 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-055_Event_Data_Performers_014 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
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
        await EventData.performers_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Performers()
    })
    
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Performers()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    

    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Performers_is_visible()
    })
    
    

    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1() 
        await EventData.Click_Delete_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-056_Event_Data_Performers_015 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
test("Aloompa-MobileApp-TC-057_Event_Data_Performers_016 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.performers_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-058_Event_Data_Performers_017 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Performers()
    })
    
    

    
})





                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Athletes -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


test("Aloompa-MobileApp-TC-059_Event_Data_Athletes_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    
    

    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Athlets()
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
test("Aloompa-MobileApp-TC-060_Event_Data_Athletes_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_Athletes()
    })

   
    
    






    
})
test("Aloompa-MobileApp-TC-061_Event_Data_Athletes_003 | validate all text input fields in New Athletes from Athletes ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('A new Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Position('Athletes Position')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Jersey('Athletes Jersey')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Height('6.2')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Weight('72')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Age('27')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Birthday('06/01/2022')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Place_of_Birth('Athletes Place of Birth')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Athletes Description')
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
        
    })


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Athletes_Preview_Text('Preview Text')
    })


    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Website_URL_for_athlete('Website URL')
    })

   

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Instagram_User_Name_for_Athlete('Instagram User Name')
    })

    

   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Tictok_User_Name_for_Athlete('Tictok User Name')
    })


    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Channel_URL('Youtube Channel URL')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Include_Highlight_Real()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Video_embed('Youtube Video embed')
    })
    
   
    
    
})
test("Aloompa-MobileApp-TC-062_Event_Data_Athletes_004 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-063_Event_Data_Athletes_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Add_Border_to_Athlete_Images_in_App_for_Athletes()
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Athletes Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Athletes")
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
        await page.waitForTimeout(2000) 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-064_Event_Data_Athletes_006 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-066_Event_Data_Athletes_007 | Create New Athletes ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-067_Event_Data_Athletes_008 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-068_Event_Data_Athletes_009 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await EventData.Select_category_for_Athletes_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Athletes_2()
    })


    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_2_is_Visible()
    })
    
    

    
})


test.skip("Aloompa-MobileApp-TC-069_Event_Data_Athletes_010 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
test.skip("Aloompa-MobileApp-TC-070_Event_Data_Athletes_011 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-080_Event_Data_Athletes_012 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-081_Event_Data_Athletes_013 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await page.waitForTimeout(1000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Athlete_is_visible()
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_Athlete()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-082_Event_Data_Athletes_014 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
test("Aloompa-MobileApp-TC-083_Event_Data_Athletes_015 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-084_Event_Data_Athletes_016 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Athlete()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Athlete()
    })
    
    

    
})






                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- Games -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


test("Aloompa-MobileApp-TC-085_Event_Data_Games_001 | Validate import csv is functional ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Games()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Timezone_of_Import_Date_Times()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Select_Timezone_of_Import_Date_Times()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Uses_European_Time_Format_for_games()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Times_are_Unix_Time_Stamps_for_games()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Unix_Time_Stamps_are_in_Milliseconds_for_games()
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
test("Aloompa-MobileApp-TC-086_Event_Data_Games_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_Games()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-087_Event_Data_Games_003 | validate all text input fields in New Game from Games . ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Name('A new Athletes Name')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Description('Athletes Description')
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Custom_Preview_Text()
        
    })


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        
        await EventData.Games_Preview_Text('Preview Text')
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_Start_Time()
    })



   
    
   
    
    
})
test("Aloompa-MobileApp-TC-088_Event_Data_Games_004 | validate `Add a new place` and select a location ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.Click_Add_A_New_Place()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_POI_Name('POI_Name')
        await page.waitForTimeout(2000)
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_A_Category()
    })


    await test.step('click on EventData button', async() =>{ 
        await EventData.Select_Save_Category()
    })








    await test.step('click on Places button', async() =>{ 
        await EventData.Select_A_Place()
    })

    
  


   
    
   
    
    
})
test("Aloompa-MobileApp-TC-089_Event_Data_Games_005 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-090_Event_Data_Games_006 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-091_Event_Data_Games_007 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Name('Game Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_Gmaes()
    })

    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Game Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
        await page.waitForTimeout(2000)

    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Select_A_Place()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_Start_Time()
    })








    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Games()
        await page.waitForTimeout(2000)
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Game Category Name")
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
        await page.waitForTimeout(2000) 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-092_Event_Data_Games_008 | Validate `Common Button?` is checked and validate deeplink also validate input in the text fields", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Name('Games Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button()
    })

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Common_Button_Text('Common Button')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Common_Button_URL('https://ariful15.hashnode.dev/')
        await page.waitForTimeout(1000)
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button_Deeplink()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
        await EventData.Click_Select_a_type()
        await EventData.select_native_webview()
        await EventData.fill_deeplink_title()
        await EventData.fill_deeplink_URL()
        await EventData.Check_Use_Device_Id()
        await EventData.Click_Save_Deeplink()
    })

    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        await EventData.Select_deep_link_Edit()
        await EventData.Delete_created_deep_link()
        await EventData.Delete_created_deep_link()
    })

    // await test.step('Delete Created Deeplink', async() =>{ 
    //     await EventData.Check_Common_Button()
    //     await EventData.Check_Common_Button_Deeplink()
    //     await EventData.Select_deep_link_for_Delete()
    // })


    





    


    //-----------------


    
})

test("Aloompa-MobileApp-TC-093_Event_Data_Games_009 | validate 'Common Button Color'   ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button()
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_Common_Button_Color_code_for_games("#74c107")
    })
    
    await test.step('fill_color_code ', async() =>{ 
        await EventData.Common_Button_Color_code_for_games('#74C107');
        
    })
    
    
    
})
test("Aloompa-MobileApp-TC-094_Event_Data_Games_010 | Create New Game ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Games()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Name('001 Game Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_Start_Time()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_A_Place()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_A_Category()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Games()
    })
    

    
})
test("Aloompa-MobileApp-TC-095_Event_Data_Games_011 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Game Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Games()
    })
    

    
})
test("Aloompa-MobileApp-TC-096_Event_Data_Games_012 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
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
        await EventData.Select_category_for_Athletes_1()
    })

 






    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_games_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_games_2()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_2_is_Visible()
    })
    
    

    
})


test.skip("Aloompa-MobileApp-TC-097_Event_Data_Games_013 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
test.skip("Aloompa-MobileApp-TC-098_Event_Data_Games_014 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-099_Event_Data_Games_015 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-0100_Event_Data_Games_016 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
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
        await page.waitForTimeout(1000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Description('Game Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Games_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Games()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Games()
    })

   
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1_for_games()
    })
  
   

    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Games_is_visible()
    })


    

    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1_for_games() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_Games()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-0101_Event_Data_Games_017 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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

test("Aloompa-MobileApp-TC-0102_Event_Data_Games_018 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-0103_Event_Data_Games_019 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Games()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Games()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


  


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Games()
    })
    
    

    
})








                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- Events -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////



test("Aloompa-MobileApp-TC-085_Event_Data_Events_001 | Validate import csv is functional ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Events()
    })

    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Events()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Timezone_of_Import_Date_Times()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Select_Timezone_of_Import_Date_Times()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Uses_European_Time_Format_for_games()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Times_are_Unix_Time_Stamps_for_games()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Click_Unix_Time_Stamps_are_in_Milliseconds_for_games()
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
test("Aloompa-MobileApp-TC-086_Event_Data_Events_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Events()
    })
    
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_Events()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-0106_Event_Data_Events_003 | validate all text input fields in New Athletes from Athletes ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Events()
    })

    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Event_Name('A new Event Name')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Events_Description('Events Description')
    })



   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Events_Custom_Preview_Text()
        
    })


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Events_Preview_Text('Preview Text')
    })


    
   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Image_Copyright_Text('Image Copyright Text')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.status_Message('Status Message')
    })

   

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Event_capacity('10')
    })

    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_Start_Time_for_event()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_End_Time()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
        
    })


    
    
    
   
    
    
})


//---5/20/2024---//

test("Aloompa-MobileApp-TC-0107_Event_Data_Events_004 | Validate Start Time , End Time and Start / End Times TBD ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    
    
    
   
    
    
})
test("Aloompa-MobileApp-TC-0108_Event_Data_Events_005 | Validate `Add a New Stage` and select the stage  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    
    
    
   
    
    
})
test("Aloompa-MobileApp-TC-0109_Event_Data_Events_006 | Validate Performers and select Performer ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    
    
    
   
    
    
})
test("Aloompa-MobileApp-TC-0110_Event_Data_Events_007 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-0111_Event_Data_Events_008 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-0112_Event_Data_Events_009 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Add_Border_to_Athlete_Images_in_App_for_Athletes()
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Athletes Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Athletes")
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
        await page.waitForTimeout(2000) 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-0113_Event_Data_Events_010 | Validate create a new user group and select a user group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
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
        await EventData.performers_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-0114_Event_Data_Events_011 | Validate `Common Button?` is checked and validate deeplink also validate input in the text fields", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('Athletes Name')
    })

    





    


    


    
})
test("Aloompa-MobileApp-TC-0115_Event_Data_Events_012 | validate 'Common Button Color'   ", async ({ EventData,page, AppsPage }) => {

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
test("Aloompa-MobileApp-TC-0116_Event_Data_Events_013 | Create New Game ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0117_Event_Data_Events_014 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0118_Event_Data_Events_015 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await EventData.Select_category_for_Athletes_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Athletes_2()
    })


    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_2_is_Visible()
    })
    
    

    
})


test.skip("Aloompa-MobileApp-TC-0119_Event_Data_Events_016 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
test.skip("Aloompa-MobileApp-TC-0120_Event_Data_Events_017 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-0121_Event_Data_Events_018 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-0122_Event_Data_Events_019 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await page.waitForTimeout(1000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Athlete_is_visible()
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_Athlete()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-0123_Event_Data_Events_020 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
test("Aloompa-MobileApp-TC-0124_Event_Data_Events_021 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-0125_Event_Data_Events_022 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Athlete()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Athlete()
    })
    
    

    
})



                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- Articles -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


// test("Aloompa-MobileApp-TC-0126_Event_Data_Articles_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

//     await test.step('Navigate to apps directory', async() =>{ 
//         await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
//     })

//     await test.step('click on EventData button', async() =>{ 
//         await EventData.click_EventData()
//     })
    
//     await test.step('click on Places button', async() =>{ 
//         await EventData.click_Satges()
//     })
//     await test.step('click on Places button', async() =>{ 
//         await EventData.click_Performers()
//     })
    
    
//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.click_Import_CSV_Btn()
//     })
    
//     await test.step('verify import csv text is visible ', async() =>{ 
//         await EventData.check_import_CSV_text()
//     })

    
//     await test.step('verify import csv text is visible ', async() =>{ 
//         await EventData.Terget_Performers()
//     })

//     await test.step('verify import csv text is visible ', async() =>{ 
//         await page.waitForTimeout(2000)
//         await EventData.Multi_Value_Separator()
//     })



//     await test.step('click select file button', async() =>{ 
//         await EventData.file_uploader_for_csv_file('reservations-events-export.csv')
//     })
//     await test.step('click select file button', async() =>{ 
//         await EventData.check_import_CSV_file_is_uploaded()
//     })

//     await test.step('check the first row header', async() =>{ 
//         await EventData.check_first_row_is_header_import_box()
//     })

//     await test.step('now check if the csv uploaded text is visible', async() =>{ 
//         await EventData.check_csv_uploaded_text()
//     })

//     await test.step('check if the parse button is disabled', async() =>{ 
//         await EventData.click_parse_button()
//     })

//     await test.step('check if the parsing worked correctly', async() =>{ 
//         await EventData.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
//     })
    

//     await test.step('click on upload another button element is missing', async() =>{ 
//         await EventData.click_upload_another()
//     })






    
// })
// test("Aloompa-MobileApp-TC-0127_Event_Data_Articles_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

//     await test.step('Navigate to apps directory', async() =>{ 
//         await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
//     })

//     await test.step('click on EventData button', async() =>{ 
//         await EventData.click_EventData()
//     })
//     await test.step('click on Places button', async() =>{ 
//         await EventData.click_Performers()
//     })
    
    
   
//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.click_export_csv_button_for_Performers()
//     })
    
    






    
// })
// test("Aloompa-MobileApp-TC-0128_Event_Data_Articles_003 | validate all text input fields in New Athletes from Athletes ", async ({ EventData,page, AppsPage }) => {

//     await test.step('Navigate to apps directory', async() =>{ 
//         await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
//     })

//     await test.step('click on EventData button', async() =>{ 
//         await EventData.click_EventData()
//     })
//     await test.step('click on Places button', async() =>{ 
//         await EventData.click_Athletes()
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Click_New_Athletes()
//     })
    
//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Name('A new Athletes Name')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Position('Athletes Position')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Jersey('Athletes Jersey')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Height('6.2')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Weight('72')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Age('27')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Birthday('06/01/2022')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Place_of_Birth('Athletes Place of Birth')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Description('Athletes Description')
//     })



//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Athletes_Custom_Preview_Text()
        
//     })


//     await test.step('click on import csv button ', async() =>{ 
//         await page.waitForTimeout(2000)
//         await EventData.Athletes_Preview_Text('Preview Text')
//     })


    
//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Website_URL_for_athlete('Website URL')
//     })

   

    

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Instagram_User_Name_for_Athlete('Instagram User Name')
//     })

    

   

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Tictok_User_Name_for_Athlete('Tictok User Name')
//     })


    
//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Youtube_Channel_URL('Youtube Channel URL')
//     })

//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Click_Include_Highlight_Real()
//     })



//     await test.step('click on import csv button ', async() =>{ 
//         await EventData.Youtube_Video_embed('Youtube Video embed')
//     })
    
   
    
    
// })
test("Aloompa-MobileApp-TC-0129_Event_Data_Articles_004 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    
    
})
test("Aloompa-MobileApp-TC-0130_Event_Data_Articles_005 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-0131_Event_Data_Articles_006 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Add_Border_to_Athlete_Images_in_App_for_Athletes()
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Athletes Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Athletes")
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
        await page.waitForTimeout(2000) 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-0132_Event_Data_Articles_007 | Validate create a new user group and select a user group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
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
        await EventData.performers_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-0133_Event_Data_Articles_008 | validate `Publish this article later` and set Publish At time", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
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
        await EventData.performers_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-0134_Event_Data_Articles_009 | Create New Game ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0135_Event_Data_Articles_010 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0136_Event_Data_Articles_011 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await EventData.Select_category_for_Athletes_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Athletes_2()
    })


    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_2_is_Visible()
    })
    
    

    
})


test.skip("Aloompa-MobileApp-TC-0137_Event_Data_Articles_012 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
test.skip("Aloompa-MobileApp-TC-0138_Event_Data_Articles_013 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-0139_Event_Data_Articles_014 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-0140_Event_Data_Articles_015 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await page.waitForTimeout(1000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Athlete_is_visible()
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_Athlete()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-0141_Event_Data_Articles_016 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
test("Aloompa-MobileApp-TC-0142_Event_Data_Articles_017 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-0143_Event_Data_Articles_018 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Athlete()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Athlete()
    })
    
    

    
})


                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- FAQ -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

test("Aloompa-MobileApp-TC-0126_Event_Data_Articles_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.click_Performers()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Performers()
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
test("Aloompa-MobileApp-TC-0127_Event_Data_Articles_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_Performers()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-0128_Event_Data_Articles_003 | validate all text input fields in New Athletes from Athletes ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('A new Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Position('Athletes Position')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Jersey('Athletes Jersey')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Height('6.2')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Weight('72')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Age('27')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Birthday('06/01/2022')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Place_of_Birth('Athletes Place of Birth')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Athletes Description')
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
        
    })


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Athletes_Preview_Text('Preview Text')
    })


    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Website_URL_for_athlete('Website URL')
    })

   

    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Instagram_User_Name_for_Athlete('Instagram User Name')
    })

    

   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Tictok_User_Name_for_Athlete('Tictok User Name')
    })


    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Channel_URL('Youtube Channel URL')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Include_Highlight_Real()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Youtube_Video_embed('Youtube Video embed')
    })
    
   
    
    
})
test("Aloompa-MobileApp-TC-0130_Event_Data_Articles_004 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
    
    
    
    
    






    
})
test("Aloompa-MobileApp-TC-0131_Event_Data_Articles_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('Athletes Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_Athletes()
    })

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Add_Border_to_Athlete_Images_in_App_for_Athletes()
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Athletes Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Athletes")
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
        await page.waitForTimeout(2000) 
        await EventData.Click_final_Delete_category_btn()
    })





    


    


    
})
test("Aloompa-MobileApp-TC-0132_Event_Data_Articles_006 | Validate create a new user group and select a user group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_performers()
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
        await EventData.performers_Name('Stage Name')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Performers()
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
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-0134_Event_Data_Articles_007 | Create New FAQ ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0135_Event_Data_Articles_008 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_for_Athletes()
    })
    

    
})
test("Aloompa-MobileApp-TC-0136_Event_Data_Articles_009 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await EventData.Select_category_for_Athletes_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Athletes_2()
    })


    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Athletes_category_2_is_Visible()
    })
    
    

    
})


test.skip("Aloompa-MobileApp-TC-0137_Event_Data_Articles_010 | validate page size  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
test.skip("Aloompa-MobileApp-TC-0138_Event_Data_Articles_011 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-0139_Event_Data_Articles_012 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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


test("Aloompa-MobileApp-TC-0140_Event_Data_Articles_013 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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
        await page.waitForTimeout(1000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Custom_Preview_Text()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_1()
    })
  
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Athlete_is_visible()
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_1() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_Athlete()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-0141_Event_Data_Articles_014 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
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


    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_DropDown()
    //     await page.waitForTimeout(2000)
    // })
    
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(1000)
        await EventData.Click_DropDown()
        await page.waitForTimeout(1000)
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
test("Aloompa-MobileApp-TC-0142_Event_Data_Articles_015 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Athletes()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Athletes_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Athletes()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Athletes()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_DropDown()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_Delete()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_apply_to_selected()
    })
    

    
})
test("Aloompa-MobileApp-TC-0143_Event_Data_Articles_016 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Performers()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Athlete()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Athlete()
    })
    
    

    
})


    

    
})






//---5/20/2024---//




