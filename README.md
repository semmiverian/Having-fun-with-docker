## Step by Step up and running

> ** Build our image **

```bash
docker build -t ubuntu-nginx-express .

( dot means find Dockerfile file in the current directory)
```

> **Build a container from our build image**

```bash
docker container run --rm -d -p 8081:80 -v $(pwd):/usr/local/application ubuntu-nginx-express
```

### Explanation

- rm -> will remove the container when is exit.
- d -> detach run on the background
- p -> publish port from docker network into our network
- v -> will create a link between our page with docker app
