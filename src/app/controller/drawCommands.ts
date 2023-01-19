import { mouse, left, right, up, down, straightTo, Button, Point } from "@nut-tree/nut-js";

enum Draw {
    draw_circle = 'draw_circle',
    draw_rectangle = 'draw_rectangle',
    draw_square = 'draw_square',
}

const x = 100;
const y = 100;

const drawCommands = {
    async drawCircle(args: string[]) {
        //
    },

    async drawRectangle(args: string[]) {
        //
    },

    async drawSquare(args: string[]) {
        //
    },
};

export { Draw, drawCommands };
