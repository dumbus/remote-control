import { readFile, unlink } from "node:fs/promises";
import { mouse, screen, Region } from "@nut-tree/nut-js";

enum Screenshot {
    prnt_scrn = 'prnt_scrn'
}

const printScreenCommand = async () => {
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

        const filename = await screen.captureRegion('screenshot.png', region);
        const imageData = await readFile(filename, 'base64');
        await unlink(filename);

        return imageData;
    } catch {
        console.log('Something went wrong during prnt_scrn command');
    }
};

export { Screenshot, printScreenCommand };
