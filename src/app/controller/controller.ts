import { RawData } from "ws";

import { Mouse, mouseController } from "./mouseCommands";

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
    }

    return cmd;
};

export { controller };
