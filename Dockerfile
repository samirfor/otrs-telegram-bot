FROM node:alpine

RUN set -xe && npm install --no-cache telegraf node-rest-client

COPY index.js .

ENTRYPOINT ["node"]
CMD ["index.js"]
