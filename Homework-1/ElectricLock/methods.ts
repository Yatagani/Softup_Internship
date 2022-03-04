import { loadCards, saveCards, cardType, handleID } from './utils'
import chalk from 'chalk';

var Table = require('cli-table');

var table = new Table({
    head: ['ID', 'Employee', 'Authorized'],
    colWidths: [5, 20, 15]
});


export const getCards = () => {
    const cards: cardType[] = loadCards();
    if (cards.length === 0) {
        console.log(chalk.blue.inverse('List is empty'));
        return;
    }
    cards.map((item: cardType) => {
        table.push([item.id, item.employee, item.authorized]);
    })
    console.log(table.toString());
};


export const addCard = (employee: string, authorized: boolean) => {
    const cards: cardType[] = loadCards();
    const newID = handleID(cards);

    const duplicatedCards = cards.filter((item) => item.employee === employee);

    if (employee.trim() === "") {
        console.log(chalk.magenta.inverse("Please provide a valid name!"));
        return;
    }
    if (duplicatedCards.length === 0) {
        console.log(chalk.red.inverse("Employee already exist!"));
        return;
    }

    cards.push({
        id: newID.toString(),
        employee: employee,
        authorized: authorized,
    });

    saveCards(cards);
    table.push([newID, employee, authorized]);

    console.log(table.toString());
};


export const deleteCard = (id: string) => {
    const cards: cardType[] = loadCards();
    const removedCard = cards.find((item) => item.id === id);

    if (!removedCard) {
        console.log(chalk.red.inverse('Card does not exist!'));
        return;
    };

    const filteredCards = cards.filter((item) => item.id !== id);
    saveCards(filteredCards);

    const msg = `${removedCard.employee} removed sucessfully`;
    console.log(chalk.green.inverse(msg));
};


export const updateCard = (id: string, authorize: boolean) => {
    const cards: cardType[] = loadCards();

    const updatedIndex = cards.findIndex((item) => item.id === id);

    if (updatedIndex === -1) {
        console.log(chalk.red.inverse('Card does not exist!'));
        return;
    }
    
    Object.assign(cards[updatedIndex], {authorized: authorize});
    saveCards(cards);

};


export const checkCard = (id: string) => {
    const cards: cardType[] = loadCards();
    const card = cards.find((item) => item.id === id);

    if (!card) {
        console.log(chalk.red.inverse('Card does not exist!'));
        return;
    }

    card.authorized
        ? console.log(chalk.green.inverse(`${card.employee} is authorized`))
        : console.log(chalk.magenta.inverse(`${card.employee} is not authorized`))
};