import BasePage from './base'
import {Navbar} from '../elements'

export const ProfilePage = new (class extends BasePage {
  navbar = Navbar

  get imageAvatar() {
    return cy.get('.ant-avatar-square')
  }

  open() {
    return cy.visit(`/profile/${Cypress.env('userId')}`)
  }
})()
