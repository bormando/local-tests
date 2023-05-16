class BasePage {
  get toast() {
    return cy.get('.ant-notification-notice-message')
  }
}

export default BasePage
