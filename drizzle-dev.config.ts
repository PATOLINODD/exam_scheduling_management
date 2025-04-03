import { defineConfig } from 'drizzle-kit';
import env from 'dotenv';
env.config({path: './app.env'})

export default defineConfig({
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST!,
        database: process.env.DB_NAME!,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        ssl: false
    },
    out: './migrations',
    schema: './src/infrastructure/drizzleDB/models/*',
})