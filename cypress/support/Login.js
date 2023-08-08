//Login Page URL
Cypress.Commands.add("LoginPage", () => {
    cy.visit("https://demo.adepsi.cloud/");
    cy.viewport(2150, 1075);
  });
  //login page Input with Dashboard Verification
  Cypress.Commands.add("LoginInput", () => {
    cy.get("#mat-input-0").type("demo.admin@adepsi.cloud");
    cy.get("#mat-input-1").type("Ye3&M57g%kH?B3E$");
    cy.get(".mat-ripple.app-button.font-bold").click();
    cy.wait(15000);
    cy.url().should("include", "/home");
  });