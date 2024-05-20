import {
  expect,
  Page
} from "@playwright/test";
import {
  existsSync
} from "fs";
export default class EventData {
  private page: Page;
  // static login: any;
  constructor(page: Page) {
    this.page = page;
  }

  private Event_Data_Elements = {





    ////////////////////////////////////////////////////////////////////////////////////////
    //----------------------------------- Places --------------------------------------- //
    //////////////////////////////////////////////////////////////////////////////////////



    button_ele: '//button[@data-testid="button"]',
    input_ele_form: '//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
    dropdown_container_header: '//div[@role="button"]',
    Select_CSV_file_btn: "//span[text()='Select File']",
    Click_EventData: "//a[@title='Event Data']//span[1]",
    Click_Places: "//a[contains(text(),'Places')]",
    Click_Import_CSV_Btn: "//a[contains(text(),'Import CSV')]",
    check_import_CSV_text: "//h1[text()='Import CSV']",
    check_import_CSV_file_is_uploaded: "(//div[@role='alert']//div)[2]",
    Terget_Places: "//p[text()='places']",
    click_upload_another: "//span[text()='Return to Upload Options']",
    check_csv_uploaded_text: "(//div[@role='alert']//div)[2]",
    click_parse_button: "//span[text()='Parse']",
    First_Row_is_Header_checkbox: "//input[@type='checkbox']",
    feedMappingIdHeader: '//th[text()="feedMappingId"]',
    Click_Multi_Value_Separator: "(//div[@role='button'])[2]",
    Comma_symble_is_visible: "(//p[text()=','])[2]",
    click_export_csv_button: "//span[text()='Export CSV']",
    click_New_Places: "//a[contains(text(),'+ New Place')]",
    Place_Name: "(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
    PLace_Description: "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
    Place_Custom_Preview_Text: "(//input[@type='checkbox'])[1]",
    Places_Preview_Text: "(//label[text()='Preview Text']/following::textarea)[1]",
    Image_Copyright_Text: "(//label[text()='Image Copyright Text']/following::input)[1]",
    Written_Location: "(//label[text()='Written Location']/following::input)[1]",
    Website_URL: "(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
    Facebook_Username: "(//label[text()='Facebook Username']/following::input)[1]",
    Facebook_Page_ID: "(//label[text()='Facebook Page ID']/following::input)[1]",
    X_User_Name: "(//input[@placeholder='profile-name'])[2]",
    Instagram_User_Name: "(//input[@placeholder='profile-name'])[3]",
    SnapChat_User_Name: "(//input[@placeholder='profile-name'])[4]",
    Youtube_Channel_URL: "(//label[text()='Youtube Channel URL']/following::input)[1]",
    Spotify_URL: "(//label[text()='Spotify URL']/following::input)[1]",
    Spotify_URI: "(//label[text()='Spotify URI']/following::input)[1]",
    Common_Button_Text: "(//label[text()='Common Button Text']/following::input)[1]",
    Common_Button_URL: "(//label[text()='Common Button URL']/following::input)[1]",
    Upload_font: "//span[text()='Upload Your Own Font']",
    Click_font_dropdown: "//a[@title='Font']//span[1]",
    Click_Create_New_Category: "//span[text()='Create a new category']",
    New_Category_Name: "//input[@placeholder='New Category']",
    is_featured: "(//input[@data-indeterminate='false'])[2]",
    Assign_Category_Tag_Color: "(//input[@type='checkbox'])[3]",
    Category_tag_color: "(//input[@placeholder='#000000'])[1]",
    Map_icon_color: "(//input[@placeholder='#000000'])[2]",
    Map_icon: "//input[@placeholder='Choose an icon...']",
    map_icon_value: "//input[@value='500px']",
    Upload_icons: "//span[text()='Upload Custom Icon']",
    Click_Save: "//span[text()='Save']",
    Click_Save_places: "(//span[text()='Save Place'])[1]",
    Click_Categories: "//a[@title='Categories']",
    input_on_Search_field: "//input[@placeholder='Search by keyword or category...']",
    input_on_Search_field_user_group: "//input[@placeholder='Search by keyword...']",
    Click_action_btn: "//span[text()='Actions']",
    Click_Delete_category_btn: "//p[text()='Delete Category']",
    Click_final_Delete_category_btn: "//span[text()='Delete Category']",
    Click_Create_New_User_group: "//span[text()='Create a new user group']",
    User_Group_Name: "//input[@placeholder='New User Group']",
    Click_User_Group: "//a[@title='User Groups']",
    Click_Delete_User_Group_btn: "//p[text()='Delete User Group']",
    Click_final_Delete_User_Group_btn: "//span[text()='Yes']",
    Include_this_place_on_a_map: "(//input[@type='checkbox'])[2]",
    Click_address: "(//input[@type='radio'])[1]",
    Type_Address: "//input[@placeholder='Enter an address...']",
    Click_Cordinates: "(//input[@type='radio'])[2]",
    type_cordinates_Lati: "(//input[@type='number'])[1]",
    type_cordinates_Long: "(//input[@type='number'])[2]",
    Click_Category_for_map: "(//div[@role='button'])[1]",
    Click_Category_item: "//p[text()='Places of Interest']",
    Click_Primary_map: "(//div[@role='button'])[2]",
    Click_Primary_map_item: "//p[text()='Map 001 (Do not delete)']",
    image_btn: "(//span[text()='Click here']/following::input)[1]",
    Click_Remove_Image: "//span[text()='Remove Image']",
    Click_Create_new_product: "//span[text()='+ Create New Product']",
    Fill_product_name: "(//input[@aria-invalid='false'])[15]",
    Fill_product_Description: "(//label[text()='Description']/following::textarea)[3]",
    Upload_product_image: "((//span[text()='Click here'])[2]/following::input)[1]",
    Fill_product_Price: "(//input[@aria-invalid='false'])[16]",
    Click_Save_product: "(//span[text()='Save Product'])[2]",
    Delete_product: "//button[@title='Edit']/following-sibling::button[1]",
    Common_Button_Color_code: "(//label[text()='Common Button Color']/following::input)[1]",
    Fill_Common_Button_Color_code: "(//label[text()='Common Button Color']/following::input)[2]",
    validate_search_functionality: "(//a[@title='Place Name']//div)[1]",
    click_Filter_by_category: "(//div[@role='button']//p)[1]",
    Select_category_1: "//li[@data-value='40415853-7996-4447-9c2e-fcfc475287cd']//p[1]",
    Validate_category_1_is_Visible: "//p[text()='Category 003 (Do not delete), Category 004 (Do not delete), Category 001 (Do not delete), Category 002 (Do not delete)']",
    Select_category_2: "//li[@data-value='4985dfc8-b0ae-4040-a7d0-b989da0635e0']//p[1]",
    Validate_category_2_is_Visible: "(//p[text()='Places of Interest'])[2]",
    click_Page_Size: "(//div[@role='button']//p)[2]",
    click_View_all: "//p[text()='View All']",
    Validate_page_size_is_working: '//a[@title="New Place 030 (Do not delete)"]//parent::td',
    click_Checkbox: "(//input[@type='checkbox'])[1]",
    Validate_all_checkbox: "//table[contains(@class,'sc-bSFVuW fNjRST')]/div[1]/div[1]/td[43]/span[1]/span[1]/input[1]",
    click_Name_sorting: "(//th[@class='sc-jvfriV kxdBff']//div)[1]",
    Validate_Name_sorting: '//a[@title="New Place 030 (Do not delete)"]//parent::td',
    validate_Action_btn_is_visible: "(//span[text()='Actions'])[1]",
    Click_action_btn_1: "(//span[text()='Actions'])[1]",
    Make_hidden_btn: "//p[text()='Make Hidden']",
    validate_hidden: "//img[@title='hidden-outlined']",
    validate_Visible: "(//img[@title='visible-outlined'])[1]",
    validate_Make_visible_is_visible: "//p[text()='Make Visible']",
    Make_visible_btn: "//p[text()='Make Visible']",
    Edit_details_btn: "//p[text()='Edit Details']",
    Click_return_to_all_Places: "//a[contains(text(),'Return to All Places')]",
    Delete_place_btn: "//p[text()='Delete Place']",
    Click_Yes_btn: "//span[text()='Yes']",
    Select_checkBox: "(//input[@type='checkbox'])[2]",
    Select_checkBox_for_delete: '//div[text()="001 Delete it"]//parent::a/parent::td/preceding-sibling::td//input',
    Click_DropDown: "//p[text()='Choose an action...']",
    Select_Make_Hidden: "//p[text()='Make Hidden']",
    Select_Make_Visible: "//p[text()='Make Visible']",
    Click_apply_to_selected: "//span[text()='Apply to Selected']",
    Click_status_btn: "//div[text()='Status']",
    Select_Delete: "//p[text()='Delete']",
    click_Next_button: "//span[text()='Next']",
    Validate_next_btn_is_working: "(//a[@title='New Place 030 (Do not delete)']//div)[1]",
    click_Previous_button: "//span[text()='Previous']",
    Validate_Previous_btn_is_working: "(//a[@title='New Place 001 (Do not delete)']//div)[1]",
    Click_action_btn_for_category:"//a[contains(text(),'Category Name')]//parent::td//following-sibling::td[4]//div/button",
    Click_action_btn_for_user_group:"//a[@title='Delete User Group']//parent::td//following-sibling::td[3]//div/button",
    Click_action_btn_for_delete_place:`//div[text()="Delete Place"]//parent::a/parent::td/following-sibling::td[4]/div/button`,





    ////////////////////////////////////////////////////////////////////////////////////////
    //----------------------------------- Stages --------------------------------------- //
    //////////////////////////////////////////////////////////////////////////////////////


    click_Satges:"//a[contains(text(),'Stages')]",
    Terget_Stages: "//p[text()='stages']",
    Click_New_Stages:"//a[contains(text(),'+ New Stage')]",
    Stage_Name:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
    Stage_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
    Stage_Custom_Preview_Text: "(//input[@type='checkbox'])[1]",
    Click_Save_Stage:"(//span[text()='Save Stage'])[1]",
    Click_Category_item_for_stages: "//p[text()='Stages']",
    validate_search_functionality_for_Stage: "(//a[@title='Place Name']//div)[1]",
    Select_category_for_stage_1:"//li[@data-value='f8ef6c59-5411-4690-93e8-8c7077db9647']//p[1]",
    Select_category_for_stage_2:"(//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'])[1]",
    Validate_Stage_category_1_is_Visible:"(//p[text()='Stages'])[2]",
    Validate_Stage_category_2_is_Visible:"(//p[text()='Category 001 (Do not delete)'])[2]",
    Validate_next_btn_is_working_for_stage:"(//a[@title='New Stage 030 (Do not delete)']//div)[1]",
    Validate_Previous_btn_is_working_for_stage:"(//a[@title='New Stage 001 (Do not delete)']//div)[1]",
    Click_return_to_all_Stages:"//a[contains(text(),'Return to All Stages')]",
    validate_Delete_Stages_is_visible:"//p[text()='Delete Stage']",
    Click_Delete_Stages:"//p[text()='Delete Stage']",


                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Performers -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


    click_Performers:"//a[contains(text(),'Performers')]",
    Terget_Performers:"//p[text()='performers']",
    Click_New_performers:"//a[contains(text(),'+ New Performer')]",
    performers_Name:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
    performers_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
    performers_Custom_Preview_Text:"//input[@type='checkbox']",
    performers_Preview_Text:"(//label[text()='Preview Text']/following::textarea)[1]",
    Music_URL:"(//input[@aria-invalid='false'])[6]",
    SoundCloud_User_Name:"(//input[@aria-invalid='false'])[11]",
    Tictok_User_Name:"(//input[@placeholder='profile-name'])[4]",
    Youtube_Video_embed:"(//label[text()='YouTube Video Embed']/following::input)[1]",
    Instagram_User_Name_for_performers:"(//input[@placeholder='profile-name'])[2]",
    SnapChat_User_Name_for_performers:"(//input[@placeholder='profile-name'])[3]",
    SoundCloud_User_Name_for_performers:"(//input[@aria-invalid='false'])[11]",
    Tictok_User_Name_for_performers:"(//input[@placeholder='profile-name'])[4]",
    Twitch_User_Name_for_performers:"(//input[@placeholder='profile-name'])[5]",
    X_User_Name_for_performers:"(//input[@placeholder='profile-name'])[6]",
    Click_Save_Performers:"(//span[text()='Save Performer'])[1]",
    is_featured_for_performers:"(//input[@type='checkbox'])[1]",
    validate_search_functionality_for_Performers:"(//a[@title='001 Delete it']//div)[1]",
    Select_category_for_Performers_1:"(//p[text()='Lineup'])[2]",
    Validate_Performers_category_1_is_Visible:"(//p[text()='Lineup'])[2]",
    Select_category_for_Performers_2:"//li[@data-value='e565d798-a4bf-4084-a5bc-e702194c2c53']//p[1]",
    Validate_Performers_category_2_is_Visible:"(//p[text()='Performers'])[2]",
    Click_return_to_all_Performers:"//a[contains(text(),'Return to All Performers')]",
    validate_Delete_Performers_is_visible:"//p[text()='Delete Performer']",
    Click_Delete_Performers:"//p[text()='Delete Performer']",
    Validate_next_btn_is_working_for_Performers:"//div[text()='New Performer (Do not Delete) 028']",
    Validate_Previous_btn_is_working_for_Performers:"//div[text()='New Performer (Do not Delete) 001']",



                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Athletes -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////
Terget_Athlets:"//p[text()='athletes']",
click_Athletes:"//a[@title='Athletes']",
Click_Times_are_Unix_Time_Stamps:"(//input[@type='checkbox'])[1]",
Click_Unix_Time_Stamps_are_in_Milliseconds:"(//input[@type='checkbox'])[2]",
Click_Uses_European_Time_Format:"(//input[@type='checkbox'])[2]",
Click_New_Athletes:"//a[contains(text(),'+ New Athlete')]",
Athletes_Name:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
Athletes_Position:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
Athletes_Jersey:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
Athletes_Height:"(//div[@class='sc-fvhGYg kHEClt inputContainer'])[4]/div/div/input",
Athletes_Weight:"(//input[@placeholder='175lb'])[1]",
Athletes_Age:"(//input[@type='number'])[2]",
Athletes_Birthday:"//input[@placeholder='06/01/2022']",
Athletes_Place_of_Birth:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[7]",
Athletes_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
Athletes_Custom_Preview_Text:"(//input[@type='checkbox'])[1]",
Athletes_Preview_Text:"(//label[text()='Preview Text']/following::textarea)[1]",
Instagram_User_Name_for_Athlete:"(//input[@placeholder='profile-name'])[1]",
Tictok_User_Name_for_Athlete:"(//input[@placeholder='profile-name'])[2]",
Click_Include_Highlight_Real:"(//input[@type='checkbox'])[2]",
Website_URL_for_athlete:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[8]",
Add_Border_to_Athlete_Images_in_App_for_Athletes:"(//input[@type='checkbox'])[3]",
Click_Save_Athletes:"(//span[text()='Save Athlete'])[1]",
is_featured_for_Athletes:"(//input[@type='checkbox'])[2]",
validate_search_functionality_for_Athletes:"(//div[text()='001 Delete it'])[1]",
Select_category_for_Athletes_1:"(//ul[@role='listbox']//li)[2]",
Validate_Athletes_category_1_is_Visible:"(//a[@title='Category validation for Athlete 001 (Do not Delete)']//div)[1]",
Select_category_for_Athletes_2:"(//li[@role='option'])[3]",
Validate_Athletes_category_2_is_Visible:"(//a[@title='Category validation for Athlete 002 (Do not Delete)']//div)[1]",
Click_return_to_all_Athletes:"//a[contains(text(),'Return to All Athletes')]",
validate_Delete_Athlete_is_visible:"//p[text()='Delete Athlete']",
Click_Delete_Athlete:"//p[text()='Delete Athlete']",
Validate_next_btn_is_working_for_Athlete:"(//a[@title='New Athlete (Do not Delete) 026']//div)[1]",
Validate_Previous_btn_is_working_for_Athlete:"(//a[@title='New Athlete (Do not Delete) 001']//div)[1]",




                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Games -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////
Terget_Games:"//p[text()='games']",
click_Games:"//a[contains(text(),'Games')]" ,
Click_New_Games:"//a[contains(text(),'+ New Game')]",
Games_Name:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
Games_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
Games_Custom_Preview_Text:"(//input[@type='checkbox'])[3]",
Games_Preview_Text:"(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",

Click_Save_Games:"(//span[text()='Save Game'])[2]",

validate_search_functionality_for_Games:"//a[contains(text(),'001 Game Delete it')]",
Select_category_for_Games_1:"//p[text()='Category validation for Games 001 (Do not Delete)']",
Validate_Games_category_1_is_Visible:"//a[contains(text(),'New Game (Do not Delete) 001')]",
Select_category_for_Games_2:"//p[text()='Category validation for Games 002 (Do not Delete)']",
Validate_Games_category_2_is_Visible:"//a[contains(text(),'New Game (Do not Delete) 002')]",
Click_return_to_all_Games:"//a[contains(text(),'Return to All Games')]",
validate_Delete_Games_is_visible:"//p[text()='Delete Game']",
Click_Delete_Games:"//p[text()='Delete Game']",
Validate_next_btn_is_working_for_Games:"//span[text()='Next']",
Validate_Previous_btn_is_working_for_Games:"//span[text()='Previous']",
Click_Timezone_of_Import_Date_Times:"(//div[@role='button'])[2]",
Select_Timezone_of_Import_Date_Times:"//li[@data-value='Asia/Dhaka']//p[1]",
Click_Uses_European_Time_Format_for_games:"(//input[@type='checkbox'])[2]",
Click_Times_are_Unix_Time_Stamps_for_games:"(//input[@type='checkbox'])[1]",
Click_Unix_Time_Stamps_are_in_Milliseconds_for_games:"(//input[@type='checkbox'])[2]",
input_Start_Time_Date:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
input_Start_Time_houre:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
Click_Add_A_New_Place:"//span[text()='Add a new place']",
input_POI_Name:"//input[@placeholder='New POI']",
Select_A_Category_1:"(//label[text()='Please select a category']/following-sibling::div)[1]",
Select_A_Category_2:"(//ul[@role='listbox']//li)[2]",
Select_Save_Category:"//span[text()='Save']",
Select_A_Place:"(//label[text()='Choose a Place']/following::input)[1]",
Select_A_Place_2:"(//ul[@role='listbox']//li)[2]",
is_featured_for_Gmaes:"(//label[text()='Please select a category']/following::input)[2]",
Check_Common_Button:"(//label[text()='Please select a category']/following::input)[2]",
Games_Common_Button_Text:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
Games_Common_Button_URL:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
Check_Common_Button_Deeplink:`[type="checkbox"]`,
Click_Create_New_Deeplink:"//span[text()='Create a New Deep Link']",
Click_Select_a_type:"//p[text()='Select a type...']",
select_native_webview:"//p[text()='Native WebView']",
fill_deeplink_title:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
fill_deeplink_URL:"//input[@placeholder='https://aloompa.com/']",
Check_Use_Device_Id:`[type="checkbox"]`,
Click_Save_Deeplink:"//span[text()='Save Deep Link']",
Click_Select_deep_link:"(//div[@role='button'])[3]",
Select_deep_link:"//p[text()='A1']",
Select_deep_link_Edit:"//span[text()='Edit Deep Link']",
Select_deep_link_Edit_and_cancle:"//button[@data-testid='modal-close-button']",
Select_deep_link__and_Remove:"//span[text()='Remove Deep Link']",
Delete_created_deep_link:"//span[text()='Delete Deep Link']",
Fill_Common_Button_Color_code_for_games:"//input[@placeholder='#000000']",
Common_Button_Color_code_for_games:"(//div[text()='Common Button Color']/following::input)[1]",
Select_category_for_games_1:"(//ul[@role='listbox']//li)[3]",
Validate_games_category_1_is_Visible:"//a[contains(text(),'Category validation for Games 001 (Do not Delete)')]",
Select_category_for_games_2:"(//ul[@role='listbox']//li)[2]",
Click_action_btn_1_for_games:"//a[contains(text(),'001 Game Delete it')]//parent::td//following-sibling::td[4]//button",
input_End_Time_Date:"(//label[text()='End Time']/following::input)[1]",
input_End_Time_houre:"(//label[text()='End Time']/following::input)[2]",


















                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Events -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

click_Events:"//a[contains(text(),'Events')]",
Terget_Events:"//p[text()='events']",
Click_New_Events:"//a[contains(text(),'+ New Event')]",
Event_Name:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
Events_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
Events_Custom_Preview_Text:"(//input[@type='checkbox'])[1]",
Events_Preview_Text:"(//label[text()='Preview Text']/following::textarea)[1]",
status_Message:"(//label[text()='Status Message']/following::input)[1]",
Event_capacity:"(//label[text()='Event Capacity']/following::input)[1]",
Check_Start_End_Times_TBD:"(//input[@type='checkbox'])[2]",
input_End_Time_Date_for_event:"(//label[text()='Start Time']/following::input)[1]",
input_End_Time_houre_for_event:"(//label[text()='Start Time']/following::input)[2]",






                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Articles -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////








                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- FAQ -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////


























  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_EventData() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_EventData)
    try {
      await ele.isVisible()
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Category_for_map() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Category_for_map)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Category_item() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Category_item).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Primary_map() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Primary_map)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Primary_map_item() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Primary_map_item)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_address() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_address)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Type_Address(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Type_Address)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Cordinates() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Cordinates)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async type_cordinates_Lati(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.type_cordinates_Lati)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async type_cordinates_Long(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.type_cordinates_Long)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Filter_by_category() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Filter_by_category)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_2)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_category_2_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_category_2_is_Visible)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Checkbox() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Checkbox)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_all_checkbox() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_all_checkbox)
    try {
      await ele.isChecked()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Name_sorting() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Name_sorting)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Name_sorting() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Name_sorting)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_Action_btn_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Action_btn_is_visible)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_checkBox() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_checkBox)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_checkBox_for_delete() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_checkBox_for_delete).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_DropDown() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_DropDown)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_Delete() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_Delete)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_Make_Hidden() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_Make_Hidden)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_Make_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_Make_Visible)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_apply_to_selected() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_apply_to_selected)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_status_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_status_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Next_button() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Next_button)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_next_btn_is_working() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_next_btn_is_working)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Previous_button() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Previous_button)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Previous_btn_is_working() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Previous_btn_is_working)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_search_functionality() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_search_functionality)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Places() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Places)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Page_Size() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Page_Size)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_View_all() {
    const ele = this.page.locator(this.Event_Data_Elements.click_View_all)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_page_size_is_working() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_page_size_is_working)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_Places() {
    const ele = this.page.locator(this.Event_Data_Elements.click_New_Places)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Include_this_place_on_a_map() {
    const ele = this.page.locator(this.Event_Data_Elements.Include_this_place_on_a_map)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Create_New_Category() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Create_New_Category)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Import_CSV_Btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Import_CSV_Btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async check_import_CSV_text() {
    const ele = this.page.locator(this.Event_Data_Elements.check_import_CSV_text)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)

    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:click "parse" button
  async click_parse_button() {
    const ele = this.page.locator(this.Event_Data_Elements.click_parse_button).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async check_csv_uploaded_text() {
    const ele = this.page.locator(this.Event_Data_Elements.check_import_CSV_file_is_uploaded)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Places() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Places)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Multi_Value_Separator() {
    const ele = this.page.locator(this.Event_Data_Elements.Comma_symble_is_visible)
    const ele2 = this.page.locator(this.Event_Data_Elements.Click_Multi_Value_Separator)
    try {

      ele.click;
      await this.page.waitForTimeout(2000)
      await expect.soft(ele2).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: click on the upload another button


  async click_upload_another() {
    const ele = this.page.locator(this.Event_Data_Elements.click_upload_another).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }







  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async check_import_CSV_file_is_uploaded() {
    const ele = this.page.locator(this.Event_Data_Elements.check_import_CSV_file_is_uploaded)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)

    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: file uploader for csv file
  async file_uploader_for_csv_file(value: string) {
    const filePath0 = `testData/csv/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.Event_Data_Elements.Select_CSV_file_btn).nth(0).click()
    ]);
    await fileChooser.setFiles([filePath0]);
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:check "First Row is Header" is checked or not.if not then checked
  async check_first_row_is_header_import_box() {
    const ele = this.page.locator(this.Event_Data_Elements.First_Row_is_Header_checkbox).nth(0)
    try {
      if (!await ele.isChecked()) {
        await ele.check()
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:check "parse" captured Contents of csv correctly and contains valid values in tables in csv
  async check_if_parse_captured_Contents_of_csv_correctly(value1: string, value2: string) {
    const ele = this.page.locator(this.Event_Data_Elements.feedMappingIdHeader)
    const data_ele_1 = this.page.locator(`//div[text()="${value1}"]`)
    const data_ele_2 = this.page.locator(`//div[text()="${value2}"]`)
    //const data_ele_3=this.page.locator(`//div[text()="${value3}"]`)
    try {
      await expect.soft(ele).toBeVisible()
      await expect.soft(data_ele_1).toBeVisible()
      await expect.soft(data_ele_2).toBeVisible()
      //await expect.soft(data_ele_3).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('places-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async PLace_Description(value: string) {
    const ele = await this.page.locator(this.Event_Data_Elements.PLace_Description).nth(0)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Place_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.Place_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Preview_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Places_Preview_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Image_Copyright_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Image_Copyright_Text)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Written_Location(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Written_Location)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Website_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Website_URL)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Facebook_Username(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Facebook_Username)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Facebook_Page_ID(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Facebook_Page_ID)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async X_User_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.X_User_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Instagram_User_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Instagram_User_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async SnapChat_User_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.SnapChat_User_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Youtube_Channel_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Youtube_Channel_URL)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Spotify_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Spotify_URL)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Spotify_URI(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Spotify_URI)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Common_Button_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Common_Button_Text)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Common_Button_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Common_Button_URL)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Place_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Place_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: font_uploader_for_description
  async font_uploader_for_description(value: string) {
    const filePath0 = `testData/fonts/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.Event_Data_Elements.Upload_font).click()


    ]);
    const ele = this.page.locator(this.Event_Data_Elements.Upload_font)

    ele.click()
    await fileChooser.setFiles([filePath0]);


  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_font_dropdown() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_font_dropdown)
    const ele2 = this.page.locator("//li[text()='Admiration-Pains']")
    try {
      await ele.click()
      await ele2.scrollIntoViewIfNeeded()
      await ele2.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save_places() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_places)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_return_to_all_Places() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_return_to_all_Places)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_User_Group() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_User_Group)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async validate_Delete_place_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Delete_place_btn).nth(0)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Delete_place() {
    const ele = this.page.locator(this.Event_Data_Elements.Delete_place_btn)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Validate_Yes_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Yes_btn)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Yes_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Yes_btn)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async is_featured() {
    const ele = this.page.locator(this.Event_Data_Elements.is_featured)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Assign_Category_Tag_Color() {
    const ele = this.page.locator(this.Event_Data_Elements.Assign_Category_Tag_Color)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async New_Category_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.New_Category_Name)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Category_tag_color(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Category_tag_color)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Map_icon() {
    const ele = this.page.locator(this.Event_Data_Elements.Map_icon)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }






  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async map_icon_value(value: string) {
    const ele = this.page.locator("//input[@value='github']")
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }







  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: font_uploader_for_description
  async icon_uploader_for_category_map(value: string) {
    const filePath0 = `testData/icons/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.Event_Data_Elements.Upload_icons).click()


    ]);
    const ele = this.page.locator(this.Event_Data_Elements.Upload_icons)

    ele.click()
    await fileChooser.setFiles([filePath0]);


  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Map_icon_color(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Map_icon_color)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Categories() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Categories)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async input_on_Search_field_user_group(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.input_on_Search_field_user_group)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async input_on_Search_field(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.input_on_Search_field).nth(0)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn_for_category() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn_for_category).nth(0)
    try {
      await this.page.waitForTimeout(2000)
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn_for_user_group() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn_for_user_group).nth(0)
    try {
      await this.page.waitForTimeout(2000)
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn_1).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn_for_delete_place() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn_for_delete_place).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_Make_hidden_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Make_hidden_btn)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_Make_visible_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Make_visible_is_visible)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_Edit_details_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Edit_details_btn)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Edit_details() {
    const ele = this.page.locator(this.Event_Data_Elements.Edit_details_btn).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Make_hidden_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Make_hidden_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Make_Visible_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Make_visible_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_hidden() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_hidden)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Visible)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Delete_category_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_category_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_final_Delete_category_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_final_Delete_category_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Delete_User_Group_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_User_Group_btn)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_final_Delete_User_Group_btn() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_final_Delete_User_Group_btn)
    try {
      await ele.click()
      await this.page.waitForTimeout(3000)
      
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Create_New_User_group() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Create_New_User_group)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async User_Group_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.User_Group_Name)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: file_uploader_for_image_file
  async file_uploader_for_image_file(value: string) {
    const filePath0 = `testData/images/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.Event_Data_Elements.image_btn).click()


    ]);
    const ele = this.page.locator(this.Event_Data_Elements.image_btn)
    ele.scrollIntoViewIfNeeded()
    ele.click()
    await fileChooser.setFiles([filePath0]);


  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Remove_Image() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Remove_Image)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Create_new_product() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Create_new_product)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Fill_product_name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Fill_product_name)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Fill_product_Description(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Fill_product_Description)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: file_uploader_for_image_file
  async Upload_product_image(value: string) {
    const filePath0 = `testData/images/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.Event_Data_Elements.Upload_product_image).click()


    ]);
    const ele = this.page.locator(this.Event_Data_Elements.Upload_product_image)
    ele.scrollIntoViewIfNeeded()
    ele.click()
    await fileChooser.setFiles([filePath0]);


  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Fill_product_Price(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Fill_product_Price)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Save_product() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_product)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Delete_product() {
    const ele = this.page.locator(this.Event_Data_Elements.Delete_product)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:  
  async Fill_Common_Button_Color_code(value1: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Fill_Common_Button_Color_code)
    try {
      await ele.fill(value1)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Common_Button_Color_code(value1: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Common_Button_Color_code)



    try {

      await expect(ele).toHaveValue("#74c107")
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }







  //////////////////////////////////////////////////////////////////////////////////////

//----------------------------------- Stages --------------------------------------- //

//////////////////////////////////////////////////////////////////////////////////////







  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Satges() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Satges)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Stages() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Stages)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button_for_stages() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('stages-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_Stages() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_New_Stages)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Stage_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Stage_Name).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Stage_Description(value: string) {
    const ele = await this.page.locator(this.Event_Data_Elements.Stage_Description).nth(0)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Stage_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.Stage_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save_Stage() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_Stage)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Category_item_for_stages() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Category_item_for_stages).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_search_functionality_for_Stage() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_search_functionality_for_Stage)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_stage_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_stage_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_stage_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_stage_2)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Stage_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Stage_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Stage_category_2_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Stage_category_2_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_next_btn_is_working_for_stage() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_next_btn_is_working_for_stage)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Previous_btn_is_working_for_stage() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Previous_btn_is_working_for_stage)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_return_to_all_Stages() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_return_to_all_Stages)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async validate_Delete_Stages_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Delete_Stages_is_visible).nth(0)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Delete_Stages() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_Stages).nth(0)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


                    ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Performers -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

// Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Performers)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }    
  
  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Performers)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button_for_Performers() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('performers-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_New_performers)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async performers_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.performers_Name).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async performers_Description(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.performers_Description).nth(0)
    try {
      ele.scrollIntoViewIfNeeded()
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async performers_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.performers_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async performers_Preview_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.performers_Preview_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Music_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Music_URL)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async SoundCloud_User_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.SoundCloud_User_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Tictok_User_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Tictok_User_Name)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Youtube_Video_embed(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Youtube_Video_embed)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Instagram_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Instagram_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async SnapChat_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.SnapChat_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async SoundCloud_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.SoundCloud_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Tictok_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Tictok_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async X_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.X_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Twitch_User_Name_for_performers(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Twitch_User_Name_for_performers)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_Performers)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async is_featured_for_performers() {
    const ele = this.page.locator(this.Event_Data_Elements.is_featured_for_performers)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_search_functionality_for_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_search_functionality_for_Performers)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Performers_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Performers_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Performers_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Performers_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Performers_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Performers_2).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Performers_category_2_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Performers_category_2_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_return_to_all_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_return_to_all_Performers)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async validate_Delete_Performers_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Delete_Performers_is_visible).nth(0)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Delete_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_Performers).nth(0)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_next_btn_is_working_for_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_next_btn_is_working_for_Performers)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Previous_btn_is_working_for_Performers() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Previous_btn_is_working_for_Performers)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





                      ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Athletes -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////



// Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Athletes)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Athlets() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Athlets)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button_for_Athletes() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('athletes-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_New_Athletes)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Name).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Position(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Position).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Jersey(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Jersey).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Height(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Height).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Weight(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Weight).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Age(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Age).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Birthday(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Birthday).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Place_of_Birth(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Place_of_Birth).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Description(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Description).nth(0)
    try {
      await ele.fill(value, {
       
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Athletes_Preview_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Athletes_Preview_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Instagram_User_Name_for_Athlete(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Instagram_User_Name_for_Athlete)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Tictok_User_Name_for_Athlete(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Tictok_User_Name_for_Athlete)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Include_Highlight_Real() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Include_Highlight_Real)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Website_URL_for_athlete(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Website_URL_for_athlete)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async is_featured_for_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.is_featured_for_Athletes)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Add_Border_to_Athlete_Images_in_App_for_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.Add_Border_to_Athlete_Images_in_App_for_Athletes)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_Athletes)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_search_functionality_for_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_search_functionality_for_Athletes)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Athletes_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Athletes_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Athletes_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Athletes_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Athletes_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Athletes_2).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Athletes_category_2_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Athletes_category_2_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_return_to_all_Athletes() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_return_to_all_Athletes)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  
   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async validate_Delete_Athlete_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Delete_Athlete_is_visible).nth(0)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Delete_Athlete() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_Athlete).nth(0)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_next_btn_is_working_for_Athlete() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_next_btn_is_working_for_Athlete)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Previous_btn_is_working_for_Athlete() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Previous_btn_is_working_for_Athlete)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



                      ////////////////////////////////////////////////////////////////////////////////////////

                    //----------------------------------- Games -------------------------------------//

                    //////////////////////////////////////////////////////////////////////////////////////

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Games)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Games)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button_for_Games() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('games-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_New_Games)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Games_Name).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Description(value: string) {
    const ele = await this.page.locator(this.Event_Data_Elements.Games_Description).nth(0)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.Games_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Save_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Save_Games)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  //  // Module Name: Aloompa | Admin | Mobile App CMS
  // // Feature Name: Aloompa Mobile App CMS - Event Data
  // // Screen Type: Desktop
  // // Description: 
  // async Click_Category_item_for_Games() {
  //   const ele = this.page.locator(this.Event_Data_Elements.Click_Category_item_for_Games).nth(0)
  //   try {
  //     await ele.click()
  //   } catch (error) {
  //     throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
  //   }
  // }

  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async validate_search_functionality_for_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_search_functionality_for_Games)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Games_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Games_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_Games_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_Games_2)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Games_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Games_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Games_category_2_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Games_category_2_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_next_btn_is_working_for_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_next_btn_is_working_for_Games)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_Previous_btn_is_working_for_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_Previous_btn_is_working_for_Games)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_return_to_all_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_return_to_all_Games)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  

   // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async validate_Delete_Games_is_visible() {
    const ele = this.page.locator(this.Event_Data_Elements.validate_Delete_Games_is_visible).nth(0)

    try {
      await ele.isVisible()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Delete_Games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Delete_Games).nth(0)

    try {
      await ele.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Timezone_of_Import_Date_Times() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Timezone_of_Import_Date_Times)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_Timezone_of_Import_Date_Times() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_Timezone_of_Import_Date_Times)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Uses_European_Time_Format_for_games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Uses_European_Time_Format_for_games)
    try {
      await ele.click()
      await this.page.waitForTimeout(1000)
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Times_are_Unix_Time_Stamps_for_games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Times_are_Unix_Time_Stamps_for_games)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Unix_Time_Stamps_are_in_Milliseconds_for_games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Unix_Time_Stamps_are_in_Milliseconds_for_games)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Preview_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Games_Preview_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async input_Start_Time() {
    const ele = this.page.locator(this.Event_Data_Elements.input_Start_Time_Date)
    const ele2 = this.page.locator(this.Event_Data_Elements.input_Start_Time_houre)
    try {
      await ele.fill("06/01/2024")
      await ele2.fill("07:00 AM")
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


        // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async input_End_Time() {
    const ele = this.page.locator(this.Event_Data_Elements.input_End_Time_Date)
    const ele2 = this.page.locator(this.Event_Data_Elements.input_End_Time_houre)
    try {
      await ele.fill("06/02/2024")
      await ele2.fill("010:00 AM")
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  
      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Add_A_New_Place() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Add_A_New_Place)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async input_POI_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.input_POI_Name)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

        // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_A_Category() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_A_Category_1)
    const ele2 = this.page.locator(this.Event_Data_Elements.Select_A_Category_2)
    try {
      await ele.click()
      await ele2.click()
      

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


          // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_Save_Category() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_Save_Category)
    
    try {
      await ele.click()
      
      

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  
          // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_A_Place() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_A_Place)
    const ele2 = this.page.locator(this.Event_Data_Elements.Select_A_Place_2)
    
    try {
      await ele.click()
      await ele2.click()
      
      

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }




      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async is_featured_for_Gmaes() {
    const ele = this.page.locator(this.Event_Data_Elements.is_featured_for_Gmaes)
    try {
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Check_Common_Button() {
    const ele = this.page.locator(this.Event_Data_Elements.Check_Common_Button)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }  

         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Common_Button_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Games_Common_Button_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  
         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Games_Common_Button_URL(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Games_Common_Button_URL)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Check_Common_Button_Deeplink() {
    const ele = this.page.locator(this.Event_Data_Elements.Check_Common_Button_Deeplink).nth(4)
    try {
     
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_deep_link_Edit_and_Remove() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Select_deep_link)
    const ele1 = this.page.locator(this.Event_Data_Elements.Select_deep_link)
    const ele2 = this.page.locator(this.Event_Data_Elements.Select_deep_link_Edit)
    const ele3 = this.page.locator(this.Event_Data_Elements.Select_deep_link_Edit_and_cancle)
    const ele4 = this.page.locator(this.Event_Data_Elements.Select_deep_link__and_Remove)
    
    
    try {
      await ele.click()
      await this.page.waitForTimeout(1000)
      await ele1.click()
      await this.page.waitForTimeout(1000)
      await ele2.click()
      await this.page.waitForTimeout(2000)
      await ele3.click()
      await this.page.waitForTimeout(1000)
      await ele4.click()
      
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Create_New_Deeplink() {
    const ele1 = this.page.locator(this.Event_Data_Elements.Click_Create_New_Deeplink)
    try {
      await ele1.click()
  

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Select_a_type() {
    const ele2 = this.page.locator(this.Event_Data_Elements.Click_Select_a_type)
    try {
     
      await this.page.waitForTimeout(2000)
      await ele2.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async select_native_webview() {
    const ele3 = this.page.locator(this.Event_Data_Elements.select_native_webview)
    try {

      await ele3.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async fill_deeplink_title() {
    const ele4 = this.page.locator(this.Event_Data_Elements.fill_deeplink_title)
    try {
   
      await ele4.fill('A1')
   
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async fill_deeplink_URL() {
    
    const ele5 = this.page.locator(this.Event_Data_Elements.fill_deeplink_URL)
    
    try {
     
      await ele5.fill('https://ariful15.hashnode.dev/')
    

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Check_Use_Device_Id() {
    
    const ele6 = this.page.locator(this.Event_Data_Elements.Check_Use_Device_Id).nth(5)
   
    try {
      
      await ele6.check({force: true})
   

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_Save_Deeplink() {
    
    const ele7 = this.page.locator(this.Event_Data_Elements.Click_Save_Deeplink)
    try {
      
      await ele7.click()

    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Click_Select_deep_link() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_Select_deep_link)
    try {
      await ele.click()
    
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_deep_link() {
    const ele1 = this.page.locator(this.Event_Data_Elements.Select_deep_link).nth(1)
    try {
      await ele1.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Select_deep_link_Edit() {
(this.Event_Data_Elements.Select_deep_link)
    const ele2 = this.page.locator(this.Event_Data_Elements.Select_deep_link_Edit)
    try {

      await ele2.click()
    
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Delete_created_deep_link() {
    const ele3 = this.page.locator(this.Event_Data_Elements.Delete_created_deep_link)
    try {
     
      await ele3.click()
      await this.page.waitForTimeout(2000)
    
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:  
  async Fill_Common_Button_Color_code_for_games(value1: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Fill_Common_Button_Color_code_for_games)
    try {
      await ele.fill(value1)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Common_Button_Color_code_for_games(value1: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Common_Button_Color_code_for_games)



    try {

      await expect(ele).toHaveValue("#74c107")
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



       // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_games_1() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_games_1)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


        // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Validate_games_category_1_is_Visible() {
    const ele = this.page.locator(this.Event_Data_Elements.Validate_games_category_1_is_Visible).nth(0)
    try {
      await ele.isVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Select_category_for_games_2() {
    const ele = this.page.locator(this.Event_Data_Elements.Select_category_for_games_2).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_action_btn_1_for_games() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_action_btn_1_for_games).nth(0)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }





  //////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////       Events    ///////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////


  
  // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async click_Events() {
    const ele = this.page.locator(this.Event_Data_Elements.click_Events)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Terget_Events() {
    const ele = this.page.locator(this.Event_Data_Elements.Terget_Events)
    try {
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }



    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: clicking "CSV" has Downloaded or not
  async click_export_csv_button_for_Events() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.Event_Data_Elements.click_export_csv_button).click()
    ])
    const suggestedFileName = download.suggestedFilename()
    try {
      if (suggestedFileName.match('events-export.csv')) {
        const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
        await download.saveAs(filePath)
        expect.soft(existsSync(filePath)).toBeTruthy()
      } else {
        throw new Error('File name not correct ')
      }
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: 
  async Click_New_Events() {
    const ele = this.page.locator(this.Event_Data_Elements.Click_New_Events)
    try {
      await ele.click()
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Event_Name(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Event_Name).nth(0)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Events_Description(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Events_Description).nth(0)
    try {
      await ele.fill(value, {
       
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
  
  
         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Events_Custom_Preview_Text() {
    const ele = this.page.locator(this.Event_Data_Elements.Events_Custom_Preview_Text)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

        // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Events_Preview_Text(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Events_Preview_Text)
    try {
      await ele.fill(value)
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

    // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async status_Message(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.status_Message)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

     // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Event_capacity(value: string) {
    const ele = this.page.locator(this.Event_Data_Elements.Event_capacity)
    try {
      await ele.type(value, {
        delay: 200
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }
         // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async Check_Start_End_Times_TBD() {
    const ele = this.page.locator(this.Event_Data_Elements.Check_Start_End_Times_TBD)
    try {
      await this.page.waitForTimeout(2000)
      await ele.check({
        force: true
      })
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }


          // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description:
  async input_Start_Time_for_event() {
    const ele = this.page.locator(this.Event_Data_Elements.input_End_Time_Date_for_event)
    const ele2 = this.page.locator(this.Event_Data_Elements.input_End_Time_houre_for_event)
    try {
      await ele.fill("06/02/2024")
      await ele2.fill("010:00 AM")
    } catch (error) {
      throw new Error('Aloompa | admin | Event Data | Places | "" |  Error occured: ' + error)
    }
  }

}