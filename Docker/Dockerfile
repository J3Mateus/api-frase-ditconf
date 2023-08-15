FROM node:14

WORKDIR /usr/app/oficina
COPY . /usr/app/oficina/

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /opt/bin/
RUN chmod +x /opt/bin/wait-for-it.sh

RUN npm install
EXPOSE 3000

CMD ["/opt/bin/wait-for-it.sh", "--timeout=20", "database:5432","--","npm" ,"start"]
