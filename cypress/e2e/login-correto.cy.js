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
      // Inserir corretamente email, senha e clicar no botão "submit-button" para finalizar o login 
      cy.login('ana@email.com', 'Senha123')
    })
  });