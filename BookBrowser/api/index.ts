import axios from 'axios';

type ConfigParams = {
    title?: string,
    author?: string,
    key?: string,
    page?: string,
};

type ConfigType = {
    url: string,
    params?: ConfigParams,
};

type BookInfo = {
    key: string,
    title?: string,
    subtitle?: string,
    first_publish_year?: number, 
    author_name?: string[],
    author_key?: string[],
    publish_place?: string[]
    place: string[],
};

type BookType = {
    numFound: number, 
    docs: BookInfo[],
    key?: string,
    title?: string, 
    subtitle?: string,
    description?: string,
    subjects?: string[],
};


export const getService = async (config: ConfigType): Promise<BookType> => {
    console.log('Loading data...')
    try {
        const response = await axios({
            method: 'GET',
            url: config.url,
            params: config.params,
        })

        return response.data;
    } catch (error) {
        return error.toString()
    }
}