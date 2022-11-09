describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.linkedin.com/signup/')
    cy.get('#email-or-phone').type('asrobika01@gmail.com')
    cy.get('#password').type('Mrairplane07')
    cy.get('#join-form-submit')

  })
  it('passes', () => {
    cy.visit('https://www.linkedin.com/login')
    cy.get('#username').type('asrobika01@gmail.com')
    cy.get('#password').type('Mrairplane07')
    cy.get('.btn__primary--large')

  })

})
