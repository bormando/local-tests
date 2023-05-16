import {Navbar} from '../elements'

describe('Navigation', () => {
  beforeEach(() => {
    cy.loginByToken()
  })

  it('Links', () => {
    Navbar.linkCourses.click()
    cy.contains('Interactive Courses').should('be.visible')
    cy.location('pathname').should('eq', '/course')

    Navbar.linkChallenges.click()
    cy.contains('Coding challenges').should('be.visible')
    cy.location('pathname').should('eq', '/challenge')

    Navbar.linkInterviewQuestions.click()
    cy.location('pathname').should('eq', '/flash')
    cy.contains('Interview practice cards').should('be.visible')

    Navbar.linkDiary.click()
    cy.location('pathname').should('eq', '/diary')
    cy.contains('Diary of progress helps to achieve big goals').should('be.visible')
  })
})
