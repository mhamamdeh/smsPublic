FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["docker", "run", "-p", "3000:3000", "my-node-app"]



docker build -t mynodeapp .
docker run -p 3000:3000 mynodeapp




Dockerfile
