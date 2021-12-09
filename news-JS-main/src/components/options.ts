export type NewsT = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type SourceT = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export interface NewsI {
    status: string;
    totalResults: string;
    articles: NewsT[];
}

export interface SourceI {
    status: string;
    sources: SourceT[];
}

export interface DataI {
    articles: NewsT[];
    sources: SourceT[];
}

export type ForPickOnly = Pick<DataI, 'sources'>;

export type CallbackType<T> = (data?: T) => void;
