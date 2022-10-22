describe('OnBoarding tests', () => {
  const EMAIL_INPUT = '[data-cy="email-input-login"]'
  const PASSWORD_INPUT = '[data-cy="password-input-login"]'
  const SHOW_PASSWORD_ICON = '[data-cy="show-password-login"]'
  const SUBMIT = '[data-cy="submit-login"]'

  it('login', () => {
    cy.visit('/login')
    cy.url().should('include', '/login')

    cy.get(EMAIL_INPUT).type('HEI')
    cy.get(PASSWORD_INPUT).type('MOI')

    cy.get(SHOW_PASSWORD_ICON).click()

    cy.get(SUBMIT).click()

    cy.get('[type="text"]').clear()

    cy.get(EMAIL_INPUT).type(Cypress.env('testEmail2'))
    cy.get(PASSWORD_INPUT).type(Cypress.env('testPassword'))
    cy.get(SUBMIT).click()
  })
})
