/* Teste o login com um fluxo diferente: Visite a página principal do Adopet, 
clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.*/

// Descreve um conjunto de testes relacionados à aplicação
describe('', () => {
    // Este bloco é executado antes de cada teste
    beforeEach(() => {
    // Acessa a URL inicial da aplicação
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
})
    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it ('Verifica mensagem de texto', () => {
        /* Clicar no botão de mensagem (ícone envelope) e escrever nome e senha válidos 
        e clicar no botaõ "Entrar" para finalizar*/
        cy.get ('.header__message').click()
        cy.get('[data-test="input-loginEmail"]').type('jorge@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Senha123')
        cy.get('[data-test="submit-button"]')
   })
})



