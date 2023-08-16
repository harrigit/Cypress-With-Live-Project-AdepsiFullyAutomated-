describe('Adepsi Profile', () => {
    it('Profile Setting  And My Activity View  ', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);
        cy.profileView();
        
    });
    it('Profile Logout', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);
        cy.profileLogout();
        
    });
    
});