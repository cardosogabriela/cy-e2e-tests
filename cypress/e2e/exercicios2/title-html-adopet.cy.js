// Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

// Descreve um conjunto de testes relacionados à aplicação
describe('Teste na página principal AdoPet', () => {

    // Este bloco é executado antes de cada teste
    beforeEach(() => {
            // Acessa a URL da página do AdoPet inicial da aplicação
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it ('Verifique se o TITLE com o texto "AdoPet" está presente no HTML', () => {
        // Verifica se o título da página é "AdoPet"
        cy.title().should('eq', 'AdoPet')
    })
})