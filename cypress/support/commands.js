// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("LoginPage",()=>{
    cy.visit("https://demo.adepsi.cloud/");
    cy.viewport(2150,1075);
    
})
Cypress.Commands.add("LoginInput",()=>{
    cy.get('#mat-input-0').type("demo.admin@adepsi.cloud")
    cy.get('#mat-input-1').type('Ye3&M57g%kH?B3E$')
    cy.get('.mat-ripple.app-button.font-bold').click();
})