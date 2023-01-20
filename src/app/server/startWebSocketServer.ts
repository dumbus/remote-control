import { WebSocketServer, createWebSocketStream } from "ws";

import { controller } from "../controller/controller";

const startWebSocketServer = (port: number) => {
    const wss = new WebSocketServer({ port: port });

    console.log(`Start websocket server on localhost:${port}`);

    wss.on('connection', ws => {
        console.log(`Client connected on port: ${port}`);

        const wsStream = createWebSocketStream(ws, { encoding: 'utf-8' });

        wsStream.on('data', async (data) => {
            const res = await controller(data);
            ws.send(res);
        });

        ws.on('close', () => {
            console.log('Websocket connection was closed');
        });
    });
};

export { startWebSocketServer };
