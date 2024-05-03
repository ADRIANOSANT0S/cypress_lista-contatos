/// <reference types="cypress" />

describe('Teste para a funcionalidade remoção de contato', () => {
  it('Deve remover um contato da lista corretamente', () => { 
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('.delete').first().click()
    cy.get('h2').should('have.text', '3 contatos na agenda')
  })
})