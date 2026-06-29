FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY app/index.html .
COPY app/style.css .
COPY app/script.js .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
