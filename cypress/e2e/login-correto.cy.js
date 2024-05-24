// Descreve um conjunto de testes relacionados à aplicação
describe('Página de login', () => {

    // Este bloco é executado antes de cada teste
    beforeEach(() => {
        // Acessa a URL inicial da aplicação e clicar no botão de login
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
      
      cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();
    })
  });