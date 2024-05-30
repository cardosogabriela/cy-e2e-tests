/* Na tela de home, verifique se as imagens dos pets aparecem.*/
describe('Tela /home', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it('Verifica se as imagens dos pets aparecem na tela /home', () => {
        cy.get('.cards').should('be.visible')
    }) 
})