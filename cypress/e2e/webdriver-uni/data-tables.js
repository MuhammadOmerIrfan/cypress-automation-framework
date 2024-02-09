/// <reference types="Cypress" />


describe("Handling data via WebDriverUni", () => {

    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
  
    it("Calculate and assert the total age of users", () => {
        
        var userDetails = [];
        let numb = 0;
        cy.get("#thumbnail-1 td").each(($el, index, $list)=>{
                userDetails[index] = $el.text()
        }).then(()=>{
            var i
            for(i=0; i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    numb+=Number(userDetails[i])  // only counts sales if it is a number else skip it if it is string
                    //cy.log(userDetails[i])
                }
            }
            cy.log("Total age is "+ numb)
            expect(numb).to.be.equal(322)
        })
 

    });

    it.only("Calculate and assert the age of an user based on last name", () => {
        
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes("Woods")){
                cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then(function(age){  //located the index of the user and then go to next and then get age of that user
                    const userAge = age.text()
                    expect(userAge).to.be.eq("80")
                })
            }
        })
    });

  });
  