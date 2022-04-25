import inquirer from 'inquirer';
import chalk from 'chalk';

export function aksCommand(msg, dflt, callback) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'command',
            message: msg,
            default: dflt,
        },
    ]).then(answers => {
        callback(answers);
    }).catch(err => 
        console.error(chalk.red(err))
    )
}

export function commandList(msg, choices, callback) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'commands',
            message: msg,
            choices: choices
        },
    ]).then(answers => {
        callback(answers);
    }).catch(err => 
        console.error(chalk.red(err))
    )
}

export default aksCommand