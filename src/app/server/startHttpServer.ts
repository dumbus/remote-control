import { httpServer } from "./httpServer";

const startHttpServer = (port: number) => {
    console.log(`Start http server on localhost:${port}`);
    
    httpServer.listen(port);
};

export { startHttpServer };
