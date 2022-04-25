import { getService } from '../api';
import * as types from '../types';

const BASE_URL = 'https://kitsu.io/api/edge/anime/';


const filterParams = {
    category: 'filter[categories]',
    text: 'filter[text]'
}


export const getAnimes = async (params?: types.Params) => {
    if (params) {
        if (params.field === 'category') {
            const URL = `${BASE_URL}?${filterParams.category}=${params.value}`;
            console.log(URL);
    
            const response = await getService({url: URL});
    
            if(!response.data) {
                console.log('Error while fetching the data');
                return;
            }
        
            return response.data;
        }
    
        else if (params.field === 'search') {
            const URL = `${BASE_URL}?${filterParams.text}=${params.value}`;
    
            const response = await getService({url: URL});
    
            if(!response.data) {
                console.log('Error while fetching the data');
                return;
            }
        
            return response.data;
        }
    }

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