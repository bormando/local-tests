describe('Profile', () => {
  beforeEach(() => {
    cy.loginByToken()
    cy.visit(`/profile/${Cypress.env('userId')}`)
  })

  it('Sign out', () => {
    cy.get('a > .ms-2').click()
    cy.get('[data-qa="logout"]').click()

    cy.location('pathname').should('eq', '/')
  })
})
