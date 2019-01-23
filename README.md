## Having fun with docker 🐳 🐳

Currently there are 3 branches here

- [Base Custom Image](https://github.com/semmiverian/Having-fun-with-docker/tree/base-custom-image)
  Branch for playing to create a simple custom image using ubuntu and nginx image
- [Base Server Image](https://github.com/semmiverian/Having-fun-with-docker/tree/base-server-image)
  The same custom image like in the branch `base-custom-image` but with additional node js and command to run `npm start` by default
- [Docker Compose server and client](https://github.com/semmiverian/Having-fun-with-docker/tree/docker-compose-server-client)
  Branch to show how to use docker compose to build more than one container in one command.
  In this branch we weill cover
  - Server -> using express
  - Client Production -> Production build for react application using nginx
  - Client Dev -> Development buld for react with hot reloading
  - Nginx -> our web server
