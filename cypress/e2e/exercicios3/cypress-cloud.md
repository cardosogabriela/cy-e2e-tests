//  Grave os testes no Cypress Cloud com o recurso de record.

1 - Acessar o site do cypress cypress.io;
2 - Realize o login no Cypress Cloud, 
3 - Logo na primeira página, ele já pede para criarmos uma organização;
4 - No primeiro campo, ele pede o nome da organização, e como estamos trabalhando com a Adopet, vamos usar o nome dessa empresa;
5 - No segundo campo, ele pede o nome do site, o nome do site da organização, que é a Adopet;
6 - Deve colar a URL do site da Adopet nesse campo;
7 - Depois, tem um botão em azul, Create organization, que é para criarmos a organização;
8 - Em seguida, ele traz algumas perguntas sobre a nossa jornada no Cypress;
9 - A opção que deve selecionar é que o projeto já tenha alguns testes escritos com Cypress, que é a terceira opção (My project has Cypress tests written);
10 - Agora, deve clicar no botão Next;
11 - Aqui ele solicita também alguns e-mails do time. No momento, deve pular essa etapa, então, clicar no botão de Skip for Now;

Adicionando o ID do projeto

12 - Ele diz para nós é para configurarmos o nosso projeto atualizando o arquivo de configuração, o config file. 
13 - Ele diz adicione um ID ao seu projeto (Add your project ID), e ele informa como devemos fazer isso;
14 - Então, lá no cypress.config.js, dentro do módulo .exports, e ele traz aqui uma propriedade chamada projectId:, que é igual ao ID, de fato, que vamos precisar associar à Cloud do Cypress;
15 - Voltar para o VSCode e adicionar essa informação. Então, dentro do defineConfig, dar um espaço, logo na linha 25, e inserir a informação do projectId;

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5nnsk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" 
    }
  },
});

16 - Salvar essa informação, e agora, voltar para a nossa Cloud, e aqui temos duas opções que é "OK, eu inseri o meu ID no projeto" (Ok, I added my project ID), e a opção Next;
17 - Selecionar a primeira opção, pois já inserimos esse projectId, e clicar em Next;
18 - Ele traz a possibilidade de integrarmos o projeto com a integração contínua, com as ferramentas.
19 - Como, nesse curso, ainda não estamos trabalhando com integração contínua, selecionar a opção Manual Setup, que é a última opção;

Registrando os testes

20 - Clicar no botão Next, e ele traz uma possibilidade de testarmos esse comando do Cypress Cloud, Record a run in your terminal;
21 - Ele traz um comando para nós, deve copiar esse comando, voltar no VSCode, abrir e limpar o terminal, e colar esse comando, que é o npx cypress run --record --key (uma sequência de caracteres, que para você, provavelmente, vai ser diferente para você);
OBS: Não esqueça de substituir a sequência de caracteres pelo retornado no seu Cypress Cloud!

22 - Então, deve dar um Enter, ele vai rodar, e o Cypress terminou de rodar os testes, junto com o Mochawesome, retornando algumas informações do terminal;
23 - Conseguimos notar agora que vem a informação de upload dos artefatos para a cloud do Cypress, que é o vídeo, screenshot, não marcamos essa opção, então, ele traz como nada para realizar o upload. E, além das informações também dos testes.
