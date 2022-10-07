# Introduction - Manipulating and Imaging in Docker

## Exercises - now the practice

> Just below the question I put the command I used.

1. Create a Dockerfile using the chuanwen/cowsay image.

- Command:

```
FROM chuanwen/cowsay
```
---

2. Set an ENTRYPOINT for command execution.
- Note that the cowsay executable is in the /usr/games/ directory.
- Remember that with it, unlike CMD, the command cannot be overwritten with docker run, but we wiil be able to pass parameters to the binary and we will explore this feature to be able to pass the message.

- Command:

```
ENTRYPOINT ["/usr/games/cowsay"]
```

---

3. Use CMD to set a default message.

- Command:

```
CMD ["Hello World"]
```

---

4. Generate a build and runa container based on your image without passing any commands.

- Command:

```
docker build -t cowsay .
docker container run cowsay
```

---

5. Run a new container passing your message to test. In addition to the message you can use the -l option to list other available characters and then run something like docker container run cowsay -f dragon-and-cow "VQV TRYBE", to display a dragon along with the cow.
