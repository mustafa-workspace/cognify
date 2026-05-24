import axios from "axios";

export default async function getFullArticle({id}: {id: string}) {
        const Path = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';    
    try {
        const res = await axios.get(`${Path}/api/articles/${id}?populate=*`);
        return res.data;
    } catch (error) {
        console.error("Error fetching article:", error);
        throw error;
    }
}