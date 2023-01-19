import { mouse, up, down, left, right } from "@nut-tree/nut-js";

enum Mouse {
    mouse_up = 'mouse_up',
    mouse_down = 'mouse_down',
    mouse_left = 'mouse_left',
    mouse_right = 'mouse_right',
    mouse_position = 'mouse_position'
}

const mouseController =  {
    async mouseUp(args: string[]) {
        await mouse.move(up(Number(...args)));
    },

    async mouseDown(args: string[]) {
        await mouse.move(down(Number(...args)));
    },

    async mouseLeft(args: string[]) {
        await mouse.move(left(Number(...args)));
    },

    async mouseRight(args: string[]) {
        await mouse.move(right(Number(...args)));
    },

    async mousePosition() {
        // const { x, y } = 
    
        return await mouse.getPosition();
    }
}

export { Mouse, mouseController };
