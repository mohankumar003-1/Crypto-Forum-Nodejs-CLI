const { program } = require('commander');

const price  = require('../commands/check.cjs');
program.command('price')
        .description('check the price of coins')
        .option(
            '--coin <type> ',
            'Add Specific coins in CSV Format',
            'BTC,ETH,XRP'
        )
        .option('--cur <currency>','Change the currency','USD')
        .action( cmd => price(cmd));
program.parse(process.argv)
