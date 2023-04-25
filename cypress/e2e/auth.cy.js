describe('Auth', () => {
  it('Sign in with valid credentials', () => {
    cy.visit('https://localcoding.us/user/login')
    cy.get('#normal_login_email').type('test@example.com')
    cy.get('#normal_login_password').type('Qwerty!23')
    cy.get('.login-form-button').click()
    cy.get('.ant-avatar-square').should('be.visible')
  })
})
