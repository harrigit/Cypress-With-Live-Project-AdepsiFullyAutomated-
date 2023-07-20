describe('Call Explorer of Adepsi', () => {
    it('User Must go To Call Explorer', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(10000);
        cy.get('.activeBtn').click();
    
        

    });
    
});