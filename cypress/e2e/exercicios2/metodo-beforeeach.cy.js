// Refatore os testes já realizados aplicando o método beforeEach().

// Descreve um conjunto de testes relacionados à aplicação
describe ('Teste de páginas do AdoPet', () => {

    // Este bloco é executado antes de cada teste
    beforeEach (() => {
            // Acessa a URL da página do AdoPet inicial da aplicação
        cy.visit ('https://adopet-frontend-cypress.vercel.app/');
    })
    
    // Definindo um teste especifico: O bloco 'it' define um teste individual
    it ('Deve testar os botões de /home', () => {
        cy.get ('.header__home').click();
    })

    it ('Visita a página /home e clique no botão "Falar com o responsável"', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get ('.header__message').click();
    })

    it ('Visita a página /home do AdoPet', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it ('Visita a página de /login do AdoPet', () => {
        cy.visit ('https://adopet-frontend-cypress.vercel.app/login');
    })

    it ('Visita a página do AdoPet e clique no botão de ver Pets disponíveis para adoção', () => {
        cy.visit ('https://adopet-frontend-cypress.vercel.app');
        cy.get('.button').click();
    })
})