Cypress.Commands.add('loginByCredentials', (email, password) => {
  cy.visit('/user/login')
  cy.get('#normal_login_email').type(email)
  cy.get('#normal_login_password').type(password)
  cy.get('.login-form-button').click()
})

Cypress.Commands.add('loginByToken', () => {
  cy.visit('/')
  window.localStorage.setItem('token', Cypress.env('token'))
  window.localStorage.setItem('userId', Cypress.env('userId'))
  window.localStorage.setItem('lang', 'en')
})
