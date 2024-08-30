describe('template spec', () => {
    it('passes', () => {
      cy.visit('www.amazon.in')
      // assertions
      // expect(true).to.equal(true)
      cy.get('#twotabsearchtextbox').type('macbooks')
      cy.get('#nav-search-submit-button').click()
    })
  })