const { program } = require('commander');
const set  = require('../commands/key.cjs');
program.command('set').description('set API Key -- Get at https://nomics.com')
    .action(async () => await set());
/*
program.command('show').description('Show API Key')
    .action(key.show);
program.command('remove').description('Remove API Key')
    .action(key.remove);
*/



program.parse(process.argv);
