Documentação da API
Esta documentação descreve os endpoints e funcionalidades da API, utilizando nomes fictícios para os dados.

Endpoints:
/get: Recupera todos os dados armazenados.
/post: Adiciona um novo dado.
/edit: Edita um dado existente.
/delete: Exclui um dado existente.
Método HTTP:
/get: GET
/post: POST
/edit: PUT
/delete: DELETE
Formato de Dados:
JSON
Exemplos de Dados:
Dados para Adicionar (POST):

JSON
{
  "nome": "Fulano de Tal",
  "idade": 30,
  "cidade": "São Paulo"
}
Use o código com cuidado.
content_copy
Dados para Editar (PUT):

JSON
{
  "id": 1,
  "nome": "Sicrano da Silva",
  "idade": 35,
  "cidade": "Rio de Janeiro"
}
Use o código com cuidado.
content_copy
Dados para Excluir (DELETE):

JSON
{
  "id": 2
}
Use o código com cuidado.
content_copy
Observações:
Os dados armazenados são fictícios e não possuem nenhuma relação com a realidade.
A API é implementada de forma simplificada para fins de demonstração.
É importante implementar medidas de segurança adequadas em uma API real.
Uso da API:
Para utilizar a API, você pode utilizar ferramentas como Postman ou curl.

Exemplo de Recuperação de Dados (GET):

Bash
curl http://localhost:3000/get
Use o código com cuidado.
content_copy
Exemplo de Adição de Dados (POST):

Bash
curl -X POST http://localhost:3000/post -H 'Content-Type: application/json' -d '{ "nome": "Fulano de Tal", "idade": 30, "cidade": "São Paulo" }'
Use o código com cuidado.
content_copy
Exemplo de Edição de Dados (PUT):

Bash
curl -X PUT http://localhost:3000/edit -H 'Content-Type: application/json' -d '{ "id": 1, "nome": "Sicrano da Silva", "idade": 35, "cidade": "Rio de Janeiro" }'
Use o código com cuidado.
content_copy
Exemplo de Exclusão de Dados (DELETE):

Bash
curl -X DELETE http://localhost:3000/delete -H 'Content-Type: application/json' -d '{ "id": 2 }'
Use o código com cuidado.
content_copy
Importante:

Substitua localhost:3000 pelo URL real da sua API.
Adapte os exemplos de dados de acordo com suas necessidades.
