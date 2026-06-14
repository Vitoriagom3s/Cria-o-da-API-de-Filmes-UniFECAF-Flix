# UniFECAF Flix API

API REST desenvolvida em Node.js para consulta do acervo de filmes da plataforma fictícia UniFECAF Flix. O projeto utiliza Express, Prisma ORM, MySQL e arquitetura MVC.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Prisma ORM
- JavaScript ES Modules
- Postman para testes

## Endpoints obrigatórios

### Listar todos os filmes

```http
GET http://localhost:3000/v1/controle-filmes/filme
```

### Buscar filme por ID

```http
GET http://localhost:3000/v1/controle-filmes/filme/1
```

### Filtrar filmes por nome ou sinopse

```http
GET http://localhost:3000/v1/controle-filmes/filtro/filme?nome=matrix
```

## Estrutura do projeto

```txt
unifecaf-flix-api/
├── app.js
├── package.json
├── .env.example
├── prisma/
│   └── schema.prisma
├── database/
│   └── script.sql
├── postman/
│   └── UniFECAF-Flix.postman_collection.json
└── src/
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── filmeController.js
    ├── models/
    │   └── filmeModel.js
    └── routes/
        └── filmeRoutes.js
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Crie o banco de dados no MySQL executando o arquivo:

```txt
database/script.sql
```

3. Copie `.env.example` para `.env` e ajuste a conexão:

```env
DATABASE_URL="mysql://root:senha@localhost:3306/db_unifecaf_flix"
PORT=3000
```

4. Gere o Prisma Client:

```bash
npx prisma generate
```

5. Inicie a API:

```bash
npm run dev
```

6. Teste no navegador ou no Postman:

```txt
http://localhost:3000/v1/controle-filmes/filme
```

## Status HTTP utilizados

- 200: consulta realizada com sucesso.
- 400: parâmetro inválido.
- 404: rota ou filme não encontrado.
- 500: erro interno no servidor.

## Autor

Vitoria Gomes


## 🖥 Parte visual demonstrativa

Além dos endpoints REST, o projeto possui uma interface visual simples para demonstrar a API funcionando no navegador.

Após instalar as dependências, configurar o `.env`, executar o script SQL e iniciar o servidor com `npm start`, acesse:

```txt
http://localhost:3000
```

A página visual está em `public/index.html` e consome os endpoints da própria API para listar os filmes em cards e realizar busca por nome ou sinopse.

Qualquer dúvida contate: viviamorimgomes08@gmail.com
