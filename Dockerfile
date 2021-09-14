# stage 1: build image
FROM node:fermium-alpine as builder

RUN apk add --no-cache git

WORKDIR /usr/src/app

# Installing dependencies first can save time on rebuilds
# We do need the full (dev) dependencies here
COPY package.json yarn.lock ./
RUN yarn install

COPY blog blog
COPY docs docs
COPY src src
COPY static static
COPY babel.config.js babel.config.js
COPY docusaurus.config.js docusaurus.config.js
COPY sidebars.js sidebars.js
COPY docsearch.config.json docsearch.config.json
COPY .env .

RUN yarn build

# stage 2: resulting image
FROM rma-tools-docker-local.repo.vito.be/httpd:2.4
COPY --from=builder /usr/src/app/build /usr/local/apache2/htdocs

# Copy .env file and shell script to container
WORKDIR /usr/local/apache2/htdocs
COPY ./env.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x env.sh

# Start httpd
CMD ["/bin/sh", "-c", "/usr/local/apache2/htdocs/env.sh && httpd-foreground"]