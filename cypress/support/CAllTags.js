Cypress.Commands.add("callTagsCreate", () => {
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.get('[routerlink="/home/settings/tags"]').click();
  cy.wait(3000);


  //add Tag button
  cy.get(".btn").click();

  //Unique Tag Name Logic
  function randomTagName() {
    const tagname =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZbfdadzjfbhSNDZ5+36232656885330085328869885888588888557777lkjdghfiUAhsdavsgdfcbjdzgsidzfgbMklghajsaKDsfhfsd";
    let TagLength = 9;
    let result = "";
    for (let i = 0; i < TagLength; i++) {
      const RandomTag = Math.floor(Math.random() * tagname.length);
      result += tagname.charAt(RandomTag);

    }
    return result;

   
    
  }
  const RandomTagName = randomTagName();
  cy.get('[placeholder="Tag Name"]').click().type(RandomTagName);
  cy.get('[placeholder="Description"]').click().type("Code Through Automation In Cypress");
    cy.wait(1000);
    cy.get('.mat-ripple.action-btn').click();
    cy.wait(3000);
    
    cy.get(':nth-child(2) > :nth-child(7) > div.ng-tns-c122-6 > .mat-menu-trigger > .mat-icon').click();

    //Update Check
    


    //Delete Check 
    




});
Cypress.Commands.add("updatetag",()=>{
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.get('[routerlink="/home/settings/tags"]').click();
  cy.wait(3000);
  cy.get(':nth-child(1) > :nth-child(7) > div.ng-tns-c122-4 > .mat-menu-trigger > .mat-icon').click();
  cy.get('.menu > :nth-child(1)').click();
    cy.get('[placeholder="Tag Name"]').click().type("Updated");
    cy.get('.action-btn').click();
    cy.wait(5000);



})
Cypress.Commands.add("deleteTag",()=>{
  cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
  cy.get('[routerlink="/home/settings/tags"]').click();
  cy.wait(3000);

  cy.get(':nth-child(1) > :nth-child(7) > div.ng-tns-c122-4 > .mat-menu-trigger > .mat-icon').click();
    cy.get('.menu > :nth-child(2)').click();
    cy.get('[data-placeholder="Reason for deletion"]').click().type("Deleting With Automation Code");
    cy.get('.action-btn-bg').click();
    cy.wait(5000);

})
