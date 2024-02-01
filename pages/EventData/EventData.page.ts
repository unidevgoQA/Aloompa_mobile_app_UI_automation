import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class EventData {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Event_Data_Elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        dropdown_container_header:'//div[@role="button"]',
        Select_CSV_file_btn:"//span[text()='Select File']",
        Click_EventData:"//span[text()='Event Data']",
        Click_Places:"//a[contains(text(),'Places')]",
        Click_Import_CSV_Btn:"//a[contains(text(),'Import CSV')]",
        check_import_CSV_text:"//h1[text()='Import CSV']",
        check_import_CSV_file_is_uploaded:"(//div[@role='alert']//div)[2]",
        Terget_Places:"//p[text()='places']",
        click_upload_another:"//span[text()='Return to Upload Options']",
        check_csv_uploaded_text:"(//div[@role='alert']//div)[2]",
        click_parse_button:"//span[text()='Parse']",
        First_Row_is_Header_checkbox:"//input[@type='checkbox']",
        feedMappingIdHeader:'//th[text()="feedMappingId"]',
        Click_Multi_Value_Separator:"(//div[@role='button'])[2]",
        Comma_symble_is_visible:"(//p[text()=','])[2]",
        click_export_csv_button:"//span[text()='Export CSV']",
        click_New_Places:"//a[contains(text(),'+ New Place')]",
        Place_Name:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
        PLace_Description:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
        Place_Custom_Preview_Text:"(//input[@type='checkbox'])[1]",
        Places_Preview_Text:"(//label[text()='Preview Text']/following::textarea)[1]",
        Image_Copyright_Text:"(//label[text()='Image Copyright Text']/following::input)[1]",
        Written_Location:"(//label[text()='Written Location']/following::input)[1]",
        Website_URL:"(//input[@aria-invalid='false'])[6]",
        Facebook_Username:"(//label[text()='Facebook Username']/following::input)[1]",
        Facebook_Page_ID:"(//label[text()='Facebook Page ID']/following::input)[1]",
        X_User_Name:"(//input[@placeholder='profile-name'])[2]",
        Instagram_User_Name:"(//input[@placeholder='profile-name'])[3]",
        SnapChat_User_Name:"(//input[@placeholder='profile-name'])[4]",
        Youtube_Channel_URL:"(//label[text()='Youtube Channel URL']/following::input)[1]",
        Spotify_URL:"(//label[text()='Spotify URL']/following::input)[1]",
        Spotify_URI:"(//label[text()='Spotify URI']/following::input)[1]",
        Common_Button_Text:"(//label[text()='Common Button Text']/following::input)[1]",
        Common_Button_URL:"(//label[text()='Common Button URL']/following::input)[1]",
        Upload_font:"//span[text()='Upload Your Own Font']",
        Click_font_dropdown:"//a[@title='Font']//span[1]",
        Click_Create_New_Category:"//span[text()='Create a new category']",
        New_Category_Name:"//input[@placeholder='New Category']",
        is_featured:"(//input[@data-indeterminate='false'])[2]",
        Assign_Category_Tag_Color:"(//input[@type='checkbox'])[3]",
        Category_tag_color:"(//input[@placeholder='#000000'])[1]",
        Map_icon_color:"(//input[@placeholder='#000000'])[2]",
        Map_icon:"//input[@placeholder='Choose an icon...']",
        map_icon_value:"//input[@value='500px']",
        Upload_icons:"//span[text()='Upload Custom Icon']",
        Click_Save:"//span[text()='Save']",
        Click_Save_places:"(//span[text()='Save Place'])[1]",
        Click_Categories:"//a[@title='Categories']",
        input_on_Search_field:"//input[@placeholder='Search by keyword or category...']",
        input_on_Search_field_user_group:"//input[@placeholder='Search by keyword...']",
        Click_action_btn:"//span[text()='Actions']",
        Click_Delete_category_btn:"//p[text()='Delete Category']",
        Click_final_Delete_category_btn:"//span[text()='Delete Category']",
        Click_Create_New_User_group:"//span[text()='Create a new user group']",
        User_Group_Name:"//input[@placeholder='New User Group']",
        Click_User_Group:"//a[@title='User Groups']",
        Click_Delete_User_Group_btn:"//p[text()='Delete User Group']",
        Click_final_Delete_User_Group_btn:"//span[text()='Yes']"


















        

       

    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async click_EventData(){
        const ele = this.page.locator(this.Event_Data_Elements.Click_EventData)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async click_Places(){
        const ele = this.page.locator(this.Event_Data_Elements.Click_Places)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async Click_New_Places(){
      const ele = this.page.locator(this.Event_Data_Elements.click_New_Places)
      try {
          await ele.click()
      } catch (error) {
          throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
      }
  }
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async Click_Create_New_Category(){
      const ele = this.page.locator(this.Event_Data_Elements.Click_Create_New_Category)
      try {
          await ele.click()
      } catch (error) {
          throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
      }
  }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async click_Import_CSV_Btn(){
        const ele = this.page.locator(this.Event_Data_Elements.Click_Import_CSV_Btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async check_import_CSV_text(){
        const ele = this.page.locator(this.Event_Data_Elements.check_import_CSV_text)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Explore all event header element is missing |  Error occured: '+error)       
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:click "parse" button
    async click_parse_button(){
        const ele=this.page.locator(this.Event_Data_Elements.click_parse_button).nth(0)
        try {
           await ele.click()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | button element for parse button not found, click on parse button failed : Error occured '+ error)  
        }
    }



     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async check_csv_uploaded_text(){
        const ele=this.page.locator(this.Event_Data_Elements.check_import_CSV_file_is_uploaded)
        try {
           await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | CSV uploaded text is missing,  Error occured '+ error)  
        }
    }

    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async Terget_Places(){
        const ele=this.page.locator(this.Event_Data_Elements.Terget_Places)
        try {
           await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | CSV uploaded text is missing,  Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async Multi_Value_Separator(){
        const ele=this.page.locator(this.Event_Data_Elements.Comma_symble_is_visible)
        const ele2=this.page.locator(this.Event_Data_Elements.Click_Multi_Value_Separator)
        try {

            ele.click;
            await this.page.waitForTimeout(2000)
           await expect.soft(ele2).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | CSV uploaded text is missing,  Error occured '+ error)  
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on the upload another button


    async click_upload_another(){
        const ele=this.page.locator(this.Event_Data_Elements.click_upload_another).nth(0)
        try {
           await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | upload another button element is missing '+ error)  
        }
    }







    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async check_import_CSV_file_is_uploaded(){
        const ele = this.page.locator(this.Event_Data_Elements.check_import_CSV_file_is_uploaded)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Explore all event header element is missing |  Error occured: '+error)       
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file uploader for csv file
    async file_uploader_for_csv_file(value:string) {
        const filePath0 = `testData/csv/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.Event_Data_Elements.Select_CSV_file_btn).nth(0).click()
        ]);
        await fileChooser.setFiles([filePath0]);
      }


      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "First Row is Header" is checked or not.if not then checked
    async check_first_row_is_header_import_box(){
        const ele=this.page.locator(this.Event_Data_Elements.First_Row_is_Header_checkbox).nth(0)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | check input element not found : Error occured '+ error)  
        }
    }


      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "parse" captured Contents of csv correctly and contains valid values in tables in csv
    async check_if_parse_captured_Contents_of_csv_correctly(value1:string,value2:string){
        const ele=this.page.locator(this.Event_Data_Elements.feedMappingIdHeader)
        const data_ele_1=this.page.locator(`//div[text()="${value1}"]`)
        const data_ele_2=this.page.locator(`//div[text()="${value2}"]`)
        //const data_ele_3=this.page.locator(`//div[text()="${value3}"]`)
        try {
           await expect.soft(ele).toBeVisible()
           await expect.soft(data_ele_1).toBeVisible()
           await expect.soft(data_ele_2).toBeVisible()
           //await expect.soft(data_ele_3).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Header after parsing CSV visibility not found, click on parse button failed : Error occured '+ error)  
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking "CSV" has Downloaded or not
    async  click_export_csv_button(){
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
            }
            else{
              throw new Error('File name not correct ')
            }
          } catch (error) {
            throw new Error("There is a problem with your download,may be you have changed the file name please Add the string Fan-See-QR to the Qr file name" + error)
          }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async PLace_Description(value:string){
      const ele=await this.page.locator(this.Event_Data_Elements.PLace_Description).nth(0)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Place_Custom_Preview_Text(){
      const ele=this.page.locator(this.Event_Data_Elements.Place_Custom_Preview_Text)
      try {
        await this.page.waitForTimeout(2000)
          await ele.check({force:true})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Preview_Text(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Places_Preview_Text)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Image_Copyright_Text(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Image_Copyright_Text)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Written_Location(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Written_Location)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Website_URL(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Website_URL)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Facebook_Username(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Facebook_Username)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Facebook_Page_ID(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Facebook_Page_ID)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async X_User_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.X_User_Name)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Instagram_User_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Instagram_User_Name)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async SnapChat_User_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.SnapChat_User_Name)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Youtube_Channel_URL(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Youtube_Channel_URL)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Spotify_URL(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Spotify_URL)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Spotify_URI(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Spotify_URI)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Common_Button_Text(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Common_Button_Text)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Common_Button_URL(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Common_Button_URL)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

 


  

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Place_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Place_Name)
      try {
          await ele.type(value,{delay:200})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: font_uploader_for_description
    async font_uploader_for_description(value:string) {
      const filePath0 = `testData/fonts/${value}`
      const [fileChooser] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        this.page.waitForEvent('filechooser'),
        // Opens the file chooser.
        this.page.locator(this.Event_Data_Elements.Upload_font).click()
        
      
      ]);
      const ele=this.page.locator(this.Event_Data_Elements.Upload_font)
      
      ele.click()
      await fileChooser.setFiles([filePath0]);
      
      
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_font_dropdown(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_font_dropdown)
      const ele2=this.page.locator("//li[text()='Admiration-Pains']")
      try {
          await ele.click()
          await ele2.scrollIntoViewIfNeeded()
          await ele2.isVisible()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Save(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Save)
      
      try {
          await ele.click()
          
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Save_places(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Save_places)
      
      try {
          await ele.click()
          
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_User_Group(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_User_Group)
      
      try {
          await ele.click()
          
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async is_featured(){
      const ele=this.page.locator(this.Event_Data_Elements.is_featured)
      try {
          await ele.check({force:true})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Assign_Category_Tag_Color(){
      const ele=this.page.locator(this.Event_Data_Elements.Assign_Category_Tag_Color)
      try {
        await ele.check({force:true})
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async New_Category_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.New_Category_Name)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Category_tag_color(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Category_tag_color)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Map_icon(){
      const ele=this.page.locator(this.Event_Data_Elements.Map_icon)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async map_icon_value(value:string){
      const ele=this.page.locator("//input[@value='github']")
      try {
          await ele.isVisible()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: font_uploader_for_description
    async icon_uploader_for_category_map(value:string) {
      const filePath0 = `testData/icons/${value}`
      const [fileChooser] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        this.page.waitForEvent('filechooser'),
        // Opens the file chooser.
        this.page.locator(this.Event_Data_Elements.Upload_icons).click()
        
      
      ]);
      const ele=this.page.locator(this.Event_Data_Elements.Upload_icons)
      
      ele.click()
      await fileChooser.setFiles([filePath0]);
      
      
    }

    
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Map_icon_color(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.Map_icon_color)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Categories(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Categories)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async input_on_Search_field_user_group(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.input_on_Search_field_user_group)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async input_on_Search_field(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.input_on_Search_field)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_action_btn(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_action_btn)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Delete_category_btn(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Delete_category_btn)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_final_Delete_category_btn(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_final_Delete_category_btn)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Delete_User_Group_btn(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Delete_User_Group_btn)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  
  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_final_Delete_User_Group_btn(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_final_Delete_User_Group_btn)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }


  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async Click_Create_New_User_group(){
      const ele=this.page.locator(this.Event_Data_Elements.Click_Create_New_User_group)
      try {
          await ele.click()
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }

  // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async User_Group_Name(value:string){
      const ele=this.page.locator(this.Event_Data_Elements.User_Group_Name)
      try {
          await ele.fill(value)
      } catch (error) {
      throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
      }
  }
  









    

}
    