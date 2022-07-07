# JavaScript Assíncrono - Fetch API e async/await

---

## DESCRIÇÃO DOS PROGRAMAS

---

## Exercises

### [Exercise 1](./exercise1/)

#### API used: https://icanhazdadjoke.com/api

1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

    - Utilize o HTML e o js a seguir como base:

```
<!-- jokes.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

### [Exercise 2](./exercise2/)

- Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.

#### API used: [CoinCap](https://docs.coincap.io/)

```
url: `https://api.coincap.io/v2/assets`
```

> Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

1. Agora que temos a url vamos criar um arquivo (api.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.

2. Crie também um arquivo HTML (index.html, por exemplo) que deve conter uma tag para listar as crypto moedas.

3. 🚀 Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.

4. 🚀 Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?

5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

### [Bonus](./exercise2/)

#### API used: [Currency API](https://github.com/fawazahmed0/currency-api#readme)

- Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?

```
baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`
endpoint: `/currencies/usd.min.json`
```