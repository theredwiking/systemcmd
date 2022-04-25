import si from 'systeminformation';
import chalk from 'chalk';

let memory;
si.mem().then(data => memory = data).catch(err => console.error(chalk.red(err)));


export default function(command){
    for (let key in commands) {
        if (command === key) {
            commands[key]();
        }
    }
}

function toGb(bytes) {
    return (bytes/1073741824).toFixed(2);
}

let commands = {
    all: function() {
        console.info(memory);
    },
    used: function() {
        let percentage = ((100 * memory.active) / memory.total).toFixed(2)
        console.info(`Used: ${toGb(memory.active)} of: ${toGb(memory.total)} = ${percentage}`);
    },
}