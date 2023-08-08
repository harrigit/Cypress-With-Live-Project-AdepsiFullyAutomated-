describe("Audit Trail OF Adepsi", () => {
  it("User Must Go To AuditTrail Page In Adepsi", () => {
    cy.LoginPage();
    cy.LoginInput();
    cy.wait(4000);

    cy.AuditTrail();
  });
});
