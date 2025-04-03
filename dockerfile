FROM node:22.1.0

WORKDIR /app

COPY package*.json ./
RUN bun install

COPY . .

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
