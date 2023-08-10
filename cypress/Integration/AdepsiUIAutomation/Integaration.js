describe("Integration Setup", () => {
  it("Configure Aircall Integration ANd Delete Integration Test", () => {
    cy.LoginPage();
    cy.LoginInput();
    cy.wait(4000);
    cy.INtegration();
  });
});
