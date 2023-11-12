FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /usr/app

COPY package.json .

RUN pnpm install


COPY . .

RUN pnpm build

CMD [ "node", ".output/server/index.mjs" ]