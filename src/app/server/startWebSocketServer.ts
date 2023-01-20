import { WebSocketServer } from "ws";

import { controller } from "../controller/controller";

const startWebSocketServer = (port: number) => {
    const wss = new WebSocketServer({ port: port });

    console.log(`Start websocket server on localhost:${port}`);

    wss.on('connection', ws => {
        console.log(`Client connected on port: ${port}`);

        ws.on('message', async (msg) => {
            const res = await controller(msg);
            ws.send(res);
        });

        ws.on('close', () => {
            console.log('Websocket connection was closed');
        });
    });
};

export { startWebSocketServer };
