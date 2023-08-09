describe('User Management of Adepsi', () => {
    it('New User Must Create With Unique Email', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);

        cy.UserMangement();
    });
    
});