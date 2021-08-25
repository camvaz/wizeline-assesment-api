FROM node:alpine3.11
EXPOSE 3000
WORKDIR /app
ENV NODE_ENV production
COPY package*.json ./
RUN npm install 
COPY . .
RUN npx tsc 

CMD ["node", "./dist/index.js"]