FROM node:18

WORKDIR /app

COPY dist dist
COPY config.js config.mjs

EXPOSE 3000

ENTRYPOINT npx http-server-deneme start