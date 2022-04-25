import si from 'systeminformation';
import chalk from 'chalk';

let cpu;
si.cpu().then(data => cpu = data).catch(err => console.error(chalk.red(err)));

export default function(command){
    for (let key in commands) {
        if (command === key) {
            commands[key]();
        }
    }
}

let commands = {
    all: function() {
        console.info(cpu);
    },
    cores: function() {
        let cores = {processors: '', cores: '', physicalCores: ''};
        cores.processors = cpu.processors;
        cores.cores = cpu.cores;
        cores.physicalCores = cpu.physicalCores;
        console.info(cores);
    },
    temp: function() {
        si.cpuTemperature().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    },
    speed: function() {
        si.cpuCurrentSpeed().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
    }
}