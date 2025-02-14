# Get the Node 18 image from Docker
FROM node:18-alpine

# Copy files and install dependencies
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g gatsby-cli

RUN gatsby build

RUN npm install --global serve

CMD serve /usr/src/app/public

EXPOSE 3000
