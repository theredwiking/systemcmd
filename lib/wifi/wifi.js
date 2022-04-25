import si from 'systeminformation'
import chalk from 'chalk';

export default function(){
    si.wifiNetworks().then(data => console.info(data)).catch(err => console.error(chalk.red(err)));
}