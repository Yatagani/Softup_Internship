import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import * as methods from './methods/index';

yargs(hideBin(process.argv))
    .command({
        command: 'search', 
        describe: 'Search books by title and author',
        builder: {
            title: {
                describe: 'Book title',
                demandOption: false,
                type: 'string'
            },
            author: {
                describe: 'Book author',
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => {
            methods.searchBook(argv.title as string, argv.author as string);
        }
    })
    .command({
        command: 'details', 
        describe: 'Get book details',
        builder: {
            key: {
                describe: 'Work ID',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            methods.getDetails(argv.key as string);
        }
    })
    .alias('t', 'title')
    .alias('a', 'author')
    .alias('k', 'key')
    .parse();