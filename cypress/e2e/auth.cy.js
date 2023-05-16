import {SignInPage, ProfilePage} from '../pages'

describe('Auth', () => {
  beforeEach(() => {
    SignInPage.open()
  })

  it('Sign in with valid credentials', () => {
    SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
    ProfilePage.imageAvatar.should('be.visible')
  })

  it('Sign in with incorrect credentials', () => {
    SignInPage.signIn(Cypress.env('email'), '123456')

    SignInPage.toast.should('have.text', 'Auth failed').should('be.visible')
  })

  it('Sign in form validation', () => {
    SignInPage.inputEmail.should('have.value', '')
    SignInPage.inputPassword.should('have.value', '')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputPassword.type('test')
    SignInPage.labelValidationPassword.should('not.exist')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('test')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('@')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('example')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('.')
    SignInPage.labelValidationEmail
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputEmail.type('com')
    SignInPage.labelValidationEmail.should('not.exist')
    SignInPage.buttonSubmit.should('be.enabled')

    SignInPage.inputEmail.clear()
    SignInPage.labelValidationEmail.should('have.text', 'Required').should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')

    SignInPage.inputPassword.clear()
    SignInPage.labelValidationPassword.should('have.text', 'Required').should('be.visible')
    SignInPage.buttonSubmit.should('be.disabled')
  })
})
