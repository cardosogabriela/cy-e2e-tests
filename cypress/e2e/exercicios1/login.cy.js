// Descreve um conjunto de testes relacionados à aplicação
describe('Testes na página de login do AdoPet', () => {

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Visita a página de /login do Adopet', () => {
        // Verifica se a URL mudou para /login
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
  })