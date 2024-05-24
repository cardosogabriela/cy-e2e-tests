// Descreve um conjunto de testes relacionados à aplicação
describe('Página de login', () => {
    
    // Este bloco é executado antes de cada teste
    beforeEach(() => {
        // Acessa a URL inicial da aplicação e clicar no botão "login-button"
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Deve preencher os campos do login incorretamente e informar o usuário na página', () => {
        /* Inserir incorretamente email, senha e clicar no botão "submit-button" para finalizar o login.
        Utilizando should('be.visible') para estar visível mensagem de erro do email, senha e estar visível orientação para o usuário */
        cy.get('[data-test="input-loginEmail"]').type('marjorie3');
        cy.get('[data-test="input-loginPassword"]').type('123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
  })