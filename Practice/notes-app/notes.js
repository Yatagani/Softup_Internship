import fs from 'fs';
import chalk from 'chalk';

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

debugger

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

export const getNotes = () => {
    const notes = loadNotes();
    notes.map((item) => {
        console.log(item.title, item.body);
    })
};

export const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((item) => {
        return item.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("Note added sucessfully");
    } else {
        console.log("Note already exist!");
    }
};

export const removeNote = (title) => {
    const notes = loadNotes();
    const removedNote = notes.find((item) => item.title === title);

    if (!removedNote) {
        return(chalk.red.inverse('Note does not exist!'));
    };

    const filteredNotes = notes.filter((item) => item.title !== title);
    saveNotes(filteredNotes);

    const msg = `${removedNote.title} removed sucessfully`;

    return(chalk.green.inverse(msg));
}

