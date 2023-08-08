Cypress.Commands.add("AuditTrail", () => {
    cy.get('[routerlink="/home/auditlogs"]').click();
    cy.wait(3000);

    cy.get('[placeholder="start date"]').click({multiple:true});
    cy.get('.p-datepicker-year').click();
    cy.get('.p-yearpicker > :nth-child(1)').click();
    cy.get('.p-monthpicker > [tabindex="0"]').click();
    cy.get('tbody.ng-tns-c112-4 > :nth-child(1) > :nth-child(4) > .p-ripple').click();
    cy.get('.search-btn').click();
    cy.wait(3000);

    
  });
  Cypress.Commands.add("AddFiltersInLogs",()=>{
    cy.get('[placeholder="Category"]').click();
    cy.get('[placeholder="Search"]').click().type('fil');
    cy.get('.mat-checkbox-inner-container').click();
    cy.wait(1000);
    cy.get('[placeholder="Actions"]').click();
    cy.get('[placeholder="Search"]').click().type('cre');
    cy.get('.mat-checkbox-inner-container').click();
    cy.wait(5000);

  })
 