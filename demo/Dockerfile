FROM ubuntu:16.04

# nodejs
# nginx

RUN apt-get update && apt-get install -y nginx sudo curl \
  && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
  && sudo apt-get install -y nodejs \
  && echo "daemon off;" >> /etc/nginx/nginx.conf

# CMD ['nginx']
# CMD [ "npm", "run", "start" ]