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

Cypress.Commands.add("assignRoles",()=>{
    cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
    cy.get('[routerlink="/home/settings/user-management"]').click();
    cy.wait(6000);
    cy.get(':nth-child(1) > :nth-child(7) > div > .mat-menu-trigger > .mat-icon').click();
    cy.get(':nth-child(1) > .mat-ripple').click();
    cy.get(':nth-child(1) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(4) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(7) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(8) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(9) > .show > .mat-ripple').click();
    cy.wait(2000);
    cy.get(':nth-child(10) > .show > .mat-ripple').click();
    cy.wait(2000);

    cy.wait(3000);
    cy.get('.mat-ripple > .material-icons').click();
    cy.wait(2000);

})

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
