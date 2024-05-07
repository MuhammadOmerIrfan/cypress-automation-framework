/// <reference types ="Cypress" />

describe("JSON Object", ()=>{

    it("Json Object Examples",()=>{    // Javascript Object Notion

        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleObject = {"key": "Tim", "key2":"Jones"}

        const users = {
            "firstName": " Joe",
            "lastName" : "Blogs",
            "Age" : 30,
            "Students" : [
                {
                    "firstName": "Jim",
                    "lastName" : "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }

            ]
        }

        cy.log(exampleObject["key"]);  //Tim
        cy.log(exampleObject["key2"]);  //Jones
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0])  //Sophie
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])  //Howard
        
    
        cy.log( "Last name",users.lastName)
        cy.log( "Last name",users.Students[0].lastName) // locating till depth
                
    });

})

