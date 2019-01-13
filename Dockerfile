FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# install prod dependencies and init database
RUN npm install --only=production && npm run init:hermitage

# Bundle app source
COPY . .

EXPOSE 8080
CMD PORT=8080 npm start
