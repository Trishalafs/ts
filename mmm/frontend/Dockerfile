FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
#COPY .env ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
