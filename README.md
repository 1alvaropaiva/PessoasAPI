# API de Gerenciamento de Pessoas (Node.js + Express)

API de gerenciamento de pessoas, com CRUD completo e dados salvos na memória. 

Libs: UUID (`matricula`). Nodemon (reiniciar o servidor após a api ser alterada). Swagger (documentação). 

API criada usando Node.js e Express.

---

## Pré-requisitos

 **Node.js LTS** (inclui `npm`):  
   [https://nodejs.org/](https://nodejs.org/)

 **Git** (para clonar o repositório):  
   [https://git-scm.com/downloads](https://git-scm.com/downloads)



---

## Clonar o repositório e instalar dependencias

Abra o prompt de Comando e rode:

```bash
git clone https://github.com/1alvaropaiva/PessoasAPI 
```

```bash
cd PessoasAPI
```

```bash
npm install
```

## Rodar a API

Modo normal:

```bash
npm start
```
Modo desenvolvimento (recomendado):

```bash
npm run dev
```
A API estará disponível em https://localhost:3000

## Swagger

http://localhost:3000/api-docs/