const { program } = require('commander');
const { set , show , remove  }  = require('../commands/key.cjs');
program.command('set').description('set API Key -- Get at https://nomics.com')
    .action(async () => await set());

program.command('show').description('Show API Key')
    .action(async () => await show());

program.command('remove').description('Remove API Key')
    .action(async () => await remove());



program.parse(process.argv);
