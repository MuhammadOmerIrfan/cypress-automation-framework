/// <reference types ="Cypress" />
 /// <reference types ="Cypress-xpath" />


describe("Test Contact us the form via the Automation Test Store", ()=>{

    before(function(){
        cy.fixture('userDetails').as("user") // fixtures and aliases
        })
    
    beforeEach("",()=>{
        cy.visit("https://www.automationteststore.com/")
    }
    )
    it("Should be able to submit a successful submission via contact us form ",()=>{
        
        cy.get("a[href$='contact']").click().then( function( linkText){
            cy.log("The output of the text is :" +linkText.text())
        })  
        //a[contains(@href,'contact')]
       // cy.xpath("//a[contains(@href,'contact')]").click();  // do add plugins using npm 

        //cy.get("pathname").should("equal","/contact")

        cy.get('@user').then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        // cy.get('#ContactUsFrm_first_name').type("Omer")
        // cy.get('#ContactUsFrm_email').type("atorney@gmail.com")
        cy.get('#ContactUsFrm_email').should("have.attr",'name','email')
        cy.get('#ContactUsFrm_enquiry').type("feedback is good")

        cy.get("button[title='Submit']").click()
        //cy.get("pathname").should("equal","/contact/success")

        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

        cy.log("Test has completed!")
    })


})

