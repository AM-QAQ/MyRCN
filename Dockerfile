FROM node:22-alpine

WORKDIR /myrcn

COPY public/ /myrcn/public
COPY src/ /myrcn/src
COPY package.json /myrcn/package.json

RUN npm install

CMD ["npm", "start"]