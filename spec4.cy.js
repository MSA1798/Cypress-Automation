describe('template spec',() =>{
    it('passes',() =>{
        cy.visit('www.cricbuzz.com/')
        //assestions
        //expect(true).to.equal(true)
        cy.get('cb-search-input-icon-nav').click()
    })
})