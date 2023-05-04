# Nó e Listas Encadeadas

## Exercícios - agora, a prática

### [Exercício 1:](./linked_list_content.py)

_Aprimorando a classe `Lista`_: nossa classe `Lista` atende as principais operações que essa `TAD` nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:

a. A operação `clear` nos permite remover todos os `Nodes` da lista;

b. A operação `__get_node_at` nos permite acessar o `Node` em qualquer posição da lista.

> _Após criada as operações anteriores, refatore os seguintes métodos para que utilizem a `__get_node_at` ante iterações:_

- **insert_at;**

- **insert_last;**

- **remove_last;**

- **remove_at;**

- **get_element_at.**

### [Exercício 2:](./linked_list_content.py)

_Nova busca_: até o momento nossa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada `def index_of(self, value)`, onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar `-1`. Esta função deve respeitar a complexidade `O(n)`.
