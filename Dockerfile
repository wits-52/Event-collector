FROM node:alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 7007
CMD npm run startApp
# ENTRYPOINT [ "np", "docker-entrypoint.sh" ] 


