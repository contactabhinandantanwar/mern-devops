
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN apk add --no-cache curl

EXPOSE 5000

CMD ["node", "server.js"]