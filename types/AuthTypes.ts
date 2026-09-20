export type ApiResponse  = {
    jwt: string;
    user:User 
}

export type UserInfo = {
    id?: number;
    username?: string;
    userTitle?: string;
    location?: string;
    bio?: string;
    avatarImg?: string | {
        url?: string;
        data?: {
            attributes?: {
                url?: string;
            };
            url?: string;
        };
    };
    [key: string]: any;
};

export type User = {
    id: number;
    documentId?: string;
    username: string;
    email: string;
    userTitle?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    bio?: string;
    location?: string;
    avatarImg?: string | any;
    avatar?: string | any;
    userinfo?: UserInfo;
}