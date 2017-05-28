FROM node:boron

MAINTAINER hansmong

ENV PORT 9000

RUN mkdir -p /usr/src/swagger
WORKDIR /usr/src/swagger

COPY package.json /usr/src/swagger
RUN npm install

COPY . /usr/src/swagger

EXPOSE 9000

CMD [ "npm", "start" ]


