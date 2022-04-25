import si from 'systeminformation'
import chalk from 'chalk';

let osInfo;
let uuid;
si.uuid().then(data => uuid = data).catch(err => console.error(chalk.red(err)));
si.osInfo().then(data => osInfo = data).catch(err => console.error(chalk.red(err)));

export default function(command){
    for (let key in commands) {
        if (command === key) {
            commands[key]();
        }
    }
}

let commands = {
    all: function() {
        for(let x in uuid) {
            osInfo[x] = uuid[x];
        }

        console.info(osInfo);
    },
    shell: function() {
        si.shell().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    },
    users: function() {
        si.users().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    }
}