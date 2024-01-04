# JAVASCRIPT
- É uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar multimídias, imagens animadas, etc.

## Objetos
- Fórmula / Molde dinâmico
- Coleção de propriedas (atribuitos)
- Associáveis (chave / valor)
- Relação com objetos da vida real
- Atributos: cor, forma, material, peso, identificação, etc.

## Programação Orientada a Objetos (OOP)
- Paradigma / Modelo de programação
- Forma diferente de "pensar" no código
- Padrão utilizado em linguagens com Java, C#, PHP..

## Classes
- Introduzidas no ECMAScript 2015
- Simplificações
- Herança
- Frameworks
- De fato são "funções especiais"
- Método contrutor: constructor

## Arrow Functions
- Multiplos parâmetros: (p1, p2, ..., pN) => { expressao }
- Expressão / Algoritmo simples: (p1, p2) => expressao
- Único parâmetro: p1 => { expressao }
  
## Manipulação de Dados
- Javascript trabalha com tipagem dinamica (numeros, textos, strings, objetos, arrays)
  `let x = 0`
  `x = 'Mariana'`

## Export e Import
- São recursos do EcmaScript Modules

- Arrays

## TypeScript
- [Download](https://www.typescriptlang.org/)
- `npm install typescript --save-dev`

### Tipos de dados
- boolean
- string ("Texto", 'exemplo')
- arrays
- tuple
- enum {chave: valor}

- Converter arquivo TS para JS
  - `npx tsc ./src/intro.ts` (Cria um arquivo intro.ts)

## JS Linter
 - Instalação (Lembrando que o "-g" é opcional): `npm install jslinter -g`
 - É uma ferramenta de qualidade de código JSLint para o ambiente Node.js.JSLinter vem com duas utilidades: uma ferramenta de linha de comando chamada jslint, útil para verificar arquivos de dentro da linha de comando do terminal, e um módulo Node.js.
 - Há também o Eslint, que segue a mesma utilidade

### ESLint
- Instalação (Lembrando que o "-g" é opcional): `npm i -g eslint`
- É uma ferramenta para identificar e relatar padrões encontrados em código ECMAScript/JavaScript. Em muitos aspectos, é semelhante a JSLint e JSHint, com algumas exceções:
  - ESLint usa Espree para análise de JavaScript.
  - ESLint usa um AST para avaliar padrões no código.
  - ESLint é totalmente conectável, cada regra é um plugin e você pode adicionar mais em tempo de execução.
  - Para executar a configuração do eslint: `eslint --init`
  - Executar o comando: `eslint ./src/**`

## Frameworks Modernos
- React: Desenvolvido pelo Facebook
  - Criando um projeto react: `npx create-react-app project-react`
  - Instalando o yarn: `npm i yarn -g`
  - Executando: `yarn start`

- Vue.js (https://vuejs.org/): desenvolvido por um grupo de desenvolvedores
  
- Angular (https://angular.io/): desenvolvido pelo Google
  - Instalando com o npm: `npm install -g @angular/cli`

## Executar códigos
- Atualizar as dependencias: `npm update`
  
- `git push origin HEAD:javascript-dm`

- Executar arquivos: `node src/index.js` ou `http-server ./src`