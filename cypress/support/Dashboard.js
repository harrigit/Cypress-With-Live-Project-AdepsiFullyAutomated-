Cypress.Commands.add('dropdown',()=>{
    cy.get('.p-dropdown-trigger').click();
    cy.get(':nth-child(2) > .p-ripple').click();
    cy.wait(5000);

})