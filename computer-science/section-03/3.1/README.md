# Raspagem de Dados

## Exercícios - agora, a prática

### [Exercício 1](./exercise01.py):
Faça uma requisição ao site `https://httpbin.org/encoding/utf8` e exiba seu conteúdo de forma legível.

### [Exercício 2](./exercise02.py):
Faça uma requisição ao recurso usuários da API do Github (`https://api.github.com/users`), exibindo o username e url de todos os usuários retornados.

### [Exercício 3](./exercise03.py):
Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a `https://scrapethissite.com/pages/advanced/?gotcha=headers` e verifique se foi bem sucedida.

### 🚀 [Exercício 4](./exercise04.py):
Baseando-se em uma página contendo detalhes sobre um livro (`http://books.toscrape.com/catalogue/the-grand-design_405/index.html`), faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.

### 🚀 [Exercício 5](./exercise05.py):
Modifique o exercício anterior para retornar também quantos livros estão disponíveis, apresentando como último campo no retorno.

⚠️ Importe o arquivo [books.json](./books.json) no MongoDB antes de responder as próximas questões.

🐋 Utilizando o docker:

```
docker run --name <container-name> -d -p 27017:27017 mongo:4
docker cp books.json <container-name-or-id>:/tmp/books.json
docker exec <container-name-or-id> mongoimport --db library --jsonArray --file /tmp/books.json
```

### [Exercício 6](./exercise06.py):
Escreva um programa que se conecte ao banco de dados `library` e liste os livros da coleção `books` para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

### [Exercício 7](./exercise07.py):
Faça o cálculo de quantos livros publicados (`STATUS = PUBLISH`) temos em nosso banco de dados por categoria. Ordene-os de forma decrescente de acordo com a quantidade.