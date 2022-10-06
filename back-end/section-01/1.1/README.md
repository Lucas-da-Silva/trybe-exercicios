# Using Containers - Docker 🐋

## Exercises - now the practice

> Right after the question I put the code I used

1. 🚀 In [Docker Hub](https://hub.docker.com/search?q=&type=image), using the search box ("Search for great content"), search for the image of the Debian Linux Distribution.

---

2. 🚀 Once you find the official image, access it (by clicking on your card) and check the details page. Check if there is any command to download the image locally without having to create a container for it.

- Command: 
```
docker pull debian
```

---

3. 🚀 Download the image using the tag: stable-slim, which is a stripped down version of the distribution.

- Command:
```
docker pull debian:stable-slim
```

---

4. 🚀 After downloading the image to your local computer, create and run a container in interactive mode using this image as a reference — don't forget to reference the tag.

- Command:
```
docker run -it debian:stable-slim
```

---

5. 🚀 In the terminal, you should be able to run the command cat /etc/*-release, which will return the data of the Debian distribution being run inside the container.

- Command:
```
cat /etc/*-release
```

- Returns:

```
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```
---

6. 🚀 Shut down the terminal.

- Command:
```
exit
```

---

7. 🚀 Check your list of containers which container refers to the exercise you just practiced.

- Command:
```
docker container ls -a
```

---

8. 🚀 Start the same container again, without creating another one. Validate if it is active in the container list.

- Command:
```
docker start <container_id>
docker container ls
```

---

9. 🚀 Resume the container that was created earlier in this exercise.

- Command:
```
docker start -i <container_id>
```

---

10. 🚀 Run the command cat /etc/debian_version which should return the current version of the container system.

- Command:
```
cat /etc/debian_version
```

- Returns:

```
11.5
```

---


11. 🚀 Shut down the terminal.

- Command:
```
exit
```

---

12. 🚀 Remove only the container created for this exercise.

- Command:
```
docker container rm <container_id>
```

---

13. [BONUS] Interactively create and run in 'Cleanup' mode the andrius/ascii-patrol image.

- Command:
```
docker run -it --rm andrius/ascii-patrol
```

---

14. [BONUS] **Shut down the container using the buttons [ctrl] + [c].

---
