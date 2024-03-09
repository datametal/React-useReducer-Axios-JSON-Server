describe('App', () => {
  it('increments the counter', () => {
    cy.visit('/') // this line was updated
    cy.get('[data-cy="btnCount"]').click()
    cy.get('[data-cy="btnCount"]').should('contain', 'count is 1')
  })
})
