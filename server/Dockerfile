FROM node:10-alpine

LABEL maintainer="Semmi Verian"

WORKDIR /usr/local/application

COPY . .

RUN apk update \
  apk add --update python python-dev py-pip build-base \
  && apk add git zip unzip vim nano \
  && rm -rf /var/cache/apk/* \
  && npm install \ 
  && apk add --no-cache bash

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

CMD ["npm", "run", "start"]

# FROM ubuntu:16.04

# RUN apt-get update  \ 
#   && apt-get install -y curl sudo git zip unzip vim nano nginx \
#   && apt-get clean \
#   && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
#   && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
#   && apt-get install -y nodejs \
#   && echo "daemon off;" >> /etc/nginx/nginx.conf 

# WORKDIR /usr/local/application

# # COPY . .

# # ENV PORT=80

# CMD [ "npm", "run", "start"]
# # docker build -t semmi-ubuntu-nginx-express .
# # docker container run -it -p 8081:80 -v semmi-ubuntu-nginx-express .