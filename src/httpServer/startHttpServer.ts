// import { mouse } from "@nut-tree/nut-js";

import { httpServer } from "./httpServer";

const httpPort = process.env.HTTP_PORT || 8181;

const startHttpServer = () => {
    console.log(`Start static http server on the ${httpPort} port!`);
    
    httpServer.listen(httpPort);
};

export { startHttpServer };
