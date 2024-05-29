# Teste Automatizado com Cypress para o site AdoPet
<p align="center">
<img src="https://img.shields.io/static/v1?label=cypress&message=framework&color=green&style=for-the-badge&logo=CYPRESS"/>
<img src="http://img.shields.io/static/v1?label=VSCode&message=Code editing&color=blue&style=for-the-badge&logo=visualstudiocode"/>
<img src="http://img.shields.io/static/v1?label=JavaScript&message=v20.10.0&color=yellow&style=for-the-badge&logo=javascript"/>
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>
> Status do Projeto: :warning: (em desenvolvimento)

### Tópicos
* [Título](#teste-Automatizado-com-Cypress-para-o-site-AdoPet)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades](#funcionalidades)
* [Pré-requisitos](#pré-requisitos)
* [Como rodar a aplicação](#como-rodar-a-aplicação)
* [Executando Testes](#executando-testes)
* [Documentação dos Testes](#documentação-dos-testes)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Contribuições](#contribuições)
* [Acesso do Projeto](#acessando-o-site-adoPet)


## Descrição do projeto

Este projeto automatiza a seleção dos animais disponíveis para adoção no site AdoPet utilizando testes automatizados E2E com Cypress. O objetivo é garantir a funcionalidade e integridade das operações de listagem e detalhamento dos animais, proporcionando uma experiência confiável para os usuários que desejam adotar um animal de estimação.

## Funcionalidades

- **Configuração do projeto de testes Cypress:** Configuração inicial do ambiente de teste utilizando a interface gráfica do Cypress.
- **Utilização dos principais métodos e funções do Cypress:** Implementação de testes utilizando as funcionalidades principais do Cypress.
- **Captura de seletores de elementos da aplicação AdoPet:** Utilização de seletores para identificação e automação dos elementos na aplicação.
- **Geração de documentação dos testes automatizados com mochawesome:** Criação de relatórios detalhados dos testes automatizados.
- **Uso do Cypress Cloud para compartilhar documentação de testes na nuvem:** Armazenamento e compartilhamento dos relatórios de testes na nuvem.
- **Criação de dublês de teste com Cypress:** Implementação de mocks para simular comportamentos e cenários específicos.
- **Utilização de massa de dados na automação de testes:** Utilização de dados fictícios para testar diferentes cenários.
- **Criação de comandos personalizados para otimização e organização dos testes:** Desenvolvimento de comandos personalizados para aumentar a produtividade e a organização dos testes.

## Como Usar

### Pré-requisitos

- Node.js (v12 ou superior)
- Cypress (instalado globalmente ou localmente)

### Como rodar a aplicação

1. Clone o repositório:

   ```bash
   git clone https://github.com/cardosogabriela/cy-e2e-tests.git
2.Instale as dependências:
  npm install

## Executando Testes

Para executar os testes, você pode usar um dos seguintes comandos:

* npx cypress open : Abre a interface gráfica do Cypress.
* npx cypress run : Executa os testes em modo headless. São testes que é executado diretamente no terminal. É feito na própria máquina local sem precisar abrir a interface gráfica. 
* npx cypress run --spec .\cypress\e2e\login-correto.cy.js : É colocado o caminho de um único arquivo. Esse comando vai rodar um único teste.
* npx cypress run --reporter mochawesome : Gerar automaticamente relatórios e trazer essas informações de maneira organizada.

## Documentação dos Testes

Após a execução dos testes, a documentação estará disponível em formato HTML no diretório mochawesome-report.

## Tecnologias utilizadas
* JavaScript
* Framework
* Visual Studio Code

## Contribuições

Contribuições são bem-vindas! Abra uma issue para discutir qualquer alteração significativa que você gostaria de fazer.

## Acessando o site AdoPet

Para acessar o site AdoPet e verificar os animais disponíveis para adoção abaixo:

Site: `"https://adopet-frontend-cypress.vercel.app/"`
