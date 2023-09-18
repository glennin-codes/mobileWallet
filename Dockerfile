FROM node:lts-alpine as BUILD_IMAGE
 WORKDIR /app/react-app
 COPY package.json .
    RUN npm install
    COPY . .
    COPY docker-compose.yml .
    COPY Makefile .
    RUN npm run build

    FROM node:lts-alpine as PRODUCTION_IMAGE
    WORKDIR /app/react-app
    COPY --from=BUILD_IMAGE /app/react-app/dist/  /app/react-app/dist
   EXPOSE 8000
    COPY package.json .
    COPY vite.config.js .
     COPY docker-compose.yml .
    COPY Makefile .
    RUN npm install
     EXPOSE 8000
    CMD [ "npm",'run','preview' ]