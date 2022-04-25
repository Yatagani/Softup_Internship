import { getService } from '../api';

const BASE_URL = 'https://kitsu.io/api/edge/anime/';

export const getAnimes = async () => {
    const response = await getService({url: BASE_URL});

    if(!response.data) {
        console.log('Error while fetching the data');
        return;
    }

    return response.data;
};

export const getAnime = async (id: string) => {
    const url = BASE_URL + id;
    const response = await getService({ url });

    if(!response.data) {
        console.log('Error while fetching the data');
        return;
    }

    return response.data;
};