import Table from 'cli-table';
import { getService } from '../api/index';

const table = new Table({
    head: ['Key', 'Title', 'Subtitle', 'Place', 'Year'],
    colWidths: [15, 40, 15, 15, 10],
});

const detailsTable = new Table({
    head: ['Key', 'Title', 'Subjects', 'Description'],
    colWidths: [15, 40, 25, 40],
});


export const searchBook = async (title: string, author: string) => {

    if (author.trim() === "") {
        console.log('Please provide an author name');
        return;
    }

    const url = 'https://openlibrary.org/search.json';
    const params = { title, author };
    const response = await getService({ url, params });

    if (!response.numFound) {
        console.log('No books were found');
        return;
    }

    const data = response.docs.map(item => {
        return {
            key: item.key,
            title: item.title,
            subtitle: item.subtitle ? item.subtitle : '',
            place: item.place ? item.place[0] : '',
            firstPublishedYear: item.first_publish_year ? item.first_publish_year : '',
        }
    });

    data.map(item => {
        table.push([
            item.key.split('/').pop(),
            item.title,
            item.subtitle,
            item.place,
            item.firstPublishedYear,
        ])
    });

    console.log(table.toString());
};


export const getDetails = async (key: string) => {

    if (key.trim() === "") {
        console.log('Please provide a valid key');
        return;
    }

    const url = `https://openlibrary.org/works/${key}.json`;
    const response = await getService({ url });

    if (!response.key) {
        console.log('Something went wrong');
        return;
    }

    detailsTable.push([
        response.key.split('/').pop(),
        response.title, 
        response.subjects ? response.subjects.map(item => item) : '',
        response.description ? response.description : ''
    ])

    console.log(detailsTable.toString());
};