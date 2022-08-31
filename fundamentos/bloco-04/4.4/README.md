# JavaScript - Objectos e funções

---

DESCRIÇÃO DOS PROGRAMAS

---

## Objetos

### [Exercício 1](./exercicio1.js)

1. Crie um objeto player contendo as variáveis listadas abaixo.

```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

### [Exercício 2](./exercicio2.js)

2. Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

### [Execício 3](./exercicio3.js)

3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

```
[2006, 2007, 2008, 2009, 2010, 2018]
```

### [Exercício 4](./exercicio4.js)

4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

### [Exercício 5](./exercicio5.js)

5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

---

## for/in e for/of

### [Exercício 6](./exercicio6.js)

1. Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
```

### [Exercício 7](./exercicio7.js)

2. Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```

---

## Parte 1 - Objetos e For/In

- Usando o objeto abaixo, faça os exercícios a seguir:

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

### [Exercício 8](./exercicio8.js)

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

```
Bem-vinda, Margarida
```

### [Exercício 9](./exercicio9.js)

2. 🚀 Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

```
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

### [Exercício 10](./exercicio10.js)

3. Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

```
personagem
origem
nota
recorrente
```

### [Exercício 11](./exercicio11.js)

4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

### [Exercício 12](./exercicio12.js)

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

- Usando o objeto abaixo, faça os exercícios a seguir:
``` 
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

### [Exercício 13](./exercicio13.js)

6. 🚀 Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

### [Exercício 14](./exercicio14.js)

7. 🚀 Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

### [Exercício 15](./exercicio15.js)

8. 🚀 Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

---

## Parte 2 - Funções

### [Exercício 16](./exercicio16.js)

1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
    - Exemplo de palíndromo: arara.
    - verificaPalindrome('arara');
    - Retorno esperado: true
    - verificaPalindrome('desenvolvimento');
    - Retorno esperado: false

### [Exercício 17](./exercicio17.js)

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
    - Array de teste: [2, 3, 6, 7, 10, 1];.
    - Valor esperado no retorno da função: 4.

### [Exercício 18](./exercicio18.js)

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    - Array de teste: [2, 4, 6, 7, 10, 0, -3];.
    - Valor esperado no retorno da função: 6.

### [Exercício 19](./exercicio19.js)

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
    - Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
    - Valor esperado no retorno da função: Fernanda.

### [Exercício 20](./exercicio20.js)

5. 🚀 Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
    - Array de teste: [2, 3, 2, 5, 8, 2, 3];.
    - Valor esperado no retorno da função: 2.

### [Exercício 21](./exercicio21.js)

6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
    - Valor de teste: N = 5.
    - Valor esperado no retorno da função: 1+2+3+4+5 = 15. 

### [Exercício 22](./exercicio22.js)

7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
    - Valor de teste: 'trybe' e 'be'
    - Valor esperado no retorno da função: true
    - verificaFimPalavra('trybe', 'be');
    - Retorno esperado: true
    - verificaFimPalavra('joaofernando', 'fernan');
    - Retorno esperado: false

---

## Bônus

### [Exercício 23](./exercicio23.js)

1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
    - Uma string é um array de caracteres, então cada elemento do array é uma letra.
    - O valor de cada numeral romano é:

```
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
```

    - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
    - Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

### [Exercício 24](./exercicio24.js)

2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

```
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```

### [Exercício 25](./exercicio25.js)

3. 🚀 A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

```
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
```

- Usando o objeto abaixo, faça os exercícios a seguir:

```
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
```

### [Exercício 26](./exercicio26.js)

4. Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

### [Exercício 27](./exercicio27.js)

5. Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.
