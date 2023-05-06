describe('Auth', () => {
  beforeEach(() => {
    cy.visit('/user/login')
  })

  it('Sign in with valid credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('.login-form-button').click()

    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Sign in with incorrect credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('123456')
    cy.get('.login-form-button').click()

    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
      .should('be.visible')
  })

  it('Sign in form validation', () => {
    cy.get('#normal_login_email').should('have.value', '')
    cy.get('#normal_login_password').should('have.value', '')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_password').type('test')
    cy.get('#normal_login_password_help').should('not.exist')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_email').type('test')
    cy.get('#normal_login_email_help')
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_email').type('@')
    cy.get('#normal_login_email_help')
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_email').type('example')
    cy.get('#normal_login_email_help')
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_email').type('.')
    cy.get('#normal_login_email_help')
      .should('have.text', `'email' is not a valid email`)
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_email').type('com')
    cy.get('#normal_login_email_help').should('not.exist')
    cy.get('.login-form-button').should('be.enabled')

    cy.get('#normal_login_email').clear()
    cy.get('#normal_login_email_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled')

    cy.get('#normal_login_password').clear()
    cy.get('#normal_login_password_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
  })
})
