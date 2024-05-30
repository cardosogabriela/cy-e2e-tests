/* Aplique o comando personalizado de login em outros fluxos de teste. 
Exemplo: usuário acessa página de mensagem, é redirecionado para o login;
*/
describe('Login personalizado', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })

    it ('Aplicar o comando personalizado /login em outros fluxos de teste', () => {
        // Usuário acessar a página de mensagem, é redirecionado para /login
        cy.get('.header__message').click();
        cy.login('ana@email.com', 'Senha123');
    })
})