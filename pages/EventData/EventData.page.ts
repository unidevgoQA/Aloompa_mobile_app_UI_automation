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




    

}
    