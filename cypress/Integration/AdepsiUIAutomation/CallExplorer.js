describe("Call Explorer of Adepsi", () => {
  it("User Must go To Call Explorer And Set A Range of Calender and See Results", () => {
    cy.LoginPage();
    cy.LoginInput();
    cy.wait(10000);
    //Call Explorer Range Set
    cy.get(".activeBtn").click();
    cy.get('.p-calendar > .ng-tns-c110-4').click();
    cy.get('.p-datepicker-year').click();
    cy.get('.p-yearpicker > :nth-child(1)').click();

    cy.get('.p-monthpicker > [tabindex="0"]').click();
    cy.get(':nth-child(1) > :nth-child(4) > .p-ripple').click();
    cy.get('.search-btn').click();
    cy.wait(3000);


    
  });
});
