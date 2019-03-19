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
# CMD ["node"]
# CMD ["tail", "-f", "/dev/null"]
