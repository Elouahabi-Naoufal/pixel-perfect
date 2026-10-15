# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN npm install --ignore-scripts
COPY . .
ENV NITRO_PRESET=node-server
RUN npm run build

# Production stage
FROM node:22-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=build /app/.output ./.output
USER app
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
