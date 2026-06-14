# Testes no Postman - UniFECAF Flix API

Use os exemplos abaixo para tirar os prints exigidos no trabalho.

## 1. Listar todos os filmes

Método: GET
URL: http://localhost:3000/v1/controle-filmes/filme
Resultado esperado: status 200 e lista de filmes.

## 2. Buscar filme por ID

Método: GET
URL: http://localhost:3000/v1/controle-filmes/filme/1
Resultado esperado: status 200 e dados do filme selecionado.

## 3. Filtrar filmes por nome ou sinopse

Método: GET
URL: http://localhost:3000/v1/controle-filmes/filtro/filme?nome=matrix
Resultado esperado: status 200 e filmes que contenham o termo pesquisado no nome ou na sinopse.

## 4. Teste de ID inválido

Método: GET
URL: http://localhost:3000/v1/controle-filmes/filme/abc
Resultado esperado: status 400 e mensagem de ID inválido.

## 5. Teste de filtro inválido

Método: GET
URL: http://localhost:3000/v1/controle-filmes/filtro/filme?nome=a
Resultado esperado: status 400 e mensagem solicitando pelo menos 2 caracteres.
