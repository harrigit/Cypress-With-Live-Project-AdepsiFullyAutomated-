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
    cy.wait(40000);
    cy.get('[data-test="form-flow-page-footer-next"] > .Box-sc-14d2slk-0').click();
    cy.wait(3000);
    cy.get('[data-test="add-numbers"] > .kuoQfA').click();
    cy.get('.sc-dmlEhJ').click();
    cy.get('[data-test="modal-form-submit-button"]').click();
    cy.wait(3000);
    cy.get('[data-test="form-flow-page-footer-next"] > .Box-sc-14d2slk-0').click();
   // cy.wait(20000);
   
  });

  cy.wait(20000);
  cy.get('.add-Tag-btn').click();
  cy.wait(10000);
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.wait(1000);
  cy.get('[routerlink="/home/settings/integrations"]').click();
  cy.wait(5000);

  cy.get(':nth-child(3) > :nth-child(4) > :nth-child(2)').click();
  cy.wait(1000);
  cy.get('#mat-input-0').click().type("testing");
  cy.wait(1000);
  cy.get('.action-btn-bg').click();
  cy.wait(5000);

  //Edit Name
  cy.get('.int-box > :nth-child(2) > :nth-child(4) > :nth-child(1)').click();
  cy.get('.form-control').click().type("UD");
  cy.get('.action-btn').click();
  cy.wait(5000);

  //Disable Integration 

  cy.get(':nth-child(1) > :nth-child(3) > .ng-untouched').click();
  cy.wait(6000);



  //Enable Integration
  cy.get('.ng-dirty').click();
  cy.wait(6000);
  

  


});
