// Descreve um conjunto de testes relacionados à aplicação
describe('Página de Cadastro', () => {

  // Definindo um teste especifico: O bloco 'it' define um teste individual
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    /* Visitar a página inicial do AdoPet, clicar no botão de cadastrar "register-button", 
    inserir nome "input-name", email "input-email", senha "input-password", 
    confirmar senha "input-confirm-password" e para finalizar: clicar no botão cadastrar "submit-button"*/
    
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Julia Lima');
    cy.get('[data-test="input-email"]').type('julialima@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
});

