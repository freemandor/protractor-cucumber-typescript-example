FROM node:14-stretch-slim

WORKDIR /app

COPY protractor.conf.docker.js ./protractor.conf.js
COPY cucumber.docker.js ./cucumber.js
COPY package.json package-lock.json cucumber.config.js generateHtmlReport.js ./
COPY dist/out-tsc ./

RUN mkdir features
COPY features ./features

RUN mkdir reports

RUN npm ci
