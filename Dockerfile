# Dockerfile

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB

ENV POSTGRES_USER=$POSTGRES_USER
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV POSTGRES_DB=$POSTGRES_DB

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["node", "build"]
