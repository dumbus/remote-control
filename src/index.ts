import * as dotenv from 'dotenv';

import { startHttpServer } from "./httpServer/startHttpServer";

dotenv.config();

startHttpServer();
