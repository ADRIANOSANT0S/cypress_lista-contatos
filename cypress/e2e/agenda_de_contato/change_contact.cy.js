/// <reference types="cypress" />

describe('Teste para a funcionalidade alterar contato da lista', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('.edit').first().click()
  })

  it('Deve altera os dados de um contato existente corretamente', () => {
    cy.get('input[type="text"]').clear().type('Lígia Reis')
    cy.get('input[type="email"]').clear().type('ligia@gmail.com')
    cy.get('input[type="tel"]').clear().type('12968987665')
    cy.get('.alterar').click()
  })
})