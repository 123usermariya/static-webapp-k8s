FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY app/ /usr/share/nginx/html/

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]