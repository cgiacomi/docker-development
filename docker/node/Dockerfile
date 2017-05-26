#FROM node:6.9-alpine
FROM keymetrics/pm2-docker-alpine

ARG MONGODB_PORT_27017_TCP_PORT=27017

# Install PM2
RUN npm install pm2 -g
#RUN npm install pm2


# Define working directory
WORKDIR /usr/src/server


# Expose port
EXPOSE 8080
