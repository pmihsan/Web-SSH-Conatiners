FROM nginx:latest

LABEL maintainer="ihsanpmh@gmail.com"

COPY index.html /usr/share/nginx/html/index.html

RUN mkdir /usr/share/nginx/html/css

COPY style.css /usr/share/nginx/html/css/style.css

RUN mkdir /usr/share/nginx/html/js

COPY script.js /usr/share/nginx/html/js/script.js
