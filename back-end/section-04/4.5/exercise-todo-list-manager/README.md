### Exercícios

#### Exercício 01
Crie um arquivo `docker-compose.yaml` que seja capaz de inicializar um container docker com o MySQL v8.0.29 e que crie um banco de dados chamado `todolistdb`. Depois conecte-se ao servidor MySQL utilizando o console do *MySQL* ou o *MySQL Workbench* para criar as tabelas citadas executando o comando SQL a seguir:

```sql
USE todolistdb;

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

#### Exercício 02
Crie o arquivo `src/db/connection.js` que crie e exporte uma `pool` de conexões com o MySQL.

#### Exercício 03
Crie o arquivo `src/db/tasksDB.js` que contenha as seguintes funções:

- `insert`: Função que recebe como parâmetro um objeto `task` e utiliza uma `Prepared Statement` para armazenar os dados do objeto `task` no banco de dados. O objeto `task` recebido via parâmetro deve possuir a seguinte estrutura:

```javascript
{
  nome: 'Entregar Pizza',
  descricao: 'Tarefa de Trabalho',
}
```

- `update`: Função que recebe como parâmetro um objeto `task` e um `id` de uma tarefa e utiliza uma `Prepared Statement` para alterar os dados da tarefa com identificador igual ao parâmetro `id` com os dados do objeto `task` no banco de dados. O objeto `task` recebido via parâmetro deve possuir a seguinte estrutura:

```javascript
{
  nome: 'Entregar Pizza',
  descricao: 'Tarefa de Trabalho',
}
```

- `remove`: Função que recebe como parâmetro um `id` de uma tarefa e utiliza uma `Prepared Statement` para excluir a tarefa com identificador igual ao parâmetro `id` do banco de dados.

- `findAll`: Função que não recebe nenhum parâmetro e utiliza uma `Prepared Statement` para recuperar todas as tarefas cadastradas no banco de dados.
  
- `findById`: Função que recebe como parâmetro um `id` de uma tarefa e utiliza uma `Prepared Statement` para recuperar a tarefa com identificador igual ao parâmetro `id` do banco de dados.

#### Exercício 04 🚀

Refatore o arquivo `src/routes/tasksRoutes.js` de forma que o mesmo realize as operações de acordo com a especificação dada. Para isso, utilize o arquivo `src/db/tasksDB.js` criado no `Exercício 03` para realizar as operações necessárias no banco de dados.

#### Exercício 05 🚀
Escreva testes de integração para o **endpoint** `POST /tasks` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

### Bônus

#### Exercício 01 🚀
Escreva testes de integração para o **endpoint** `PUT /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 02 🚀
Escreva testes de integração para o **endpoint** `DELETE /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 03 🚀
Escreva testes de integração para o **endpoint** `GET /tasks` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 04 🚀
Escreva testes de integração para o **endpoint** `GET /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.
