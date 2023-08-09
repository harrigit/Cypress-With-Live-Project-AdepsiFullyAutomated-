describe(' Check Call Tags ', () => {
    it('User Must Go To  Create Tag Page And  Create A Tags With unique Name', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);


        cy.callTagsCreate();
    });
    it('user Must Update A tag', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);

cy.updatetag();
        
    });
    it('User Must Delete A tag', () => {
        cy.LoginPage();
        cy.LoginInput();
        cy.wait(4000);
        cy.deleteTag();
    });
});