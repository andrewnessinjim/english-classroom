const bcrypt = require("bcrypt");
const { argv } = require("process");

const saltRounds = 10;
const password = argv[2];
const someOtherPlaintextPassword = 'not_bacon';

main();

async function main() {
    if(argv[3]) {
        console.log(`Comparing ${password} with ${argv[3]}`);
        console.log(`Comparison: ${await bcrypt.compare(password, argv[3])}`);
    } else {
        console.log(`Hashing: ${password}`)
        const hash = await bcrypt.hash(password, saltRounds);
        console.log(`Hash: ${hash}`);
    }
}