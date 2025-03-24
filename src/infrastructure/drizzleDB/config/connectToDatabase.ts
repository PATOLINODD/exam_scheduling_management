import { drizzle } from 'drizzle-orm/node-postgres';
import env from 'dotenv';

export default function () {
  env.config({path: '/app.env'});
  
  const dbInstance = drizzle({
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      ssl: false,
  }
});
  return dbInstance;
}
