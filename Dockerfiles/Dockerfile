# Base
FROM node:12-alpine AS base
WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Build
FROM base AS build
WORKDIR /app
COPY . .
RUN npm run build

# Release
FROM node:12-alpine AS release
COPY --from=base /app/package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist

USER node
ENV PORT=8080
EXPOSE 8080

CMD ["node", "dist/main.js"]