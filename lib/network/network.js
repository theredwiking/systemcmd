import si from 'systeminformation'
import chalk from 'chalk';

export default function(command){
    for (let key in commands) {
        if (command === key) {
            commands[key]();
        }
    }
}

let commands = {
    all: function() {
        si.networkInterfaces().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    },
    default: function() {
        si.networkInterfaceDefault().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    },
    gateway: function() {
        si.networkGatewayDefault().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    },
    connections: function() {
        si.networkConnections().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    }
}