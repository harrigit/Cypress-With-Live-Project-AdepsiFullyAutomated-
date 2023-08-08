Cypress.Commands.add("AuditTrail", () => {
    cy.get('[routerlink="/home/auditlogs"]').click();
    cy.wait(3000);

    cy.get('[placeholder="start date"]').click({multiple:true});
  });
 