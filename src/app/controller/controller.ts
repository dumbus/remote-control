import { RawData } from "ws";

import { Mouse, mouseController } from "./mouseCommands";
import { Draw, drawCommands } from "./drawCommands";

const controller = async (msg: RawData) => {
    const [ cmd, ...args ] = msg.toString().split(' ');

    console.log(`Command: ${cmd} ${args}`);

    switch (cmd) {
    case Mouse.mouse_up:
        await mouseController.mouseUp(args);
        break;

    case Mouse.mouse_down:
        await mouseController.mouseDown(args);
        break;

    case Mouse.mouse_left:
        await mouseController.mouseLeft(args);
        break;

    case Mouse.mouse_right:
        await mouseController.mouseRight(args);
        break;

    case Mouse.mouse_position:
        const position = await mouseController.mousePosition();

        return `${cmd} ${position.x},${position.y}`;

    case Draw.draw_circle:
        await drawCommands.drawCircle(args);
        break;
    
    case Draw.draw_rectangle:
        await drawCommands.drawRectangle(args);
        break;

    case Draw.draw_square:
        await drawCommands.drawSquare(args);
        break;  
    }

    return cmd;
};

export { controller };
