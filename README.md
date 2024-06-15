# Documentação da API de Dados Fake

## Dados para Edição (PUT):

``json
"nome": "Sicrano da Silva", 
"cpf:"319.136.964-30"}'
``
# Documentação da API de Dados Fake

## Dados para Edição (PUT):

``json
{
  "id": 1,
  "nome": "Sicrano da Silva",
  "idade": 35,
  "cidade": "Rio de Janeiro"
}``


## Dados para Exclusão (DELETE):

``json
{
  "id": 2
}
``


## Observações:
- Os dados armazenados são fictícios e não possuem nenhuma relação com a realidade.
- A API é implementada de forma simplificada para fins de demonstração.
- É importante implementar medidas de segurança adequadas em uma API real.

## Uso da API:
Para utilizar a API, você pode utilizar ferramentas como Postman ou `curl`.

### Exemplo de Recuperação de Dados (GET):

``bash
curl http://localhost:3000/get
``

### Exemplo de Adição de Dados (POST):

``
curl -X POST http://localhost:3000/post -H 'Content-Type: application/json' -d "nome": "Sicrano da Silva", "cpf:"319.136.964-30" }'
``

### Exemplo de Edição de Dados (PUT):

``bash
curl -X PUT http://localhost:3000/edit -H 'Content-Type: application/json' -d '{ "id": 1, "nome": "Sicrano da Silva", "cpf:"319.136.964-30" }'
``

> Use o código com cuidado.

### Exemplo de Exclusão de Dados (DELETE):

``bash
curl -X DELETE http://localhost:3000/delete -H 'Content-Type: application/json' -d '{ "nome": 2 }'
``
