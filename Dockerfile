# Dockerfile

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app



COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB

ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_DB=$POSTGRES_DB

RUN pnpm build

EXPOSE 3000
CMD ["node", "build"]
