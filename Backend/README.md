# Bem vindo ao BackEnd.

Aqui estão contidos os arquivos que compõem o backend desenvolvido para este projeto.


## Sumário:

- [Sobre o projeto](#sobre-o-projeto)
- [Ferramentas utilizadas neste projeto](#ferramentas-utilizadas-neste-projeto)
- [Como executar este projeto](#como-executar-este-projeto)
    - [COM DOCKER](#com-docker)
    - [SEM DOCKER](#sem-docker)


## Sobre o projeto:
• Foi desenvolvido na Arquitetura REST.
• Utilizando a metodologia TDD (Test Driven Development).
• Aplicados conceitos de S.O.L.I.D.
• Aplicados conceitos de Coesão e Acoplamento.


## Ferramentas utilizadas neste projeto:

• [Node.js](https://nodejs.org/en/)
• [Express](https://expressjs.com/pt-br/)
• [TypeScript](https://www.typescriptlang.org/)
• [Jest](https://jestjs.io/)
• [MongoDB](https://www.mongodb.com/)
• [Mongoose](https://mongoosejs.com/)
• [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)
• [Bcrypt](https://www.npmjs.com/package/bcrypt)
• [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
• [Dotenv](https://www.npmjs.com/package/dotenv)
• [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
• [Supertest](https://www.npmjs.com/package/supertest)
• [Insominia Documenter](https://insomnia.rest/plugins/insomnia-plugin-documenter)
• [Conceito SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
• [Conceito de Coesão e Acoplamento](https://www.devmedia.com.br/coesao-e-acoplamento/25797)
• [TDD](https://medium.com/@lucasferreiralimax/test-driven-development-tdd-com-jest-e-node-js-2f1f1c9e4e4e)
• [Arquitetura REST](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
• [Docker](https://www.docker.com/)
• [Docker Compose](https://docs.docker.com/compose/)


## Como executar este projeto:

Para executar este projeto, você precisará seguir os seguintes passos:

1. Instalar o [Node.js](https://nodejs.org/en/).
2. Instalar o [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
3. Instalar o [Docker](https://www.docker.com/).
4. Instalar o [Docker Compose](https://docs.docker.com/compose/).

Para executar o projeto, você precisará seguir os seguintes passos:


### COM DOCKER:
1. Clonar o repositório.

```bash
git clone
```

2. Alterar o dockerfile, definindo os valores da variável de ambiente.

3. Iniciar o Container com o Docker Compose.

```bash
docker-compose up
```

### SEM DOCKER:
1. Clonar o repositório.

```bash
git clone
```

2. Instalar as dependências.

```bash
yarn
```

3. Renomear o arquivo .env.example para .env e definir os valores das variáveis de ambiente.

4. Transpilar o código TypeScript para JavaScript.

```bash
yarn build
``` 

5. Executar o projeto.

```bash
yarn start
```
