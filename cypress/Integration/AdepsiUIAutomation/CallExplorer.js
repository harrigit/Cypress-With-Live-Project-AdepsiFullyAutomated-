describe('Call Explorer of Adepsi', () => {
    it('User Must go To Call Explorer', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(10000);
        //Call Explorer Range Set
        cy.get('.activeBtn').click();
        cy.get('.ng-tns-c110-4.p-calendar').click();
        cy.get('.p-datepicker-year.p-link.ng-tns-c110-4.ng-star-inserted').click({multiple: true });
        cy.wait(1000);
        cy.get('.p-ripple.p-element.p-yearpicker-year.ng-tns-c110-4.ng-star-inserted').click({multiple: true });
        cy.wait(3000);
        cy.get('p-ripple.p-element.p-monthpicker-month.ng-tns-c110-4.ng-star-inserted').click({multiple:true});
    
        

    });
    
});