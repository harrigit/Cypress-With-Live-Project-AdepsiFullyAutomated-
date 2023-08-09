describe('Call Rule Access Of Adepsi', () => {
    it('User Must Go To Call Rule Access Page And Create A New Rule For Customer', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);

        cy.CallRuleAccess();
        
    });
    
});