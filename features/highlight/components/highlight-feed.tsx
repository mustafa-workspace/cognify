"use client";
import { useEffect, useState } from "react";
import getHighFeed from "../services/get-high-feed";
import Dots from "@/components/shared/loading/loading";

export default function HighlightFeed({ id }: { id: number }) {
    const [highFeed, setHighFeed] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHighFeed(id).then(data => {
            setHighFeed(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="actionable-left"><Dots/></div>;

    return (
        <div className="actionable-left">
            <div className="cursor-pointer ">
                <span className="Bookmark-icon">
                  {highFeed?.data?.length ?? 0}  HIGHLIGHT</span>
            </div>
        </div>
    );
}






