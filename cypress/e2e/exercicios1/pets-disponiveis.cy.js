// Descreve um conjunto de testes relacionados à aplicação
describe('Testes na página principal do AdoPet', () => {

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Visita a página principal e clica no botão de "ver pets disponíveis para adoção"', () => {
        // Visitar a pág. principal e clicar no botão de "ver pets disponíveis para adoção"
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
    })
  })