/// <reference types="cypress" />

describe('Teste para a funcionalidade adicionar contato', () => {
  it('Deve adicionar um contato corretamente', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')

    cy.get('input[type="text"]').type('Thamires')
    cy.get('input[type="email"]').type('thamires@gmail.com')
    cy.get('input[type="tel"]').type("11977117717")
    cy.get('.adicionar').click()
    cy.get('h2').should('have.text', '4 contatos na agenda')
  })
})