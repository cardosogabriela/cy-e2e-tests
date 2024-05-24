/* Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida.
Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” */

// Descreve um conjunto de testes relacionados à aplicação
describe('Visite a página do AdoPet', () => {

    // Este bloco é executado antes de cada teste
    beforeEach(() => {
         // Acessa a URL inicial da aplicação
         cy.visit ('https://adopet-frontend-cypress.vercel.app/')
    })

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it ('Verificar se o texto', () => {
        cy.contains ('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })
})