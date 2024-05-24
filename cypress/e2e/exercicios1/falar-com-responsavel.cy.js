// Descreve um conjunto de testes relacionados à aplicação
describe('Teste na página home do AdoPet "falar com responsável"', () => {

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Clica no botão “Falar com o responsável" na página home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })
  })