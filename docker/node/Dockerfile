FROM node:6.9-alpine

ARG MONGODB_PORT_27017_TCP_PORT=27017

# Install PM2
RUN npm install -g pm2
RUN npm install pm2


# Define working directory
WORKDIR /usr/src/app


# Expose port
EXPOSE 8080
