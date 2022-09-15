# RTL - Mocks e Inputs

## 🚀 Parte 1 - [Exercise 1]()

- Crie um arquivo chamado service.js: é nele que você irá criar as funções que são pedidas nos exercícios.

- Crie um arquivo chamado service.test.js: é ele que vai conter os testes das funções do arquivo anterior.

1. Crie uma função que gere um número aleatório

   - Defina uma função que gere um número aleatório entre 0 e 100.
   - Desenvolva os testes para essa função.
   - Utilize o mock e defina o retorno padrão como 10.
   - Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

   - Defina o mock da função para a nova funcionalidade da função.
   - Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
   - Verifique se a aplicação da nova implementação acontece apenas uma vez.

3. Use a mesma função do primeiro exercício

   - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
   - Retorne a multiplicação dos parâmetros.
   - Realize os testes que achar necessário.
   - Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
   - Faça os testes que achar necessário.

4. Crie três funções.

   - Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
   - Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
   - Elabore a terceira função: essa função deve receber duas strings e concatená-las.
   - A. Faça o mock das funções para com os seguintes casos:
     - Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
     - Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
     - Implemente, na terceira função: ela deve receber três strings e concatená-las.
   - B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
   - C. Após criar os testes, restaure a implementação da primeira função.
     - Faça o teste necessário para garantir que a implementação da função foi restaurado.

5. Crie uma função que faça requisição para a api [dog pictures](https://dog.ceo/dog-api/).
   - Mocke a requisição e crie dois testes.
     - O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
     - O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
   - Crie todos os testes que achar necessário.

---

## 🚀 Parte 2

### Desenvolvi exercícios nesse repositório: <strong>[Exercise digimon finders](https://github.com/lucas-da-silva/exercise-digimon-finders)</strong>
