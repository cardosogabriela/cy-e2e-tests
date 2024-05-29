O CYPRESS POSSUI UMA FORMA DE DOCUMENTAR OS TESTES

Será capturado essa informação para fazer a análise desses dados. Por isso, o Cypress também traz outra ferramenta, que é a possibilidade de criar uma documentação desses testes. 

COMO PODEMOS FAZER ESSA ESSA DOCUMENTAÇÃO? 
abra o explorador e acessar o arquivo cypress.config.js

Temos dentro do arquivo as configurações globais do cypress. Após o nosso end-to-end (e2e), que ele traz o setupNodeEvents, vamos, na LINHA 32, inserir uma nova informaçõa. vamos inserir o 'video: true'. O que estamos fazendo agora é dizendo para cypress de forma global, conseguir gravar os testes de video. E é isso que ele irá fazer.

O CYPRESS PODE CRIAR UMA DOCUMENTAÇÃO AUTOMÁTICA AO RODAR OS TESTES

Precisamos clicar no vídeo, acessar e então fazer o playback dos vídeos. Agora vamos ter acesso aquelas informações (registros criados dos testes com os videos) e ter o video como suporte, pois o Cypress consegue gerar automaticamente relatórios e trazer essas informações de maneira organizada.

FRAMEWORK Mochawesome / Instalando o Mochawesome 

Vamos precisar de um framework chamado Mochawesome para poder trabalhar com esses recursos. Fazer intalação do mochawesome no terminal usando esse comando: npm install --save-dev mochawesome

CONFIGURANDO O MOCHAWESOME

Abrir arquivo cypress.config.js, porque vamos agora configurar o funcionamento desse gerador de relatórios do Cypress.

Vamos dizer para o Mochawesome atuar como um reporter, para ele fazer essa geração de relatórios. Então, na LINHA 33, vamos inserir reporter: 'mochawesome'. Agora, temos algumas outras opções também para a geração desses relatórios.


const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
      timestamp: "mmddyyyy_HHMMss" }
  },
});

Analisando o código, em:

“video”: definimos a gravação em vídeo do teste para posterior playback.

“reporter”: essa propriedade define o padrão de geração de relatórios. Configurando como padrão no arquivo cypress.config.js, sempre que o comando npx cypress run for disparado, o tipo de relatório gerado será do Mochawesome, mesmo que não seja incluído a opção --reporter mochawesome.

“reportDir”: diretório padrão onde serão gerados os relatórios.

“overwrite”: caso não se inclua um timestamp, o relatório padrão é gerado com o nome mochawesome.json ou mochawesome.html. Para esses casos, definimos se o relatório será sobrescrito ou não.

“html”: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato HTML.

“json”: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato HTML.

“timestamp”: formato de apresentação do relatório com relação à data e hora.

Ainda há outras configurações:

“charts”: dá a possibilidade de gerar gráficos quando unificamos os resultados.

“code”: mostra exatamente qual o código foi executado tanto na falha quanto no sucesso.

“reportTitle”: o título a ser apresentado no relatório.