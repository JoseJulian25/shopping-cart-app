FROM node:22.11

RUN npm install -g pnpm sails 

WORKDIR /app

COPY . .

RUN rm -rf node_modules pnpm-lock.yaml

RUN pnpm install

EXPOSE 1337

CMD ["pnpm", "run", "start"]

