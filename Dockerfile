# Basic image dari image yang ingin kita buat
FROM ubuntu:16.04

# Command yang kita lakukan ketika membuat image tersebut
RUN apt-get update && apt-get install -y nginx \ 
  && echo "daemon off;" >> /etc/nginx/nginx.conf

# Command yang akan dijalankan ketika image ini berhasil dijalankan pada sebuah container
CMD [ "nginx" ]