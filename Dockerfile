FROM node:alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 7007
ENTRYPOINT [ "/bin/bash", "docker-entrypoint.sh" ] 


