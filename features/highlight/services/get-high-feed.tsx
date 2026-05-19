import axios from "axios";

export default async function getHighFeed(id: number) {
    const Api_Url = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:1337';
    try {
        const res = await axios.get(`${Api_Url}/api/highlights?filters[articleID][id][$eq]=${id}`)
        return res.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}