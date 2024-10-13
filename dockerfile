ARG NODE_VESION=22

FROM node:${NODE_VESION}-alpine AS base

EXPOSE 3000

WORKDIR /home/node/app

FROM base AS dev

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY . .

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

USER node

CMD ["npm","run", "dev"]

FROM base AS builder

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY . .

RUN npm run build

FROM base AS production

COPY --from=builder --chown=node:node /home/node/app/.output/ /var/www/html

EXPOSE 3000

CMD [ "node", "/var/www/html/server/index.mjs" ]
