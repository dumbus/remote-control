import { RawData } from "ws";

import { Mouse, mouseCommands } from "./mouseCommands";
import { Draw, drawCommands } from "./drawCommands";
import { Screenshot, printScreenCommand } from "./printScreenCommand";

const controller = async (msg: RawData) => {
    const [ cmd, ...args ] = msg.toString().split(' ');

    console.log(`Command: ${cmd} ${args}`);

    switch (cmd) {
    case Mouse.mouse_up:
        await mouseCommands.mouseUp(args);
        break;

    case Mouse.mouse_down:
        await mouseCommands.mouseDown(args);
        break;

    case Mouse.mouse_left:
        await mouseCommands.mouseLeft(args);
        break;

    case Mouse.mouse_right:
        await mouseCommands.mouseRight(args);
        break;

    case Mouse.mouse_position:
        const position = await mouseCommands.mousePosition();

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

    case Screenshot.prnt_scrn:
        const imageData = await printScreenCommand();
        return `${cmd} ${imageData}`;
    }

    return cmd;
};

export { controller };
