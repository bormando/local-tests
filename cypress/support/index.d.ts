declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Sign in using email & password
     * @example
     * cy.loginByCredentials('foo@bar.com', '123456')
     */
    loginByCredentials(email: string, password: string): Chainable<any>

    /**
     * Sign in using token & userId
     * @example
     * cy.loginByToken()
     */
    loginByToken(): Chainable<any>
  }
}
