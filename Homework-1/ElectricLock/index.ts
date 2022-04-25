import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as methods from './methods';

yargs(hideBin(process.argv))
    .command({
        command: 'get', 
        describe: 'Get existing cards',
        handler: () => {
            methods.getCards();
        }
    })
    .command({
        command: 'add', 
        describe: 'Add a new card',
        builder: {
            employee: {
                describe: 'Employee name',
                demandOption: true,
                type: 'string'
            },
            authorize: {
                describe: 'Authorization status',
                type: 'boolean',
                default: true
            }
        },
        handler: (argv) => {
            methods.addCard(argv.employee as string, argv.authorize as boolean);
        }
    })
    .command({
        command: 'delete', 
        describe: 'Delete card completely',
        builder: {
            id: {
                describe: 'Card ID',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            methods.deleteCard(argv.id as string);
        }
    })  
    .command({
        command: 'update', 
        describe: 'Update authorization status',
        builder: {
            id: {
                describe: 'Card ID',
                demandOption: true,
                type: 'string'
            },
            authorize: {
                describe: 'Authorization status',
                demandOption: true,
                type: 'boolean'
            },
        },
        handler: (argv) => {
            methods.updateCard(argv.id as string, argv.authorize as boolean);
        }
    })  
    .command({
        command: 'check', 
        describe: 'Check authorization status',
        builder: {
            id: {
                describe: 'Card ID',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            methods.checkCard(argv.id as string);
        }
    })  
    .parse()
