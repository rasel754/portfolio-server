import app from './app';

import mongoose from 'mongoose';
import { Server } from 'http';
import config from './app/config';
import { UserService } from './app/modules/User/User.service';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    await UserService.initializeUser();

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();