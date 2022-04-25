import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addNote, getNotes, removeNote } from './notes.js';

yargs(hideBin(process.argv))
  .command({
      command: 'add', 
      describe: 'Add a note',
      builder: {
          title: {
              describe: 'Note title',
              demandOption: true,
              type: 'string'
          },
          body: {
              describe: 'Note body',
              demandOption: true,
              type: 'string'
          }
      },
      handler: (argv) => {
          addNote(argv.title, argv.body);
      }
  })
  .command({
      command: 'get', 
      describe: 'Get all notes',
      handler: () => {
          getNotes();
      }
  })
  .command({
      command: 'remove', 
      describe: 'Remove note by title',
      builder: {
          title: {
              describe: 'Note title',
              demandOption: true,
              type: 'string'
          }
      },
      handler: (argv) => {
          console.log(removeNote(argv.title));
      }
  })  
  .parse()
