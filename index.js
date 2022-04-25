#!/usr/bin/env node
import {aksCommand, commandList} from './lib/commandsUtil.js';
import network from './lib/network/network.js';
import memory from './lib/memory/memory.js';
import audio from './lib/audio/audio.js';
import wifi from './lib/wifi/wifi.js';
import usb from './lib/usb/usb.js';
import cpu from './lib/cpu/cpu.js';
import os from './lib/os/os.js';
import chalk from 'chalk';
import fs from 'fs';

const usageText = fs.readFileSync('./lib/help.txt').toString();

function commands(command) {
    switch(command) {
        case 'help':
            console.info(chalk.bold.green(usageText));
        break;
        case 'cpu':
            commandList('CPU info', ['all', 'cores', 'temp', 'speed'], answers => cpu(answers.commands));
        break;
        case 'memory':
            commandList('Memory info', ['all', 'used'], answers => memory(answers.commands));
        break;
        case 'os':
            commandList('OS info', ['all', 'shell', 'users'], answers => os(answers.commands));
        break;
        case 'usb':
            usb();
        break;
        case 'audio':
            audio();
        break;
        case 'network':
            commandList('OS info', ['all', 'default', 'gateway', 'connections'], answers => network(answers.commands));
        break;
        case 'wifi':
           wifi();
        break;
        case 'exit':
            console.info('Goodbye');
            process.exit(1);
        break;
    }
}

aksCommand('Type in a command', 'help', answers => commands(answers.command));