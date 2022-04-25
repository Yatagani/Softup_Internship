export type ParamsConfig = {
    id?: string
};

export type QueryConfig = {
    url: string,
    params?: ParamsConfig,
};

export type AnimeCard = {
    id: string;
    title: string,
    image?: string,
    category?: string[],
    description?: string,
    data?: unknown,
};

export type AnimeDetails = {
    data: {
        title: string,
        posterImage: string,
        coverImage: string,
        description: string
    }
};

type Error = {
    title?: string,
    detail?: string
};

export type AnimeAPI = {
    data: AnimeCard[] | [],
    meta?: {
        count?: string
    }
    links?: {
        first?: string,
        next?: string,
    }
    errors?: Error[],
}
