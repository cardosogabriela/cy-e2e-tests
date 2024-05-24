// Descreve um conjunto de testes relacionados à aplicação
describe('Testes na página home do AdoPet', () => {

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Visita a página de /home do Adopet', () => {
        // Verifica se a URL mudou para /home
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
  })