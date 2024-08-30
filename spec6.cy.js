describe('Cognito, cy.origin() login', function () {
    beforeEach(function () {
      // Seed database with test data
      cy.task('db:seed')
  
      // login via Amazon Cognito via cy.origin()
      cy.loginByCognito(
        Cypress.env('cognito_username'),
        Cypress.env('cognito_password')
      )
    })
  
    it('shows onboarding', function () {
      cy.contains('Get Started').should('be.visible')
    })
  })