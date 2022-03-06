import Table from 'cli-table';
import { getService } from '../api/index';

const table = new Table({
    head: ['Key', 'Title', 'Subtitle', 'Place', 'Year'],
    colWidths: [15, 40, 15, 15, 10],
});

const detailsTable = new Table({
    head: ['Key', 'Title', 'Description', 'Subjects'],
    colWidths: [15, 40, 15, 15, 10],
});


export const searchBook = async (title: string, author: string) => {
    const url = 'https://openlibrary.org/search.json';
    const params = { title, author };

    const response = await getService({ url, params });

    if (!response.numFound) {
        return (console.log('No books were found'));
    }

    const data = response.docs.map(item => {
        return {
            key: item.key,
            title: item.title,
            authorKey: item.author_key[0],
            authorName: item.author_name[0],
            firstPublishedYear: item.first_publish_year,
        }
    });

    data.map(item => {
        table.push([
            item.key.split('/').pop(),
            item.title,
            item.authorName,
            item.authorKey,
            // item.firstPublishedYear,
        ])
    });

    console.log(table.toString());
};


export const getDetails = async (key: string) => {
    const url = `https://openlibrary.org/works/${key}.json`;

    const response = await getService({ url });

    detailsTable.push([
        response.key.split('/').pop(),
        response.title, 
        response.description,
        response.subject
    ])

    console.log(response);
};