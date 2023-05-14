import ProfilePage from '../pages/profile'

describe('Profile', () => {
  beforeEach(() => {
    cy.loginByToken()
    ProfilePage.open()
  })

  it('Sign out', () => {
    cy.get('a > .ms-2').click()
    cy.get('[data-qa="logout"]').click()

    cy.location('pathname').should('eq', '/')
  })
})
