class ProfilePage {
  get imageAvatar() {
    return cy.get('.ant-avatar-square')
  }

  open() {
    return cy.visit(`/profile/${Cypress.env('userId')}`)
  }
}

export default new ProfilePage()
