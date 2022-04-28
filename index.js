#!/usr/bin/env node
import {aksCommand, commandList} from './lib/commandsUtil.js';
import network from './lib/network/network.js';
import memory from './lib/memory/memory.js';
import audio from './lib/audio/audio.js';
import wifi from './lib/wifi/wifi.js';
import usb from './lib/usb/usb.js';
import cpu from './lib/cpu/cpu.js';
import os from './lib/os/os.js';
import process from 'process';
import chalk from 'chalk';

const usageText = `learncmd gets systeminformation using nodejs.

  commands can be:

  help:       used to display all commands
  cpu:        used to retrieve cpu information
  memory:     used to retrieve memory information
  users:      used to retrieve users information
  os:         used to retrieve OS information
  usb:        used to retrieve USB information
  audio:      used to retrieve audio information
  network:    used to retrieve network information
  wifi:       used to retrieve wifi information
  exit:       used to exit the programpostcode
`

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

process.on('beforeExit', code => {
    aksCommand('Type in a command', 'help', answers => commands(answers.command));
});