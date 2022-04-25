import si from 'systeminformation';
import chalk from 'chalk';

export default function(){
    si.usb().then(data => console.info(data)).catch(err => console.error(chalk.bold.red(err)));
}