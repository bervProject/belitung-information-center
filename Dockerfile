FROM node:alpine as build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .

FROM nginx:stable-alpine as run
COPY --from=build /app/www /usr/share/nginx/html
