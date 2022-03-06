import axios from 'axios';

type ConfigParams = {
    title?: string,
    author?: string,
    key?: string,
};

type ConfigType = {
    url: string,
    params?: ConfigParams,
};

type BookInfo = {
    key: string,
    title: string, 
    first_publish_year: string, 
    author_name: string[],
    author_key?: string[]
};

type BookType = {
    numFound: number, 
    docs: BookInfo[],
    key?: string,
    title?: string, 
    description?: string,
    subject?: string[],
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
        console.log(error.toString());
    }
}