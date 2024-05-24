// Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html

// Descreve um conjunto de testes relacionados à aplicação
describe('Visitar a página do AdoPet', () => {
    // Este bloco é executado antes de cada teste
    beforeEach (() => {
        // Acessa a URL inicial da aplicação
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })
    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it ('Verifique o texto', () => {
        // Verificar se o texto está presente no HTML
        cy.contains ('p', 'Quem ama adota!').should('be.visible')
    })
})