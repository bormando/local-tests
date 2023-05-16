import {ProfilePage} from '../pages'

describe('Profile', () => {
  beforeEach(() => {
    cy.loginByToken()
    ProfilePage.open()
  })

  it('Sign out', () => {
    ProfilePage.navbar.dropdownUsername.click()
    ProfilePage.navbar.buttonLogOut.click()

    cy.location('pathname').should('eq', '/')
  })
})
