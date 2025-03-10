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
        await EventData.click_Articles()
    })
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_Articles()
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
        await EventData.Check_Use_Device_Id('4')
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

    
   


    
    
    
   
    
    
})
test("Aloompa-MobileApp-TC-0107_Event_Data_Events_004 | Validate Start Time , End Time and Start / End Times TBD ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.input_Start_Time_for_event()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_End_Time()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
        
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
        await EventData.click_Events()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_choose_a_stage()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_a_stage()
        await page.waitForTimeout(2000)
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Add_a_new_stage()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_stage_name("001 Satge Name Delete it")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_on_select_A_Category()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_A_Category()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Event_Name("001 Event Name Delete it")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Events()
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Satges()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete_001_stage_name()
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
test("Aloompa-MobileApp-TC-0109_Event_Data_Events_006 | Validate Performers and select Performer ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.click_Performers_for_events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_performers_for_events()
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Event_Name('event Name')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
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
        await EventData.is_featured_for_event()
    })




    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Event Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Events()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Event Category Name")
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
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
        await EventData.Event_Name('event Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Events()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_User_Group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field_user_group("Delete User Group")
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Event_Name('Events Name')
    })

    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button_Events()
    })

    


    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Events_Common_Button_URL('https://ariful15.hashnode.dev/')
        await page.waitForTimeout(1000)
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button_Deeplink_for_events()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
        
    })
    await test.step('click on import csv button ', async() =>{ 
        
        await EventData.Click_Select_a_type()
        
    })
    await test.step('click on import csv button ', async() =>{ 
        
        await EventData.select_native_webview()
      
    })
  

    await test.step('click on import csv button ', async() =>{ 
       
        await EventData.fill_deeplink_title_for_event()
       
    })
    await test.step('click on import csv button ', async() =>{ 
        
        await EventData.fill_deeplink_URL()
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Use_Device_Id_for_event()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Deeplink()
    })

    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        await EventData.Select_deep_link_Edit()
        
    })
    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
       
        await EventData.Delete_created_deep_link()
        
    })
    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        
        await EventData.Delete_created_deep_link()
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
        await EventData.click_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Events()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Common_Button_Events()
    })
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Fill_Common_Button_Color_code_for_Events("#74c107")
    })
    
    await test.step('fill_color_code ', async() =>{ 
        await EventData.Common_Button_Color_code_events('#74C107');
        
    })
    
    
    
})
test("Aloompa-MobileApp-TC-0116_Event_Data_Events_013 | Create New event ", async ({ EventData,page, AppsPage }) => {

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
        await EventData.Event_Name('001 Delete it')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Events()
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
        await EventData.click_Events()
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
        await EventData.click_Events()
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
        await EventData.Select_category_for_events_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_events_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_events_2()
    })


    

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_events_category_2_is_Visible()
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
        await EventData.click_Events()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Name_sorting_events()
    })
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
        await page.waitForTimeout(3000)
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await page.waitForTimeout(3000)
    })
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
        await page.waitForTimeout(3000)
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()

        await EventData.Click_Make_hidden_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
        await page.waitForTimeout(3000)
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.click_Name_sorting_events()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()
        await EventData.Click_Make_Visible_btn()
        await page.waitForTimeout(3000)
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.click_Name_sorting_events()
    })
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        await page.waitForTimeout(3000)
    })
   

    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Support()
    //     await EventData.Click_action_btn_for_events()
    // })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Events_Description('Stage Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Events_Custom_Preview_Text()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Start_End_Times_TBD()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Events()
        await page.waitForTimeout(3000)
    })





    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_events()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Name_sorting_events()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Support()
        await EventData.Click_action_btn_for_events()
    })


  
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_events()
        await EventData.validate_Delete_events_is_visible()
    })


    

    await test.step('click on Places button', async() =>{
        await EventData.Support()
        await EventData.Click_action_btn_for_events() 
        await page.waitForTimeout(1000)
        await EventData.Click_Delete_events()
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
        await EventData.click_Events()
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
        await EventData.click_Events()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Name_sorting_events()
        await page.waitForTimeout(3000)
    })

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete_for_event()
        await page.waitForTimeout(3000)
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
        await page.waitForTimeout(3000)
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
        await EventData.click_Events()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Events()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Events()
    })
    
    

    
})


//---5/24/2024---//



                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- Articles -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


test("Aloompa-MobileApp-TC-0126_Event_Data_Articles_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_FAQs()
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_and_validate("articles-export.csv")
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
        await EventData.click_Articles()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject('A new article Name')
    })



    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body('Article body')
    })

    
})
test("Aloompa-MobileApp-TC-0129_Event_Data_Articles_004 | validate upload and remove image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(3000) 
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject('Article subject')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body("Article body")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_commomn('1')
    })

    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("Article Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
        await page.waitForTimeout(2000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_category_cross()
        await page.waitForTimeout(2000)
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_on_select_A_Category_common()
        
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_created_category_common('Article Category Name')
        
    })

    



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Articles()
        await page.waitForTimeout(2000)
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_EventData()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("Article Category Name")
        await page.waitForTimeout(2000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Click_action_btn_for_category_common('Article Category Name')
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject('Articles Subject')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body('Articles Body')
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
        await EventData.Click_Save_Articles()
        await page.waitForTimeout(3000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_User_Group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field_user_group("Delete User Group")
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject('Article Subject')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body('Article body')
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.CheckPublishThisArticleLater()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.inPublishAtTimeAndDate()
    })

   

    
    



    
})
test("Aloompa-MobileApp-TC-0134_Event_Data_Articles_009 | Create New Article ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body('001 Delete it')
        await page.waitForTimeout(3000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.CheckPublishThisArticleLater()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.inPublishAtTimeAndDate()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Articles()
        await page.waitForTimeout(3000)
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
        await EventData.click_Articles()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_common()
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
        await EventData.click_Articles()
        await page.waitForTimeout(2000)
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Article_1()
    })


   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Article_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_Article_2()
    })


    
 

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Article_category_2_is_Visible()
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
        await EventData.click_Articles()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('Articles Subject 001')
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
    })
    


    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await EventData.Click_Make_hidden_btn()
        await page.waitForTimeout(3000)
    })
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_action_btn_1()
    // })
    // await test.step('click on Places button', async() =>{
    //     await EventData.Click_action_btn_1() 
    //     await EventData.Click_Make_hidden_btn()
    // })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
        await page.waitForTimeout(3000)

    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
    })
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
        await EventData.Click_Make_Visible_btn_common()
        await page.waitForTimeout(3000)
    })






    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
        await page.waitForTimeout(1000)
        
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
        await page.waitForTimeout(1000)
        
    })
   
    await test.step('click on Places button', async() =>{ 
        
        await EventData.Click_Edit_details()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Body('Article Description')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Articles_Subject("Articles Subject 001")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.CheckPublishThisArticleLater()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.inPublishAtTimeAndDate()
    })






    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_Articles()
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_XYZ_Common("Return to All Articles")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('Articles Subject 001')
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_Articles()
        await page.waitForTimeout(1000)
    })
  
    

    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_Article_is_visible()
        await page.waitForTimeout(2000)
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_for_Articles() 
        await page.waitForTimeout(2000)
        await EventData.Click_Delete_Articles()
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
        await EventData.click_Articles()
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
        await EventData.click_Articles()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })


    
    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete_for_Articles()
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
        await EventData.click_Articles()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_Articles()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_Articles()
    })
    
    

    
})


                    ////////////////////////////////////////////////////////////////////////////////////////

                        //----------------------------------- FAQ -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

test("Aloompa-MobileApp-TC-0126_Event_Data_FAQ_001 | Validate import csv is functional and Delete imported one  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_Import_CSV_Btn()
    })

    
    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.check_import_CSV_text()
    })

    
    await test.step('verify import csv text is visible ', async() =>{ 
        await EventData.Terget_FAQs()
    })

    await test.step('verify import csv text is visible ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Multi_Value_Separator()
    })



    await test.step('click select file button', async() =>{ 
        await EventData.file_uploader_for_csv_file('FAQ.csv')
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
        await EventData.check_if_parse_captured_Contents_of_csv_correctly('832','001 FAQ import test')
    })

    await test.step('check if the parse button is disabled', async() =>{ 
        await EventData.click_Import()
    })

    

    await test.step('click on upload another button element is missing', async() =>{ 
        await EventData.click_upload_another_common()
    })



    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })




    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 FAQ import test')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_common()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox_for_delete_for_FAQs()
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
test("Aloompa-MobileApp-TC-0127_Event_Data_FAQ_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    
    
   
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.click_export_csv_button_for_FAQs()
    })
    
    






    
})
test("Aloompa-MobileApp-TC-0128_Event_Data_FAQ_003 | validate all text input fields in New FAQ from FAQ ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Name('FAQs Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions('FAQs Questions')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('FAQs Answer')
    })

  
   
    
    
})
test("Aloompa-MobileApp-TC-0130_Event_Data_FAQ_004 | Validate upload your own font  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    await test.step('font_uploader_for_description', async() =>{ 
        await EventData.font_uploader_for_description('Midnight.ttf')
        await page.waitForTimeout(6000)
         
        
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_font_dropdown()
    })


    
})
test("Aloompa-MobileApp-TC-0131_Event_Data_FAQ_005 | Validate create new category and select category and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Name('001 delete faqs Name 01')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions('001 delete faqs Name 01')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('001 faqs Name')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Category()
    })

    
   


    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.is_featured_for_FAQs()
    })

    
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.New_Category_Name("001 delete FAQs Category Name")
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_FAQs()
        await page.waitForTimeout(2000)
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Categories()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("001 delete FAQs Category Name")
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


    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field("001 delete FAQs Category Name")
        await page.waitForTimeout(2000)
    })

    
})
test("Aloompa-MobileApp-TC-0132_Event_Data_FAQ_006 | Validate create a new user group and select a user group and delete Created one", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Name('001 delete faqs Name 02')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions('FAQs Questions')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('FAQs Answer')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_User_group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.User_Group_Name('001 faqs User Group Name delete')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_FAQs()
        await page.waitForTimeout(2000)
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_User_Group()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field_user_group("001 faqs User Group Name delete")
    })
    

    await test.step('click on import csv button ', async() =>{ 
        await page.waitForTimeout(2000)
        await EventData.Click_action_btn_for_user_group_common("001 faqs User Group Name delete")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Delete_User_Group_btn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_final_Delete_User_Group_btn()
        await page.waitForTimeout(3000)
    })



    
})
test("Aloompa-MobileApp-TC-0134_Event_Data_FAQ_007 | Create New FAQ ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_A_Category()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_FAQs()
        await page.waitForTimeout(2000)
    })
    

    
})
test("Aloompa-MobileApp-TC-0135_Event_Data_FAQ_008 | validate search functionality  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })

  
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validate_search_functionality_common()
    })
    

    
})
test("Aloompa-MobileApp-TC-0136_Event_Data_FAQ_009 | validate filter by category  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
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
        await EventData.Select_category_for_FAQ_1()
    })

 


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_FAQ_category_1_is_Visible()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.click_Filter_by_category()
        await page.waitForTimeout(2000)
    })
   
    
    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Select_category_for_FAQ_2()
    })


    
   

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_FAQ_category_2_is_Visible()
    })
    
    

    
})
test.skip("Aloompa-MobileApp-TC-0137_Event_Data_FAQ_010 | validate page size  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-0138_Event_Data_FAQ_011 | validate Check box  ", async ({ EventData,page, AppsPage }) => {

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
test.skip("Aloompa-MobileApp-TC-0139_Event_Data_FAQ_012 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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
test("Aloompa-MobileApp-TC-0140_Event_Data_FAQ_013 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
    })
    


    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await EventData.Click_Make_hidden_btn()
        await page.waitForTimeout(3000)
    })
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_action_btn_1()
    // })
    // await test.step('click on Places button', async() =>{
    //     await EventData.Click_action_btn_1() 
    //     await EventData.Click_Make_hidden_btn()
    // })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })

    
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
        await page.waitForTimeout(3000)

    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
        await EventData.Click_Make_Visible_btn_common()
        await page.waitForTimeout(3000)
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })






    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.check_selected_FAQs()
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
    })


    
   
    await test.step('click on Places button', async() =>{ 
        
        await EventData.Click_Edit_details()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('faq ans')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions("faqs question")
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_Save_FAQs()
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_XYZ_Common("Return to All FAQ")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('just for test')
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn_for_FAQs()
        await page.waitForTimeout(1000)
    })
  
    

    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_FAQs_is_visible()
       
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.check_selected_FAQs()
    })


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_for_FAQs() 
        
       
    })

    await test.step('click on Places button', async() =>{
        
        
        await EventData.Click_Delete_FAQs()
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
    })



    
})
test("Aloompa-MobileApp-TC-0141_Event_Data_FAQ_014 |validate make visible and Hidden from bottom dropdown  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
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
test("Aloompa-MobileApp-TC-0142_Event_Data_FAQ_015 |validate Delete from bottom dropdown ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_New_FAQs()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Name('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Questions('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.FAQs_Answer('001 Delete it')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_A_Category()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_FAQs()
        await page.waitForTimeout(2000)
    })
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
        await page.waitForTimeout(2000)
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_field('001 Delete it')
    })




    await test.step('click on Places button', async() =>{ 
        await EventData.Select_checkBox()
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
        await page.waitForTimeout(2000)
    })
    

    
})
test("Aloompa-MobileApp-TC-0143_Event_Data_FAQ_016 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FAQs()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_for_FAQs()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_for_FAQs()
    })
    
    

    
})


    

                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- FORMS -----------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

test("Aloompa-MobileApp-TC-0144_Event_Data_FORMS_001 | Create new Form and Validate all text input fields in New Forms from Forms  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })
    
    
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickNewForms()
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsName('Created Forms Name 001 ')
    })
    await test.step('click select file button', async() =>{ 
        await EventData.FormsHeaderTitle('Forms Header Title')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsHeaderText('Form Header Text')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsButtonName('Forms Button Name')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormSubmissionMessage('Forms Form Submission Message')
    })
    await test.step('click select file button', async() =>{ 
        await EventData.SaveFormButton()
    })

    
})
test("Aloompa-MobileApp-TC-0145_Event_Data_FORMS_002 | validate all Form Settings check box  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsHeaderTitle('Forms Header Title')
    })
    
    
   
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.check1stCheckBox()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.check2ndCheckBox()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.check3rdCheckBox()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.check4thCheckBox()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.SaveFormButton()
    })   
})
test("Aloompa-MobileApp-TC-0146_Event_Data_FORMS_003 | Validate upload Header Background image  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })

   
    
    
   
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.check1stCheckBox()
    })
   


    await test.step('click on import csv button ', async() =>{ 
        await EventData.SaveFormButton()
    })
    
})
test("Aloompa-MobileApp-TC-0147_Event_Data_FORMS_004 | validate Header Background Color  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('fill_color_code ', async() =>{ 
        await EventData.HeaderBackgroundColorFill("#999999");
        await page.waitForTimeout(3000)
        
    })
    


    await test.step('fill_color_code ', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.HeaderBackgroundColorCode("rgb(153, 153, 153)");
        await page.waitForTimeout(1000)
        
    })


    
})
test("Aloompa-MobileApp-TC-0148_Event_Data_FORMS_005 | Validate all headers text input fields is visible in preview", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })
    
    await test.step('click select file button', async() =>{ 
        await EventData.FormsHeaderTitle('Forms Header Title 1')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsHeaderText('Form Header Text 2')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.FormsButtonName('Forms Button Name 3')
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.check1stCheckBox()
    })

    await test.step('click select file button', async() =>{ 
        await EventData.ValidateFormsHeaderTitle('Forms Header Title 1')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.ValidateFormsHeaderText('Form Header Text 2')
    })

    await test.step('click select file button', async() =>{ 
        await EventData.ValidateFormsButtonName('Forms Button Name 3')
    })
})
test("Aloompa-MobileApp-TC-0149_Event_Data_FORMS_006 | Validate 'Include Sponsor Image' radio button and upload images ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.checkIncludeSponsorImageRadioBtn()
    })
    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })

    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file_include_sponsor_image('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
  
})
test("Aloompa-MobileApp-TC-0150_Event_Data_FORMS_007 | Validate Create a new deep link and select created Sponsor Link and remove link ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.checkIncludeSponsorImageRadioBtn()
    })

    



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Select_a_type()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_native_webview()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_title()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_URL()
    })


   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Use_Device_Id("5")
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Deeplink()
    })



    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        await EventData.Select_deep_link_Edit()
        await EventData.Delete_created_deep_link()
        await EventData.Delete_created_deep_link()
    })
    

    
})
test("Aloompa-MobileApp-TC-0151_Event_Data_FORMS_008 | validate  Add new field and select type `checkbox` and its all fields  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldTypeAsCheckBox()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
    })
    



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Select_a_type()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_native_webview()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_title()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_URL()
    })


   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Use_Device_Id("5")
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Deeplink()
        await page.waitForTimeout(4000)
    })




    
    //Deeplink create ,edit,remove,cencle,delete//

   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickPleaseSelectDeepLinkBtn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link_for_form()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link_Edit_for_form()
        await page.waitForTimeout(3000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link_Edit_and_cancle()
        await page.waitForTimeout(3000)
    })
   
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link__and_Remove()
        await page.waitForTimeout(3000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickPleaseSelectDeepLinkBtn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link_for_form()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Select_deep_link_Edit_for_form()
        await page.waitForTimeout(3000)
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Delete_created_deep_link()
        await page.waitForTimeout(3000)
    })

    //Deeplink create ,edit,remove,cencle,delete//
    //
    


    //7/3/2024
    await test.step('click on import csv button ', async() =>{ 
        await EventData.writeSomethingOnDescription('C')
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validateCheckUncheck()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAdvancedSettingsAndSelectAddConditionsAndRemove()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validateCopy ()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.validateDelete()
    })
    

    
})
test("Aloompa-MobileApp-TC-0152_Event_Data_FORMS_009 | Validate Field Type `Date selector` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Date Selector")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeFieldName("Date Selector")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.typeHint("Date Selector")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectDateFormate("EEE, MMM d")
    })
    
    

    
})
test("Aloompa-MobileApp-TC-0153_Event_Data_FORMS_010 | Validate Field Type `Divider` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Divider")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.DividerText("DividerText")
    })
    

    
})
test("Aloompa-MobileApp-TC-0154_Event_Data_FORMS_011 | Validate Field Type `Drop-down` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Drop-down")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.DropDownQuestion("DropDownQuestion")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.DropDownQuestionHint("DropDownQuestionHint")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickDropDownQuestionHintAddOption()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeDropDownQuestionHintOption("DropDownQuestionHintOption")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeDropDownQuestionHintOptionClose()
    })
    

    
})
test("Aloompa-MobileApp-TC-0155_Event_Data_FORMS_012 | Validate Field Type `Email` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Email")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeEmailLebel("EmailLebel")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.EmailHint("EmailHint")
    })
    
    

    
})
test("Aloompa-MobileApp-TC-0156_Event_Data_FORMS_013 | Validate Field Type `Multiple Choice` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Multiple Choice")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.MultipleChoiceQuestion("MultipleChoiceQuestion")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.MultipleChoiceQuestionOption("MultipleChoiceQuestionOption")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickMultipleChoiceQuestionOptionAddBtn()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeOnMultipleChoiceQuestionOptionAddedOption("Option 1")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.SetDefaultOptionAsOption1()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.MultipleChoiceQuestionOptionAddedOptionRemove()
    })
    
    
    

    
})
test("Aloompa-MobileApp-TC-0157_Event_Data_FORMS_014 | Validate Field Type `Number Input` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Number Input")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.numberInputQuestion("Number Input Question")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.numberInputQuestionHint("Number Input Question Hint")
    })
    
    

    
})
test("Aloompa-MobileApp-TC-0158_Event_Data_FORMS_015 | Validate Field Type `Phone number` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Phone Number")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.phoneNumberLable("Phone Number Lable")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.phoneNumberLableHint("Phone Number Lable Hint")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ClickDefaultCountryCode()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.setDefaultCountryCode()
    })

    

    
})
test("Aloompa-MobileApp-TC-0159_Event_Data_FORMS_016 | Validate Field Type `Short answer` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Short Answer")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.ShortAnswerQuestion("Short Answer Question")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.ShortAnswerQuestionHint("Short Answer Question Hint")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.numberInputQuestionHint("Number Input Question Hint")
    })
    

    
})
test("Aloompa-MobileApp-TC-0160_Event_Data_FORMS_017 | Validate Field Type `Sponsor` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Sponsor")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.TypeBannerName("Banner Name")
    })







    
    
    

     //Deeplink create ,edit,remove,cencle,delete//

   
     await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Select_a_type()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_native_webview()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_title()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_URL()
    })


   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Use_Device_Id("5")
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Deeplink()
    })



    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        await EventData.Select_deep_link_Edit()
        await EventData.Delete_created_deep_link()
        await EventData.Delete_created_deep_link()
    })

    //Deeplink create ,edit,remove,cencle,delete//
    //

    await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
        await EventData.file_uploader_for_image_file('banner.png')
        await page.waitForTimeout(3000)   
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Remove_Image()
    })
    

    
})
test("Aloompa-MobileApp-TC-0161_Event_Data_FORMS_018 | Validate Field Type `Text box` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })

    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Text Box")
    })


     //Deeplink create ,edit,remove,cencle,delete//

   
     await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Create_New_Deeplink()
    })



    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Select_a_type()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.select_native_webview()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_title()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.fill_deeplink_URL()
    })


   

    await test.step('click on import csv button ', async() =>{ 
        await EventData.Check_Use_Device_Id("5")
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.Click_Save_Deeplink()
    })



    await test.step('Select_deep_link_Edit_and_Remove', async() =>{ 
      
        await EventData.Select_deep_link_Edit()
        await EventData.Delete_created_deep_link()
        await EventData.Delete_created_deep_link()
    })

    //Deeplink create ,edit,remove,cencle,delete//
    //
    

    await test.step('click on import csv button ', async() =>{ 
        await EventData.writeSomethingOnTextBox('Text Box')
    })
    



    
    
    
    

    
})
test("Aloompa-MobileApp-TC-0162_Event_Data_FORMS_019 | Validate Field Type `Toggle` and all its feature  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickSearchedForm()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.clickAddNewField()
    })
    
    await test.step('click on import csv button ', async() =>{ 
        await EventData.selectFieldType("Toggle")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.ToggleTitle("Toggle Title")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.toggleDescription("Toggle Description")
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.togglevalidation()
    })
    
    

    
})
test.skip("Aloompa-MobileApp-TC-0163_Event_Data_FORMS_020 | validate Sorting  ", async ({ EventData,page, AppsPage }) => {

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
test("Aloompa-MobileApp-TC-0164_Event_Data_FORMS_021 |validate action button and its features  ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Action_btn_is_visible()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
    })
    


    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Make_hidden_is_visible()
        await EventData.Click_Make_hidden_btn()
        await page.waitForTimeout(3000)
    })
    // await test.step('click on Places button', async() =>{ 
    //     await EventData.Click_action_btn_1()
    // })
    // await test.step('click on Places button', async() =>{
    //     await EventData.Click_action_btn_1() 
    //     await EventData.Click_Make_hidden_btn()
    // })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })

    
    await test.step('click on Places button', async() =>{ 
        await EventData.validate_hidden()
    })
    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
        await page.waitForTimeout(3000)

    })

    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Make_visible_is_visible()
        await page.waitForTimeout(3000)
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
        await EventData.Click_Make_Visible_btn_common()
        await page.waitForTimeout(3000)
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })






    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
    })
    await test.step('click on Places button', async() =>{ 
        await page.waitForTimeout(3000)
        await EventData.validate_Edit_details_is_visible()
        
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
    })


    
   
    await test.step('click on Places button', async() =>{ 
        
        await EventData.Click_Edit_details()
    })


    await test.step('click on import csv button ', async() =>{ 
        await EventData.check1stCheckBox()
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.SaveFormButton()
    })

    

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_return_to_all_XYZ_Common("Return to All Forms")
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })

    await test.step('click on Places button', async() =>{ 
        await EventData.Click_action_btn()
        await page.waitForTimeout(3000)
    })
  
    

    await test.step('click on Places button', async() =>{ 
        await EventData.validate_Delete_is_visible_from_action_btn_common("Delete Form")
       //-----
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('C')
    })
    


    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn() 
        await page.waitForTimeout(3000)
        
       
    })

   
    await test.step('click on Places button', async() =>{
        await EventData.Click_Delete_From_Action_btn_common("Delete Form")
       
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await page.waitForTimeout(4000)
        
    })



    
})
test("Aloompa-MobileApp-TC-0165_Event_Data_FORMS_022 |validate next And Previous button ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_Next_button()
    })
    
    

    

    
    

    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_next_btn_is_working_common()
    })



    await test.step('click on Places button', async() =>{ 
        await EventData.click_Previous_button()
    })
    
    


    
    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Previous_btn_is_working_common()
    })
    

    
})
test("Aloompa-MobileApp-TC-0166_Event_Data_FORMS_023 |validate delete from action btn ", async ({ EventData,page, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('#/apps/b19541b3-6e40-4442-a5d9-c3c8bcfc6325/3d27b311-49c1-4173-8168-c1381dbf97b7',{waitUntil:"domcontentloaded"})
        
    })
    
    await test.step('click on EventData button', async() =>{ 
        await EventData.click_EventData()
    })
    await test.step('click on Places button', async() =>{ 
        await EventData.click_FORMS()
    })

    await test.step('click on import csv button ', async() =>{ 
        await EventData.input_on_Search_keyword_for_form('Created Forms Name 001')
        await page.waitForTimeout(1000)
    })
    
    
    

    await test.step('click on Places button', async() =>{
        await EventData.Click_action_btn_for_form() 
        await page.waitForTimeout(3000)
        
       
    })

   
    await test.step('click on Places button', async() =>{
        await EventData.Click_Delete_From_Action_btn_common("Delete Form")
       
    })


    await test.step('click on Places button', async() =>{ 
        await EventData.Validate_Yes_btn()
        await EventData.click_Yes_btn()
        await page.waitForTimeout(4000)
        
    })



    
})


    
})


//12/11/2024-arif










