describe('Teste na página home do AdoPet "falar com responsável"', () => {
    it('Clica no botão “Falar com o responsável" na página home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })
  })