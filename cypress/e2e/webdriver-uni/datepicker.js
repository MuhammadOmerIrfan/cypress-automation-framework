/// <reference types ="Cypress" />

describe("Test Date picker via WebDriverUni", ()=>{

    it("Select date from the Date picker ",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})  // overcome issue of multiple browser tabs
        cy.get("#datepicker").click()
    // let date = new Date()
    // date.setDate(date.getDate()) // get current day i.e 11
    //     cy.log(date.getDate())

    // let datee = new Date()
    // datee.setDate(datee.getDate() + 5) // get current day i.e 11+5 = 16th day
    // cy.log(datee.getDate())

    var date = new Date()
    date.setDate(date.getDate()+1)

    var futureYear = date.getFullYear()
    var futureMonth = date.toLocaleString("default", {month:"long"})
    var futureDay = date.getDate()

    cy.log("Future Year to select " + futureYear)
    cy.log("Future Month to select " + futureMonth)
    cy.log("Future Day to select " + futureDay)
    
    function selectMonthAndYear(){
        cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate =>{
            if(!currentDate.text().includes(futureYear)){   // selecting years first
                cy.get(".next").first().click()
                selectMonthAndYear()
            }
        }).then(()=>{
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate =>{
                if(!currentDate.text().includes(futureMonth)){  // selecting months then
                    cy.get(".next").first().click()
                    selectMonthAndYear() //  it will run until future month is selected
                }
            })
        })

    }
    function selectFutureDay(){
        cy.get('[class="day"]').contains(futureDay).click()  // selecting future day
    }
    selectMonthAndYear();
    selectFutureDay();
    })

})

