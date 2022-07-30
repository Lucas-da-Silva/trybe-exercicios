# Ciclo de vida de componentes

---

## DESCRIÇÃO DOS PROGRAMAS

---

## Fixation exercises

### [LifeCycle](./lifecycleapp/src/)

1. Vamos treinar os momentos de cada método do React lifecycle! Nossa aplicação React para mostrar perfis e contatos do GitHub está com métodos do ciclo de vida incompletos e você deverá preenchê-los para ela voltar a funcionar.

- Verifique:
    1. Os dados do seu perfil GitHub foram exibidos ao iniciar a aplicação?
    2. É possível exibir ou ocultar os dados do seu perfil?
    3. É possível adicionar um contato na sua lista de contatos?
    4. Ao adicionar o contato, o background mudou para um tom azulado?
    5. É possível excluir um contato na sua lista de contatos?
    6. Ao excluir o contato, o background mudou para um tom alaranjado?
    7. O contador de contatos funciona perfeitamente?

> Não desenvolvi nenhum dos códigos, apenas coloquei eles nos componentes.

### [Personal data](./personal-data/src/)

2. Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.

> A api utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results.

- Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api randomuser. Utilize o método componentDidMount.
- Enquanto os dados não são entregues, deve ser renderizada uma div com o conteúdo Carregando...
- Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
- Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.

## [Dog Image](https://github.com/lucas-da-silva/exercise-dog-image)
- Neste repositório foi desenvolvido o exercício do dia.
