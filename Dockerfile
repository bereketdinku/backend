FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
EXPOSE 8000

CMD ["node","app.js"]