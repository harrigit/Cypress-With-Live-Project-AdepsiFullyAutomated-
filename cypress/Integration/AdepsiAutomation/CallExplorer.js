describe("Call Explorer of Adepsi", () => {
  it("User Must go To Call Explorer And Set A Range of Calender and See Results", () => {
    //Website Visit
    cy.LoginPage();
    //Dashbaord Check Through Login
    cy.LoginInput();
    cy.wait(4000);
    //Call Explorer Range Set
    cy.Call_Explorer_RangeSet();
  });
  it("USer Must Click on Quick Filter Drowpdown And Select A Last 12 month Data", () => {
    ////Call Explorer Quick Filter Test
    cy.LoginPage();
    cy.LoginInput();
    cy.wait(4000);
    cy.Quick_Filter_test();
  });
  it("Add Some Filter In Call Explorer and Also Save Filter and Delete Filter Check ", () => {
    //Add Filter Test
    cy.LoginPage();
    cy.LoginInput();
    cy.wait(4000);
    cy.Quick_Filter_test();
    cy.wait(4000);
    cy.Add_Filter_Test();
    cy.wait(3000);
  });
  
});
