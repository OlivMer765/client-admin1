FROM node:20-alpine AS build

# Argumentos de construcción para que Vite los detecte al empaquetar 
ARG VITE_AUTH_URL
ARG VITE_ADMIN_URL

ENV VITE_AUTH_URL=$VITE_AUTH_URL
ENV VITE_ADMIN_URL=$VITE_ADMIN_URL

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
