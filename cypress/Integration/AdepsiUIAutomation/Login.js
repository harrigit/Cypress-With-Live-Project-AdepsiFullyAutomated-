//login Using Cypress 
describe('Login Module of Adepsi', () => {
    it('User Should Visit to  Login page of Adepsi', () => {
        cy.visit("https://demo.adepsi.cloud/") 
    });
    it('Valid Login Credentials-Login must be Successful ', () => {
        cy.viewport(2150,1075);
        cy.visitLoginPage();
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud")
        cy.get('#mat-input-1').type('Ye3&M57g%kH?B3E$')
        cy.get('.mat-ripple.app-button.font-bold').click();
    });
    
});