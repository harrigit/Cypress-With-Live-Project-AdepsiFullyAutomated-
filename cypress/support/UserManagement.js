Cypress.Commands.add("CreateUser", () => {
    cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
    cy.get('[routerlink="/home/settings/user-management"]').click();
    cy.wait(6000);
    cy.get(".btn").click();

    ///Email And Name generator
    function RandomName() {
        const Values =
            "shdgABCDEFGHIJKLMNOPQRSTUVWXYZabcedjdhzfjsdgsfjshdsdjsfgsjgfsgfjsdfkdkfbzkfjbvcnbvfdzfaswegyfdfcbb556622323387448912212288551454555cnbjhsddfh";
        const length = 7;
        let result = "";
        for (let i = 0; i < length; i++) {
            const Name = Math.floor(Math.random() * Values.length);
            result += Values.charAt(Name);
        }
        return result;
    }
    const randomName = RandomName();
    const EmailTemp = "@example.com";
    const Email = randomName + EmailTemp;
    console.log(Email);
    cy.get('[placeholder="First Name"]').click().type(randomName);
    cy.get('[placeholder="Last Name"]').click().type("testing");

    cy.get('[placeholder="Email"]').click().type(Email);
    cy.get(".add-edit-btn > .mat-ripple").click();
    cy.wait(6000);
});

Cypress.Commands.add("updateUser",()=>{
    //pending
    cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
    cy.get('[routerlink="/home/settings/user-management"]').click();
    cy.wait(6000);
    
    cy.get(':nth-child(1) > :nth-child(7) > div > .mat-menu-trigger > .mat-icon').click();
    cy.get('.menu > :nth-child(2) > .mat-ripple').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > .form-control').click().type("UpdatedUser");
    cy.wait(1000);
    cy.get('.add-edit-btn > .mat-ripple').click();
    cy.wait(3000);

})
Cypress.Commands.add("deleteUser",()=>{
//pending
cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
cy.get('[routerlink="/home/settings/user-management"]').click();
cy.wait(6000);

cy.get(':nth-child(1) > :nth-child(7) > div > .mat-menu-trigger > .mat-icon').click();
cy.get('.menu > :nth-child(3) > .mat-ripple').click();
cy.wait(1000);
cy.get('.action-btn-bg').click();
cy.wait(5000);
})
