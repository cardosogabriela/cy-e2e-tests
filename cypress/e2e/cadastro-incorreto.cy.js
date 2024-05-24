// Descreve um conjunto de testes relacionados à aplicação
describe('Página de Cadastro', () => {

    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Preencher os campos do formulário incorretamente e exibir uma mensagens ao usuário', () => {
      /* Visite a página inicial do AdoPet, clicar no botão "register-button,
      clicar no botão para finalizar cadastro "submit-button". Utilizazar should('be.visible') para confirmar 
      se está visível email, viísivel a senha criada e visível a senha repetida.
      "*/
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  });