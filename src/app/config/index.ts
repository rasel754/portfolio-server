import dotenv from 'dotenv';
import pathModule from 'path';

dotenv.config({ path: pathModule.join(process.cwd(), '.env') });


export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
 database_url: process.env.DATABASE_URL,
};