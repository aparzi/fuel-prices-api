FROM node:16.13.2
RUN npm install -g nodemon

ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
