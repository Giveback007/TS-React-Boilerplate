const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (q) => new Promise((res) => rl.question(q, (answer) => { res(answer); rl.close(); }));

// COPY
// fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));
// COPY

const testName = (input) => /^[a-z0-9_-]+$/.test(input);
const toCapName = (str) => str.replace(/_-/g, " ").split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

async function askProjectName() {
    const name = await question('Project name? (valid folder name, lowercase, and no spaces) ');

    if (!testName(name)) {
        console.log(`Invalid project name: "${name}"`);
        process.exit(1);
    } else return name
}

async function run() {
    const projectName = await askProjectName();
    fs.mkdirSync(`../${projectName}`);

    const data = JSON.parse(fs.readFileSync(`./data.json`, { encoding: 'utf-8' }));
    data.name = projectName;

    const readme = 
        `# ${toCapName(projectName)}

        The project can be viewed here:

        [Link-To-Live-Project](https://)

        ### Goals:
        * Do something`

    console.log('### Creating Files ###');
    fs.appendFileSync(`../${projectName}/package.json`, JSON.stringify(data));
    fs.appendFileSync(`../${projectName}/README.md`, readme);
    fs.appendFileSync(`../${projectName}/install.bat`, 'npm install && exit');

    console.log('### Installing NPM Packages ###');
    await exec(`cd ../${projectName} && start install.bat`);
    fs.unlinkSync(`../${projectName}/install.bat`);

    console.log('DONE');
}

run();


// fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));

// fs.readdirSync('./files') //?