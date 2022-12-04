# Maybe it does not work
FROM node:18.12-alpine
WORKDIR /frontend-app
EXPOSE 8080
COPY package*.json ./
RUN npm install --silent
COPY . ./
CMD ["npm", "run", "build"]