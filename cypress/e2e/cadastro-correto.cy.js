// Descreve um conjunto de testes relacionados à aplicação
describe('Página de Cadastro', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  // Definindo um teste especifico: O bloco 'it' define um teste individual
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    /* Visitar a página inicial do AdoPet, clicar no botão de cadastrar "register-button", 
    inserir nome "input-name", email "input-email", senha "input-password", 
    confirmar senha "input-confirm-password" e para finalizar: clicar no botão cadastrar "submit-button"*/
    
    cy.cadastrar('Julia Lima','julialima@email.com', 'Senha123')
    
  })
});

