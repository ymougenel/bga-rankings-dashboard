### BUILD STAGE
FROM node:13.12.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli@latest
RUN ng build --prod  --deploy-url 'bga/'

### WEB SERVER STAGE
FROM nginx:1.17.9-alpine

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY  --from=build /usr/src/app/dist/bga-rankings-dashboard  /usr/share/nginx/html
