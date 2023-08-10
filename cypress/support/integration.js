Cypress.Commands.add("INtegration", () => {
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.wait(1000);
  cy.get('[routerlink="/home/settings/integrations"]').click();
  cy.wait(5000);
  cy.get(".integr-penal > .mat-ripple").click();
  cy.wait(2000);
  cy.origin("https://dashboard.aircall.io", () => {
    // Commands targeting https://dashboard.aircall.io go here
    cy.get('[placeholder="Please type your e-mail"]')
      .click()
      .type("haris.khan@omningage.cloud");
    cy.get('[placeholder="Please type your password"]')
      .click()
      .type("QAZwsx123@");
    cy.wait(2000);
    cy.get('[data-test="signin-button"]').click();
    cy.wait(10000);
    cy.wait(15000);
    cy.get('[data-test="form-flow-page-footer-next"] > .Box-sc-14d2slk-0').click();
    cy.wait(3000);
    cy.get('[data-test="add-numbers"] > .kuoQfA').click();
    cy.get('.sc-efozlA').click();
    cy.get('[data-test="modal-form-submit-button"]').click();
    cy.wait(3000);
    cy.get('[data-test="form-flow-page-footer-next"] > .Box-sc-14d2slk-0').click();
    cy.wait(10000);
    
  });
  cy.get('.add-Tag-btn').click();
  cy.wait(5000);
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.wait(1000);
  cy.get('[routerlink="/home/settings/integrations"]').click();
  cy.wait(5000);

  cy.get(':nth-child(6) > :nth-child(4) > :nth-child(2)').click();
  cy.wait(1000);
  cy.get('#mat-input-0').click().type("testing");
  cy.wait(1000);
  cy.get('.action-btn-bg').click();
  cy.wait(5000);

});
