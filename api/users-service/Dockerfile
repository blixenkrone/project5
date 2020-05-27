FROM node:12

COPY package*.json /app/

COPY www /app/www/

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 8081

CMD ["node", "./www/server.js"]
