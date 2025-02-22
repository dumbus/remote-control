import Jimp from 'jimp/es';
import { mouse, screen, Region } from "@nut-tree/nut-js";

import { printResultMessage } from '../utils/printResultMessage';

enum Screenshot {
    prnt_scrn = 'prnt_scrn'
}

const printScreenCommand = async (cmd: string, args: string[]) => {
    const side = 200;
    const center = await mouse.getPosition();

    try {
        const region = new Region(Math.max(0, center.x - side / 2), Math.max(0, center.y - side / 2), side, side);
        
        const sw = await screen.width();
        if (region.left + region.width > sw) {
            region.left = sw - region.width;
        }

        const sh = await screen.height();
        if (region.top + region.height > sh) {
            region.top = sh - region.height;
        }

        const imageObject = await (await screen.grabRegion(region)).toRGB();
        const jimpObject = new Jimp(imageObject);
        const pngBuffer = await jimpObject.getBufferAsync(Jimp.MIME_PNG);
        const imageData = pngBuffer.toString('base64');

        const result = `Screenshot was made`;
        printResultMessage(cmd, args, result);
        
        return imageData;
    } catch {
        console.log('Something went wrong during prnt_scrn command');
    }
};

export { Screenshot, printScreenCommand };
