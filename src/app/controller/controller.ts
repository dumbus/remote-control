import { RawData } from "ws";

import { Mouse, mouseCommands } from "./mouseCommands";
import { Draw, drawCommands } from "./drawCommands";
import { Screenshot, printScreenCommand } from "./printScreenCommand";

const controller = async (msg: RawData) => {
    const [ cmd, ...args ] = msg.toString().split(' ');

    switch (cmd) {
    case Mouse.mouse_up:
        await mouseCommands.mouseUp(cmd, args);
        break;

    case Mouse.mouse_down:
        await mouseCommands.mouseDown(cmd, args);
        break;

    case Mouse.mouse_left:
        await mouseCommands.mouseLeft(cmd, args);
        break;

    case Mouse.mouse_right:
        await mouseCommands.mouseRight(cmd, args);
        break;

    case Mouse.mouse_position:
        const position = await mouseCommands.mousePosition(cmd, args);
        return `${cmd} ${position.x},${position.y}`;

    case Draw.draw_circle:
        await drawCommands.drawCircle(cmd, args);
        break;
    
    case Draw.draw_rectangle:
        await drawCommands.drawRectangle(cmd, args);
        break;

    case Draw.draw_square:
        await drawCommands.drawSquare(cmd, args);
        break;  

    case Screenshot.prnt_scrn:
        const imageData = await printScreenCommand(cmd, args);
        return `${cmd} ${imageData}`;
    }

    return cmd;
};

export { controller };
