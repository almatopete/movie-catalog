# Get the Node 18 image from Docker
FROM node:18-alpine

# Copy files and install dependencies
WORKDIR /usr/src/app
COPY . .

# Install angular
RUN npm install -g @angular/cli

RUN npm install

RUN ng build

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]

EXPOSE 3000
