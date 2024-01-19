FROM node:14


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 4002
CMD [ "npm", "start" ]

# docker build -t srk43/happi-sls-ui .
# docker run -p 4002:4002 -d srk43/happi-sls-ui
# export AWS_PROFILE=happi && copilot deploy
# export AWS_PROFILE=happi && copilot pipeline init