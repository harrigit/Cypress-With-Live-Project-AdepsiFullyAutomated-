//login Using Cypress 
describe('Login Module of Adepsi', () => {
    it('User Should Visit to  Login page of Adepsi', () => {
        cy.LoginPage();
    });
    it('Valid Login Credentials-Login must be Successful And USer See Dashboard of Adepsi', () => {
        cy.viewport(2150,1075);
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(5000);
    });
    
});