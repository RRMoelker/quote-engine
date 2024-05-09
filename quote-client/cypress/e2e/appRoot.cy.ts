// https://on.cypress.io/api

describe('The main app test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'The quote fetcher')
  })
})
