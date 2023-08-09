describe('Call Rule Access Of Adepsi', () => {
    it('User Must Go To Call Rule Access Page And Create A New Rule For Customer', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);

        cy.CreateCallRule();
        
        
    });
    it('User Must Go To Call Rule Access Page and Update Call Rule Access', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);
        cy.updateCallRule();
    });
    it('User Must Go To Call Rule Access Page and Delete Call Rule Access', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);
        cy.deleteCallRule();
    });
    
});