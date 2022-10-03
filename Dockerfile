FROM node:16.17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve:production"]
