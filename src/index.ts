import * as dotenv from 'dotenv';

import { startHttpServer } from "./app/server/startHttpServer";
import { startWebSocketServer } from './app/server/startWebSocketServer';

dotenv.config();

const httpPort = +process.env.HTTP_PORT;
const websocketPort = +process.env.WEBSOCKET_PORT;  

startHttpServer(httpPort);
startWebSocketServer(websocketPort);
