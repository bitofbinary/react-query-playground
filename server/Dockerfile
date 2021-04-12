FROM node:14.16.1-alpine

WORKDIR /usr/app

COPY . .

RUN npm i -qy

EXPOSE 8001

CMD ["yarn", "start"]
