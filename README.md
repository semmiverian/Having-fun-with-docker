## Having fun with docker 🐳 🐳

Currently there are 3 branches here

- base-custom-image
  Branch for playing to create a simple custom image using ubuntu and nginx image
- base-server-imager
  The same custom image like in the branch `base-custom-image` but with additional node js and command to run `npm start` by default
- docker-compose-server-client
  Branch to show how to use docker compose to build more than one container in one command.
  In this branch we weill cover
  - Server -> using express
  - Client Production -> Production build for react application using nginx
  - Client Dev -> Development buld for react with hot reloading
  - Nginx -> our web server
