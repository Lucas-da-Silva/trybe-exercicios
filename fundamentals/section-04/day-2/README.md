# JavaScript - Array e loop For

---

## DESCRIÇÃO DOS PROGRAMAS

--- 

## Arrays (listas)

### [Exercise 1](./exercise1.js)

- Obtenha o valor "Serviços" do array menu:

### [Exercise 2](./exercise2.js)

- Procure o índice do valor "Portfólio" do array menu:

### [Exercise 3](./exercise3.js)

- Adicione o valor "Contato" no final do array menu:

---

## For

### [Exercise 4](./exercise4.js)

- Utilize o for para imprimir os elementos da lista groceryList com o console.log():

---

## For/of

### [Exercise 5](./exercise5.js)

- Utilize o for/of para imprimir os elementos da lista names com o console.log():

---

## Agora a prática

- Iremos utilizar esse array para realizar os exercises do 6 ao 12:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercise 6](./exercise6.js)

- Nesse primeiro exercise, percorra o array imprimindo todos os valores nele contidos com a função console.log();

### [Exercise 7](./exercise7.js)

- Para o segundo exercise, some todos os valores contidos no array e imprima o resultado;

### [Exercise 8](./exercise8.js)

- Para o terceiro exercise, calcule e imprima a média aritmética dos valores contidos no array;
    - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

### [Exercise 9](./exercise9.js)

- Com o mesmo código do exercise anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

### [Exercise 10](./exercise10.js)

- 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

### [Exercise 11](./exercise11.js)

- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

### [Exercise 12](./exercise12.js)

- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

### [Exercise 13](./exercise13.js)

- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

### [Exercise 14](./exercise14.js)

- Utilizando o array criado no exercise anterior imprima o resultado da divisão de cada um dos elementos por 2.

---

## Bônus

- Para os próximos dois exercises leia este artigo e tente entender o que está acontencedo no código abaixo:

```
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

- Com base na leitura que fez, considere o array numbers abaixo e faça os exercises:
```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercise 15](./exercise15.js)

- Ordene o array numbers em ordem crescente e imprima seus valores;

### [Exercise 16](./exercise16.js)

- Ordene o array numbers em ordem decrescente e imprima seus valores;

### [Exercise 17](./exercise17.js)

- Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

```
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```