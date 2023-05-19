# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g yarn
RUN yarn install
COPY . .
RUN yarn build

# Run stage
FROM node:18-alpine AS run
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install -g yarn
RUN yarn install --production

EXPOSE 5000
CMD [ "yarn", "serve" ]
