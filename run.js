const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

const appUtil = require('./app-util');
const copyFiles = require('./copy').copyFiles;

// RUN:
! async function() {
    const projectName = await appUtil.askProjectName();
    fs.mkdirSync(`../${projectName}`);

    const data = JSON.parse(fs.readFileSync(`./data.json`, { encoding: 'utf-8' }));
    data.name = projectName;

    const readme = 
    `# ${appUtil.toCapName(projectName)}`
    + '\n\nThe project can be viewed here:'
    + '\n\n<!-- [View The Page](fix-me) -->'
    + '\n\n### Goals:'
    + '\n<!-- * Do something -->'

    const git = 'git init && git add -A && git commit -m "Initial commit"'

    console.log('\n### Creating Files ###');
    fs.appendFileSync(`../${projectName}/package.json`, JSON.stringify(data));
    fs.appendFileSync(`../${projectName}/README.md`, readme);
    fs.appendFileSync(`../${projectName}/install.bat`, `npm install && ${git} && code . && exit`);//  
    copyFiles('./copy-files', `../${projectName}`);

    console.log('\n### Installing NPM Packages ###');
    await exec(`cd ../${projectName} && start install.bat`);
    fs.unlinkSync(`../${projectName}/install.bat`);

    console.log(`\n### Project "${appUtil.toCapName(projectName)}" Created ###`);
    console.log('\n### Run the project with "npm start"\n');
    process.exit(0);
}();
