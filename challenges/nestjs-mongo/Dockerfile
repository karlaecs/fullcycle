FROM node:20-slim

WORKDIR /home/node/app

USER node

RUN npm run start:dev

CMD [ "tail", "-f", "/dev/null" ]