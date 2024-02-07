/// <reference types="cypress"/>

describe("Test mouse actions", ()=>{

    it("Scroll element into view",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})
    })

    
    it("Drag and drop a draggable item",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get("#draggable").should('contain','DRAG ME TO MY TARGET!')
        cy.get("#droppable").should('contain','DROP HERE')        
        cy.get("#draggable").trigger('mousedown', {which: 1}) // to select item from middle using mouse click
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})  // hover to large area and release it
        cy.get("#droppable").should('contain','Dropped!')
    })

    it("Able to double mouse click",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get("#double-click").should('contain','Double Click Me!')
        cy.get("#double-click").dblclick()

    })

    it("Able to hould down left mouse click on an item",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get("#click-box").should('contain','Click and Hold!')
        cy.get("#click-box").trigger("mousedown",{which:1}).then(($element)=>{ // mouse click and then using then command to hold

            
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')
        })
    })

    it.only("Able to hover mous on an item",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get(".dropdown-content .list-alert").first().click({force:true})
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("Well done you clicked on the link!")
            return true
        }).then(()=>{
            cy.url().should('contain','#')
        })


    })

})