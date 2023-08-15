FROM node:14

WORKDIR /usr/app/oficina

COPY . /usr/app/oficina/

RUN npm install  

CMD [ "npm","start" ]