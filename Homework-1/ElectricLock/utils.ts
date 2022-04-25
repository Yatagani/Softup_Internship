import * as fs from 'fs';

export type cardType = {
    id: string, 
    employee: string, 
    authorized: boolean,
};

export const loadCards = () => {
    try {
        const dataBuffer = fs.readFileSync('cards.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

export const saveCards = (cards: cardType[]) => {
    const dataJSON = JSON.stringify(cards);
    fs.writeFileSync('cards.json', dataJSON);
};

export const handleID = (data: cardType[]) => {
    if (data.length === 0) {
        return 1;
    };

    const lastCard = data.slice(-1)[0];
    const lastID = Number(lastCard.id);

    return lastID + 1;
}