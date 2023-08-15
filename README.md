# API de Frases Motivacionais

Esta API de Frases Motivacionais foi criada como parte da oficina de Docker do DITConf. Ela permite criar, listar, atualizar e excluir frases inspiradoras para motivar os usuários. A API foi construída usando Node.js, Express e PostgreSQL.

## Funcionalidades

- Listar frases motivacionais
- Obter uma frase pelo ID
- Adicionar uma nova frase
- Atualizar uma frase existente
- Excluir uma frase

## Como Rodar a Aplicação

Siga as instruções abaixo para executar a aplicação em um ambiente de desenvolvimento:

1. Certifique-se de que você possui o Node.js e o PostgreSQL instalados.
2. Clone este repositório para o seu ambiente local.
3. Navegue para o diretório do projeto usando o terminal.
4. Instale as dependências usando o comando: `npm install`
5. Configure as informações do banco de dados no arquivo `db.js`.
6. Execute o comando: `npm start`
7. Acesse a API em: `http://localhost:3000/api/info`

## Rotas

- Listar todas as frases:
  - GET /api/frases/get/all

- Obter uma frase pelo ID:
  - GET /api/frases/get/:id

- Adicionar frases:
  - POST /api/frases/add

- Atualizar uma frase:
  - PUT /api/frases/:id
  - Corpo da Requisição:
    ```json
    {
        "frase": "Frase atualizada aqui."
    }
    ```

- Excluir uma frase:
  - DELETE /api/frases/delete/:id

## Oficina de Docker do DITConf

Esta API de Frases Motivacionais foi desenvolvida como parte da oficina de Docker do DITConf. Ela ilustra o uso de Docker para empacotar e implantar aplicativos de forma isolada e consistente.
