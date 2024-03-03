# 1090 - BE JS - 009 TESTES AUTOMATIZADOS

## PROJETO FINAL

- [Instruções sobre o trabalho](#instruções-sobre-o-trabalho)
- [Get Started](#get-started)
- [HTTP API Endpoints](#http-api-endpoints)

### Instruções sobre o trabalho

Será disponibilizado para os alunos um projeto em Typescript, esse projeto é uma API HTTP para auxiliar na gestão da biblioteca municipal da cidade, contendo alguns recursos para ajudar as bibliotecárias na gestão dos livros e no empréstimo dos livros.

O projeto foi construído utilizando TDD possuindo uma suíte de testes unitários, porém recentemente uma pessoa fez algumas alterações no projeto e os testes começaram a falhar. 

No README.md do projeto voces encontraram as intrujões para poderem conseguir configurar o projeto para executa-lo.

**O seu objetivo será:**

- Fazer que os testes voltem a ser executados; 
- Resolver todos os testes que estão falhando; 
- Implementar todos os testes que não foram implementados e estão indicados como Todo.
- Implementar as seguintes novas funcionalidades utilizando TDD:
  
  - Atualização de um aluguel de livros (UpdateBooksRentalController.update);
  - Consulta para obter todos os usuários cadastrados (ReadUsersController.list)
  - Atualizar os dados de um usuário (UpdateUsersController.update)

**Critérios de avaliação:**

- Caso algum teste já existente no projeto for removido, o trabalho será penalizado, com pena de desqualificação do trabalho;
- Caso seja identificado cola dos demais trabalhos dos outros colegas de classe, ambos os trabalhos serão penalizados, com pena de desqualificação;
- Todos os testes unitários devem estar passando;
- Será avaliado o nível de cobertura de teste que foi implementado da nova funcionalidade, quanto maior o nível de cobertura alcançado pelo aluno melhor será sua avaliação;
- Será considerado um diferencial o aluno que configurar e implementar testes de integração.

**Sobre a entrega:**

- Prazo máximo até dia 14/03/2024 às 23:59:59
- Deve ser enviado para o email the.ralvescosta@gmail.com o link do repository publico, seguindo as instruções:

  - **Assunto do email:** AdaTech - Turma 1090 - Trabalho Final - NUMERO_DO_GRUPO
  - **No conteúdo do email:** Adicionar o nome de todos os integrantes do grupo

## Get started


## HTTP API Endpoints

### POST /v1/books

**Criar uma Nova Entrada de Livro**

Este endpoint permite criar uma nova entrada de livro no sistema. Você deve fornecer detalhes sobre o livro, incluindo seu título, subtítulo, editora, data de publicação e autores.

**HTTP Request**

- Method: POST
- URL: localhost:3000/v1/books
- Headers:
  - Content-Type: application/json

**Payload**

O corpo da requisição deve ser um objeto JSON contendo os seguintes campos:

- title (string): O título do livro.
- subtitle (string): O subtítulo do livro.
- publishing_company (string): O nome da editora.
- published_at (string): A data de publicação no formato ISO 8601 (YYYY-MM-DDTHH:MM:SS.sssZ).
- authors (string): Os autores do livro.

**Example Request**

```curl
  curl --location --request POST 'localhost:3000/v1/books' \
  --header 'Content-Type: application/json' \
  --data '{
      "title": "Nakfa Intelligent Awesome",
      "subtitle": "Chair programming productize Books maroon",
      "publishing_company": "Powlowski, Hackett and Bogan",
      "published_at": "2024-03-03T14:21:28.179Z",
      "authors": "authors"
  }'
```

### GET /v1/books/:id

**Consultar Detalhes de um Livro Específico**

Este endpoint permite consultar os detalhes de um livro específico no sistema utilizando seu identificador único (ID).

**Requisição HTTP**

- Método: GET
- URL: localhost:3000/v1/books/{id}
  - Substitua {id} pelo ID único do livro que deseja consultar.
- Cabeçalhos
  - Não são necessários cabeçalhos específicos para esta requisição.

**Exemplo de Requisição**

Para consultar os detalhes do livro com o ID 6de35865-9584-4c2e-bb30-65be53e62907, utilize a seguinte requisição curl:

```curl
curl --location --request GET 'localhost:3000/v1/books/6de35865-9584-4c2e-bb30-65be53e62907'
```

**Resposta**

A resposta será um objeto JSON contendo detalhes completos do livro, incluindo título, subtítulo, editora, data de publicação e autores.

### GET /v1/books

**Consultar Lista de Livros**

Este endpoint permite consultar a lista completa de livros disponíveis no sistema. Você pode usar este endpoint para obter uma visão geral de todos os livros registrados.

**Requisição HTTP**

- Método: GET
- URL: localhost:3000/v1/books
- Cabeçalhos
  - Não são necessários cabeçalhos específicos para esta requisição.

**Exemplo de Requisição**

Para consultar a lista completa de livros, utilize a seguinte requisição curl:

```curl
curl --location --request GET 'localhost:3000/v1/books'
```

**Resposta**

A resposta será um array de objetos JSON, cada um contendo detalhes de um livro específico, incluindo título, subtítulo, editora, data de publicação e autores.

### PUT /v1/books/:id

**Atualizar Detalhes de um Livro Específico**

Este endpoint permite atualizar os detalhes de um livro específico no sistema utilizando seu identificador único (ID). Você pode modificar o título, subtítulo, editora, data de publicação e autores do livro.

**Requisição HTTP**

- Método: PUT
- URL: localhost:3000/v1/books/{id}
  - Substitua {id} pelo ID único do livro que deseja atualizar.
- Cabeçalhos
  - Content-Type: application/json

**Carga Útil (Payload)**

O corpo da requisição deve ser um objeto JSON contendo um ou mais dos seguintes campos que deseja atualizar:

- title (string): O novo título do livro.
- subtitle (string): O novo subtítulo do livro.
- publishing_company (string): O novo nome da editora.
- published_at (string): A nova data de publicação no formato ISO 8601 (YYYY-MM-DDTHH:MM:SS.sssZ).
- authors (string): Os novos autores do livro.

**Exemplo de Requisição**

Para atualizar os detalhes do livro com o ID 6de35865-9584-4c2e-bb30-65be53e62907, utilize a seguinte requisição curl:

```curl
curl --location --request PUT 'localhost:3000/v1/books/6de35865-9584-4c2e-bb30-65be53e62907' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Fantastic bypassing Unbranded RAM",
    "subtitle": "RSS Rubber",
    "publishing_company": "White and Sons",
    "published_at": "2024-03-03T14:34:14.507Z",
    "authors": "authors"
}'
```

**Resposta**

A resposta será um objeto JSON contendo os detalhes atualizados do livro.

### DELETE /v1/books/:id

**Excluir um Livro Específico**

Este endpoint permite excluir um livro específico do sistema utilizando seu identificador único (ID). Esta ação é irreversível e deve ser usada com cautela.

**Requisição HTTP**

- Método: DELETE
- URL: localhost:3000/v1/books/{id}
  - Substitua {id} pelo ID único do livro que deseja excluir.
- Cabeçalhos
  - Não são necessários cabeçalhos específicos para esta requisição.

**Exemplo de Requisição**

Para excluir o livro com o ID 6de35865-9584-4c2e-bb30-65be53e62907, utilize a seguinte requisição curl:

```curl
curl --location --request DELETE 'localhost:3000/v1/books/6de35865-9584-4c2e-bb30-65be53e62907'
```
