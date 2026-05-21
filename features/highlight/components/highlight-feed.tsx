"use client";
import { useEffect, useState } from "react";
import getHighFeed from "../services/get-high-feed";

export default function HighlightFeed({ id }: { id: number }) {
    const [highFeed, setHighFeed] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHighFeed(id).then(data => {
            setHighFeed(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="actionable-left">Loading...</div>;

    return (
        <div className="actionable-left">
            <div className="cursor-pointer ">
                <span className="Bookmark-icon">
                  {highFeed?.data?.length ?? 0}  HIGHLIGHT</span>
            </div>
        </div>
    );
}






