/// <reference types ="Cypress" />

describe("Test upload via WebDriverUni", ()=>{

    it("Upload a file",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs

        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png")
        cy.get("#submit-button").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Your file has now been uploaded!")
        })
    })

    it("Upload No file",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs
        cy.get("#submit-button").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("You need to select a file to upload!")
        })
    })

})

