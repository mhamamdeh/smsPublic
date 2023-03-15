FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]



docker build -t mynodeapp .
docker run -p 3000:3000 mynodeapp
