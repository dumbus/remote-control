const printResultMessage = (cmd: string, args: string[], message: string) => {
    console.log(`Received command: ${cmd} ${args}, Result: ${message}`);
};

export { printResultMessage };
