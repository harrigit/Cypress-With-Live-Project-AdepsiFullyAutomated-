Cypress.Commands.add("CallRuleAccess",()=>{
    cy.get(".material-icons.arrow-rit.ng-star-inserted").click();
    cy.get('[routerlink="/home/settings/calls/rules/all"]').click();
    cy.wait(5000);


    cy.get('[routerlink="/home/settings/calls/rules/add"]').click();
    cy.wait(2000);

    function RandomName () {
        const Name="ABMSDNDsdsfbhdasdsdhkfsquiwafzdxvcbzxhjdfgszdjgwiiyewrtyibvzmhgDYfsdfg668752223999885500004456555544huzsgxrUWFdteayfsrtQEGasafQUIPRXDFSHGEFSRHDGF"
        const Namelength=10;
        let result='';
        for(let i=0;i<Namelength;i++){
            const RandomRuleName=Math.floor(Math.random()*Name.length);
            result+=Name.charAt(RandomRuleName);
        }
        return result;

        
    }
    const CallRuleName=RandomName();

    cy.get('[placeholder="Rule name.."]').click().type(CallRuleName);

    cy.get('[placeholder="Description..."]').click().type("Description Is Written By Through Automation Code ");

    cy.get(".p-multiselect-trigger").click();
    
//////////This value Always Need To Update On Every RUN 
    cy.get(':nth-child(3) > .p-ripple').click();

    cy.get('.input-group > .form-select').select("agentName");
    cy.wait(2000);
    cy.get('[placeholder="Agentname"]').click().type("ars")

    cy.get('#flush-collapseOne > .accordion-body > .row.mt-3 > .mt-3 > .col-auto > .btn').click();

    cy.get(':nth-child(3) > .input-group > .form-select').select("Source");
    cy.get('.form-select.ng-star-inserted').select("Aircall");


    cy.get('.col-md-8 > .btn-outline-secondary').click();
    cy.wait(6000);

    cy.get('.btn-primary').click();
    cy.wait(3000);
    cy.get('[routerlink="/home/settings/calls/rules/all"]').click();
    cy.wait(3000);

    
    




})