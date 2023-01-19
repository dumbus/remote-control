import { WebSocketServer } from "ws";

const startWebSocketServer = (port: number) => {
    const wss = new WebSocketServer({ port: port });

    console.log(`Start websocket server, port: ${port}`);

    wss.on('connection', ws => {
        console.log(`Client connected, port: ${port}`);

        ws.on('message', data => {
            console.log('received: %s', data);
        });
    });

    wss.on('close', () => {
        console.log('Websocket connection was closed');
    });
};

export { startWebSocketServer };
