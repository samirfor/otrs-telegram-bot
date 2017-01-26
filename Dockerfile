FROM node:alpine

COPY index.js .
COPY package.json .

RUN set -xe && npm install --no-cache

ENTRYPOINT ["node"]
CMD ["index.js"]
