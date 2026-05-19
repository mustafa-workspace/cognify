"use client"; 
import { useEffect } from "react"; 
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { getRelativeTime } from "@/lib/date";
import { Button } from "@/components/ui/button";
import HighlightFeed from "@/features/highlight/components/highlight-feed";
import useFeedStore from "@/store/FeedStore"; 

export const Feed = () => {
    
    const { items , loading, error, fetchFeeds } = useFeedStore();

    useEffect(() => {
        fetchFeeds();
    }, [fetchFeeds]);

    if (loading) return <div>Loading....</div>;
    if (error) return <div>Wating.... {error} ❌</div>;

    return (
        <div className="card">
            {items?.map((feed: any) => (
                <div key={feed.id}>
                    <div className="userinfo">
                        <div className="user-avatar">
                            <Image
                                src={'http://localhost:1337' + feed?.userinfo?.avatarImg?.url}
                                alt={'the image profile'}
                                width={500}
                                height={500}
                                unoptimized
                            />
                        </div>
                        <div className="content-user">
                            <h2 className="username">{feed.userinfo.username}</h2>
                            <div className="info-user">
                                <div className="inbox">
                                    <span>{feed.userinfo.userTitle}</span>
                                    <span>.</span>
                                    <span>{getRelativeTime(feed.publishedAt)}</span>
                                </div>
                                <Button className="cursor-pointer bg-transparent hover:bg-transparent border-black rounded-full">
                                    <span className="Bookmark-icon"><Bookmark className="text-black" /></span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <h1>{feed.title}</h1>
                    <div className="categories-feed">
                        <ul>
                            {feed.tags?.map((tag: any) => (
                                <li key={`${tag.id}`}>{tag?.titleTag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="description-feed">
                        <p>{feed.excerpt}</p>
                    </div>
                    <div className="actionable-feed d-flex flex item-center justify">
                        <HighlightFeed id={feed.id} />
                        <div className="actionable-right">
                            <div className="cursor-pointer">
                                <div>Read Insight</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};