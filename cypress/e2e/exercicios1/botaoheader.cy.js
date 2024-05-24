// Descreve um conjunto de testes relacionados à aplicação
describe('Testa os botões do header na página principal', () => {

     // Definindo um teste especifico: O bloco 'it' define um teste individual
    it('Visita a página de principal do AdoPet e testa os botões home', () => {
      // Acessa a URL da página do AdoPet inicial da aplicação e clica no botão '.header__home'
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
    })
  })