import { httpServer } from "./httpServer";

const startHttpServer = (port: number) => {
    console.log(`Start http server, port: ${port}`);
    
    httpServer.listen(port);
};

export { startHttpServer };
