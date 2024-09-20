FROM node:22-alpine

RUN npm install -g nuxi@latest

WORKDIR /app

COPY . /app

RUN npm install

ENTRYPOINT [ "nuxi"]
