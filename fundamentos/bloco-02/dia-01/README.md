# GIT e GITHUB

Entendi como funciona o Git e o GitHub, e como utilizá-los em conjunto.

## COMANDOS:

### Clonar um repositório remoto.

```sh
git clone <url-do-repositorio>
```

### Atualizar o repositório local sem modificar os arquivos locais.

```sh
git fetch
```

### Atualizar o repositório local modificando os arquivos locais.

``` sh
git pull
```

### Lista todas as branchs do repositório local.

```sh
git branch
```

### Criar uma nova branch a partir da branch atual e mudar para ela.

```sh
git checkout -b <nome-da-branch>
```

### Mudar da branch atual para outra branch especificando o nome.

```sh
git checkout <nome-da-branch>
```

### Mostrar as informações dos arquivos modificados da branch atual.

```sh
git status
```

### Criar uma mensagem personalizada especificando as alterações realizadas e atualizar o histórico de versões.

```sh
git commit -m "mensagem"
```

### Inclui alterações de arquivos no próximo commit.

```sh
# adicionar todos os arquivos do diretório 
git add .
# adicionar somente o arquivo especificado
git add <arquivo>
```

### Enviar e salvar sua branch local no repositório remoto

```sh
# primeira vez
git push -u origin <nome-da-branch>
# já tendo link com o repositório remoto
git push
```

### Atualiza e traz modificações do repositório remoto para o repositório local.

```sh
git pull
```