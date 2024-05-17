describe('Testes na página principal do AdoPet', () => {
    it('Visita a página principal e clica no botão de ver pets disponíveis para adoção', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
    })
  })