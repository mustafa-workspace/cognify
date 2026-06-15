type Article = {
    id: number;
    title: string;
    slug: string;
    abstract: string;
    coverImage: string;
    createdAt: string;
    author: {
        name: string;
        avatar: string;
    };
    tags: {
        name: string;
    }[];
};

interface ParamsArticlePage {
    slug: string;
    id: number;
}
