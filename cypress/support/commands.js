import {SignInPage} from '../pages'

Cypress.Commands.add('loginByCredentials', (email, password) => {
  SignInPage.open()
  SignInPage.signIn(email, password)
})

Cypress.Commands.add('loginByToken', () => {
  cy.visit('/')
  window.localStorage.setItem('token', Cypress.env('token'))
  window.localStorage.setItem('userId', Cypress.env('userId'))
  window.localStorage.setItem('lang', 'en')
})
