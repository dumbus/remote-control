import { mouse, up, down, left, right } from "@nut-tree/nut-js";

import { printResultMessage } from "../utils/printResultMessage";

enum Mouse {
    mouse_up = 'mouse_up',
    mouse_down = 'mouse_down',
    mouse_left = 'mouse_left',
    mouse_right = 'mouse_right',
    mouse_position = 'mouse_position'
}

const mouseCommands =  {
    async mouseUp(cmd: string, args: string[]) {
        const delta = Number(...args);
        await mouse.move(up(delta));

        const result = `Mouse was moved up to ${delta} px`;
        printResultMessage(cmd, args, result);
    },

    async mouseDown(cmd: string, args: string[]) {
        const delta = Number(...args);
        await mouse.move(down(Number(...args)));
        
        const result = `Mouse was moved down to ${delta} px`;
        printResultMessage(cmd, args, result);
    },

    async mouseLeft(cmd: string, args: string[]) {
        const delta = Number(...args);
        await mouse.move(left(Number(...args)));
        
        const result = `Mouse was moved left to ${delta} px`;
        printResultMessage(cmd, args, result);
    },

    async mouseRight(cmd: string, args: string[]) {
        const delta = Number(...args);
        await mouse.move(right(Number(...args)));
        
        const result = `Mouse was moved right to ${delta} px`;
        printResultMessage(cmd, args, result);
    },

    async mousePosition(cmd: string, args: string[]) {
        const coordinates = await mouse.getPosition();
        const result = `Were got current mouse coordinates: ${coordinates.x}, ${coordinates.y}`;

        printResultMessage(cmd, args, result);
        return coordinates;
    }
}

export { Mouse, mouseCommands };
