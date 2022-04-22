### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 
# This is needed to build and compile our code 
# while generating the docker image
FROM node:16.10-alpine AS build

ARG ENVIRONMENT="qa"
ARG API_URL="//qa.com.br"
ARG SOME_API_KEY="minha-api.qa.com.br"
ARG SOME_OTHER_API_KEY="minha-api2.qa.com.br"

ENV API_URL=${API_URL}
ENV ENVIRONMENT=${ENVIRONMENT}
ENV SOME_API_KEY=${SOME_API_KEY}
ENV SOME_OTHER_API_KEY=${SOME_OTHER_API_KEY}

# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build --prod

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/angular-variable-environment-docker /usr/share/nginx/html
COPY /config/nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 4200