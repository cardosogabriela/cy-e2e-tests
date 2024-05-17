describe('Testa os botões do header na página principal', () => {
    it('Visita a página de principal do AdoPet e testa os botões home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
    })
  })