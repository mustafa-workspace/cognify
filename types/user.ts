interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'editor' | 'viewer';
    createdAt: Date;
    updatedAt: Date;
}