FROM node:20-alpine as build

RUN npm install -g pnpm

WORKDIR /usr/app

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:20-alpine as runtime

WORKDIR /usr/app

COPY --from=build /usr/app/.output .

CMD [ "node", "./server/index.mjs" ]