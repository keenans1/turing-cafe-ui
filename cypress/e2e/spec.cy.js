describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", [
      {
        id: 3,
        name: "Pam",
        date: "1/21",
        time: "6:00",
        number: 4
      }
    ])
    cy.visit('http://localhost:3000/')
  })
  it('should display the website title', () => {
    cy.get('h1').contains("Turing Cafe Reservations")
  })
  it('should display reservations', () => {
    cy.get('div[class="resy-container"]')
      .should('have.class', 'resy-container')
  })
  it('should type an input', () => {
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('abc')
    })
  })
  it('should enter info, click add button, and see new reservation', () => {
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('xyz')
        .get('input[name="date"]').type('8/4')
        .get('input[name="time"]').type('6:15')
        .get('input[name="number"]').type('5')
        .get('button').click()
    })
    cy.contains('xyz')
  })
})