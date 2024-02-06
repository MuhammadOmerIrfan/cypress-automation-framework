/// <reference types ="Cypress" />

describe("Verify radiobutton via webdriveruni", () => {


    beforeEach(function() {
                
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

    })

    it("Check specific radiobutton", () => {
        
        // cy.visit("https://www.webdriveruniversity.com")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

        cy.get('#radio-buttons').find("[type='radio']").first().check()    // selecting the first radiobutton
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()    // selecting the second radiobutton

    })

    it("Validate the states of radiobutton", () => {
        
        // cy.visit("https://www.webdriveruniversity.com")
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })  // overcome issue of multiple browser tabs

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
        cy.get("[value='pumpkin']").should('not.be.checked')


    })


    it("Radio buttons",()=>{
        // cy.visit("https://webdriveruniversity.com")
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})

        

    })
})