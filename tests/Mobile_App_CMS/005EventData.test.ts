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
test("001_TC-001_Event_Data_Places_001 | Validate import csv is functional  ", async ({ EventData,page, AppsPage }) => {

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
test("001_TC-002_Event_Data_Places_002 | Validate export  csv is functional  ", async ({ EventData,page, AppsPage }) => {

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




//12/01/2024
})


