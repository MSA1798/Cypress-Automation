describe('Cypress Locators in action', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com')
    })
    it('Interact with Elements using ID selector', ()=>{
        cy.get('#search_query_top') //ids are identified using # prefix
        .type('Dress')
        .type('{enter}')
        .get('#center_column')
        .should('be.visible')
    })
 })