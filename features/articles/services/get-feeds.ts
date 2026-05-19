import axios from 'axios';

export default async function getFeeds() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    try {
        const res = await axios.get(`${API_URL}/api/articles?populate[tags][populate]=*&populate[userinfo][populate]*=avatarImg&sort=createdAt:desc&limit=5`);
        return res.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

