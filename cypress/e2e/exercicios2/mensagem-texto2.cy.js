// Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html

// Descreve um conjunto de testes relacionados à aplicação
describe('Visitar a página do AdoPet', () => {

    beforeEach (() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })

    it ('Verifique o texto', () => {
        cy.contains ('p', 'Quem ama adota!').should('be.visible')
    })
})