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



//Login Page URL
Cypress.Commands.add("LoginPage",()=>{
    cy.visit("https://demo.adepsi.cloud/");
    cy.viewport(2150,1075);
    
})
//login page Input with Dashboard Verification 
Cypress.Commands.add("LoginInput",()=>{
    cy.get('#mat-input-0').type("demo.admin@adepsi.cloud")
    cy.get('#mat-input-1').type('Ye3&M57g%kH?B3E$')
    cy.get('.mat-ripple.app-button.font-bold').click();
    cy.wait(15000);
    cy.url().should('include', '/home');
})
//call Explorer Range Set 
Cypress.Commands.add("Call_Explorer_RangeSet",()=>{
    cy.get(".activeBtn").click();
    cy.get('.p-calendar > .ng-tns-c110-4').click();
    cy.get('.p-datepicker-year').click();
    cy.get('.p-yearpicker > :nth-child(1)').click();

    cy.get('.p-monthpicker > [tabindex="0"]').click();
    cy.get(':nth-child(1) > :nth-child(4) > .p-ripple').click();
    cy.get('.search-btn').click();
    cy.wait(5000);
})
//Call Explorer Quick Filter Test
Cypress.Commands.add("Quick_Filter_test",()=>{
    cy.get(".activeBtn").click();
    cy.get(':nth-child(5) > .mat-menu-trigger').click();
    cy.get('.filtersData > :nth-child(1) > :nth-child(4)').click();
    cy.wait(5000);
})
Cypress.Commands.add("Add_Filter_Test",()=>{
    cy.get(".activeBtn").click();
    cy.get('[placeholder="Agent Name"]').type("ars").type('{enter}');

    
})