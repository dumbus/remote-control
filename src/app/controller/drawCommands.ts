import { mouse, straightTo, Button, Point } from "@nut-tree/nut-js";

enum Draw {
    draw_circle = 'draw_circle',
    draw_rectangle = 'draw_rectangle',
    draw_square = 'draw_square',
}

const drawCommands = {
    async drawCircle(args: string[]) {
        const radius = Number(...args);
        const startCoordinates = await mouse.getPosition();
        const centerCoordinates = new Point(startCoordinates.x, startCoordinates.y + radius);
        const step = 1 / radius;

        await mouse.pressButton(Button.LEFT);

        for (let radian = 0; radian <= Math.PI * 2; radian += step) {
            const x = radius * Math.sin(radian);
            const y = radius * Math.cos(radian);

            const newPoint = new Point(centerCoordinates.x + x, centerCoordinates.y - y);

            await mouse.move(straightTo(newPoint));
        }
      
        await mouse.releaseButton(Button.LEFT);
    },

    async drawRectangle(args: string[]) {
        const [ arg1, arg2 ] = args;
        const width = Number(arg1);
        const length = Number(arg2);
        
        const leftTopPoint = await mouse.getPosition();
        const rightTopPoint = new Point(leftTopPoint.x + width, leftTopPoint.y);
        const rightBottomPoint = new Point(rightTopPoint.x, rightTopPoint.y + length);
        const leftBottomPoint = new Point(rightBottomPoint.x - width, rightBottomPoint.y);

        const points = [
            rightTopPoint,
            rightBottomPoint,
            leftBottomPoint,
            leftTopPoint
        ];

        for (let i = 0; i < points.length; i++) {
            await mouse.pressButton(Button.LEFT);
            await mouse.move(straightTo(points[i]));
            await mouse.releaseButton(Button.LEFT);
        }
    },

    async drawSquare(args: string[]) {
        const [ side ] = args;

        await this.drawRectangle([side, side]);
    },
};

export { Draw, drawCommands };
