FROM node:alpine

RUN set -xe && \

    npm install telegraf --save
