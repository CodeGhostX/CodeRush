FROM node:23-slim

RUN apt-get update && apt-get install -y \
    g++ \
    python3 \
    python3-pip \
    openjdk-17-jdk \
    curl \
    && apt-get clean

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
