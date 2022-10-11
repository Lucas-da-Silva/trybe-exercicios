# Orchestrating Containers with Docker Compose

> In the [Classroom Docker Componse](./classroom-docker-compose/) directory is an example developed during the class.

## Now the practice

### 🚀 [Exercise 1](./exercise01/):

Let's improve our knowledge about <code>images</code> and <code>volumes</code>, for this:

1. Create an HTML file called <code>missao_trybe.html</code> that has the following structure:

    - <code>title</code> tag with the following text “Trybe”;

    - <code>H1</code> tag with the following text “Missão da Trybe”;

    - <code>p</code> tag with the following text “Gerar oportunidade para pessoas”;

    - Save the file anywhere on your machine with the html extension

2. Create a container to hold a <code>httpd:2.4</code> <strong>Apache</strong> server and bind its internal port to port 4545 on your local machine.

3. After creating the container, access the HTML page that is running on the server in your browser.

- Command to run the container:

```
docker run -d -p 4545:80 --name <container_name> <image_name>
```

4. Access the file <code>missao_trybe.html</code> and add the tag <code>p</code> with the following text “Nosso negócio é GENTE! #VQV”;

5. Get the container id <code>httpd:2.4</code>;

6. Get the <code>Mounts</code> through the <code>Source</code> property which should show the volume of this container in the Docker Host;

7. Now stop the <code>httpd:2.4</code> container;

8. Delete your container;

9. Check that the folder where you saved the html file remains in the same place;

10. Get the <code>IMAGE ID</code> from the server;

11. After obtaining the <code>IMAGE ID</code>, delete the image.

---

### 🚀 [Exercise 2](./exercise02/):
Create the Compose file to upload a [ghost blog](https://ghost.org/), this platform is similar to Wordpress and is used to create content sites. You can read on the official website how to create content on it and use it. For this exercise, we'll just use your example page:

1. Use version “3” in the file;

2. Create a <code>service</code> to upload the platform, use the <code>ghost:1-alpine</code> image;

3. Publish port <code>2368</code>, also binding to <code>2368</code>;

4. Upload the application using <code>docker-compose</code> and then access the published port to validate that everything went well.

- Command to run the compose file:

```
docker-compose up -d
```

- The command must be run in the same directory as the compose file.

- The <code>-d</code> flag is used to run the containers in the background.


---

### 🚀 [Exercise 3](./exercise03/):
By default, <code>ghost</code> uses an internal <code>sqlite</code> to save the information, however, let's change this behavior to exercise our knowledge:

1. Create a new service for our database, we can use a mysql, use the image <code>mysql:5.7</code>;

2. We need to define a <code>root</code> password for our database, for that use the <code>MYSQL_ROOT_PASSWORD</code> variable, remember that you can use the <code>${}</code> syntax to pass a host env to the container env;

3. Now we need to configure our service with ghost to use MySQL, for that, set the <code>database__client</code> variable to <code>mysql</code>;

4. Set the <code>ghost</code> name to the database name using the <code>database__connection__database variable</code>;

5. And then, indicate the connection to our MySQL in env <code>database__connection__host</code>;

6. To define the user (<strong>root</strong>) and password (the same one we defined in our MySQL), use the envs <code>database__connection__user</code> and <code>database__connection__password respectively</code>.

7. Use the depends_on option to create dependency relationships between services

8. Upload the environment with the new file using <code>docker-compose</code> and then access the port.

---

### 🚀 [Exercise 4](./exercise04/):

Now let's practice the concepts of <code>volumes</code> and <code>networks</code>.

1. Configure our mysql service to use a volume, as we saw in the content, use the target path <code>/var/lib/mysql</code>.

2. Instead of using the default network created by Compose, define a network called <code>my-network</code> for the two services to communicate.

3. Upload the environment with the new file using <code>docker-compose</code> and then access it.

---

### [Exercise 5](./exercise05/):

Now let's create a new Compose file, to run a <code>React</code> application, as we saw some examples of the content:

1. Start a new <code>ReactJS</code> project using create-react-app;

2. Create the <code>Dockerfile</code>, as we saw in the last class;

3. Create a new Compose file using version 3;

4. Define a service in the file for our app, for that use the <code>build</code> option to point to the <code>Dockerfile</code>;

5. Publish the exposed port in the <code>Dockerfile</code> by binding to localhost port <code>8080</code>;

---

### [Exercise 6](./exercise06/):

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react, e então execute o comando para subir o serviço novamente, “rebuildando” a imagem para aplicar as alterações.

---

### [Exercise 7](./exercise07/):

Create a Compose file to upload Wordpress with MySQL:

1. Use <code>wordpress:latest</code> and <code>mysql:5.7</code> images;

2. Bind port <code>80</code> of the wordpress container to 8080 of the host;

3. Set the following variables for wordpress:
    - WORDPRESS_DB_HOST: db:3306
    - WORDPRESS_DB_USER: wordpress
    - WORDPRESS_DB_PASSWORD: wordpress
    - WORDPRESS_DB_NAME: wordpress

4. Set the following variables for mysql:
    - MYSQL_ROOT_PASSWORD: somewordpress
    - MYSQL_DATABASE: wordpress
    - MYSQL_USER: wordpress
    - MYSQL_PASSWORD: wordpress

5. Set volume <code>db_data</code> to mysql;

6. Use the <code>depends_on</code> parameter to create dependency between services;

7. Add the <code>restart</code> policy with the value <code>always</code> to the services;

8. Upload the services using <code>docker-compose</code> and open it in the terminal to validate the operation.

---
