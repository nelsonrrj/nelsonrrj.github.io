ARG APP_FOLDER=/var/www/html
ARG NODE_TAG=22-alpine3.20

FROM node:${NODE_TAG} AS base
ARG APP_FOLDER
WORKDIR ${APP_FOLDER}

FROM base AS installer
COPY package*.json .
RUN npm ci --include=dev
COPY . .

FROM installer AS develop
RUN npm run postinstall
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

FROM installer AS builder
ENV NODE_ENV=production
RUN npm run build

FROM base AS production
ARG APP_FOLDER
EXPOSE 3001
COPY --from=builder --chown=node:node ${APP_FOLDER}/.output/ /var/www/html
CMD [ "node", "/var/www/html/server/index.mjs" ]
