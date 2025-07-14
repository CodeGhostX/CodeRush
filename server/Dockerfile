FROM node

RUN apt-get update && apt-get install -y \
    g++ \
    python3 \
    python3-pip \
    openjdk-17-jdk \
    curl \
    && apt-get clean

WORKDIR /app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && node index.js"]
