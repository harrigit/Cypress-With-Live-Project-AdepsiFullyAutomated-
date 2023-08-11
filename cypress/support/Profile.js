Cypress.Commands.add("profileView",()=>{
    cy.get('.profile-logout > :nth-child(1)').click();
    cy.wait(2000);
})
Cypress.Commands.add("profileLogout",()=>{
    cy.get('.profile-logout > :nth-child(3)').click();
    cy.wait(3000);

})