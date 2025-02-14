# Get the Node 18 image from Docker
FROM node:18-alpine

# Copy files and install dependencies
WORKDIR /usr/src/app
COPY . .
RUN npm install

# Install angular
RUN npm install -g @angular/cli

CMD ["ng", "start", "--host", "0.0.0.0", "--disable-host-check"]

EXPOSE 3000
