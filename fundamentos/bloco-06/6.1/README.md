# HTML & CSS - Forms

---

## DESCRIÇÃO DOS CONTEÚDOS

---

## Parte 2 - input tag, types e attributes

### [Exercício 1](./exercicio1/)

- Vamos praticar um pouco, criando uma tela de login? 🔥
1. Adicione os campos de entrada para email e senha.
2. Adicione um checkbox com o texto Lembre-me.
3. Adicione um botão com o texto Entrar.
4. Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
5. Adicione o atributo required para os campos de email e senha.
6. Adicione o atributo autocomplete="off" para o campo de email.
7. Adicione o atributo autofocus para o campo de email.

---

## Parte 4 - Entenda o prevent default

### [Exercicio 2](./exercicio2/)

1. Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
2. Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
3. Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)

---

## Criando um formulário para concorrer a uma viagem

### [Formulário](./formulario/)

 > O exercício será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado form.html. A estruturação de sua página deverá ficar semelhante com a imagem abaixo.

![Formato do Formulário TrybeTrip](https://assets.app.betrybe.com/fundamentals/html-forms/images/Excalidraw-forms-94cb593582e99fd08f284274fd8b50ab.png)

1. O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
    - Nome Completo:
        - Limitado entre 10 e 40 caracteres.
    - E-mail:
        - Limitado entre 10 e 50 caracteres.
    - Destino Preferido:
        - 4 opções: Cidade, Campo, Praia, Montanhas.
    - Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
        - Limite de 500 caracteres.
    - Qual a melhor data para realizar sua viagem?
    - Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
    - Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

- Esses serão os principais campos utilizadas nos próximos exercícios.
2. Crie um botão para enviar as informações preenchidas.

- Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.
    - Dica: Coloque a tag <script> no final do seu body.
3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
4. Crie um botão que limpe as informações contidas nos campos;

