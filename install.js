const util = require('util');
const readline = require('readline');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const install = 'npm install -S'
const devInstall = 'npm install -D'

// const packages = dependencies + ' && ' + devDependencies + '&& exit';

async function run() {
    const string = await new Promise((res) => fs.readFile('data.json', {encoding: 'utf-8'}, (err, data) => res(data)));
    const { dependencies, devDependencies } = JSON.parse(string);
    
    const install = 'npm install -S ' + Object.keys(dependencies).join(' ');
    const installDev = 'npm install -D ' + Object.keys(devDependencies).join(' ');
    
    const z = install + ' && ' + installDev + '&& exit'; // ?

    
    // await new Promise((res) => fs.appendFile('new-file.bat', packages, () => res()));

    // await exec('start new-file.bat');

    console.log('DONE');
}

run();






// rl.question('Create Boilerplate? (y/n) ', async (answer) => {
//     if (answer.toLocaleLowerCase() === 'n') {
//         console.log('exiting');
//     } else if (answer.toLocaleLowerCase() === 'y') {
//         run();
//     }
//     rl.close();
// });





    
