import axios from 'axios';
import * as types from '../types';

export const getService = async (config: types.QueryConfig): Promise<types.AnimeAPI> => {
    try {
        const response = await axios({
            method: 'GET',
            url: config.url,
            params: config.params,
        });

        return response.data;
    } catch (error) {
        return error.toString()
    }
}