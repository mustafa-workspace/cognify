"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { getRelativeTime } from "@/lib/date";
import HighlightFeed from "@/features/highlight/components/highlight-feed";
import useFeedStore from "@/store/FeedStore";
import Link from "next/link";
import Dots from "@/components/shared/loading/loading";

export const Feed = () => {
    const { items, loading, error, fetchFeeds } = useFeedStore();

    useEffect(() => {
        fetchFeeds();
    }, [fetchFeeds]);

    if (loading) return <Dots />;
    if (error) return <div>Wating.... {error} ❌</div>;

    return (
        <div className="w-auto max-w-2xl mx-auto px-4 py-6 inline-block">
            {items?.map((feed: any) => (
                <div
                    key={feed.id}
                    className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 mb-6 transition-all duration-200"
                >
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                            {/* User Avatar */}
                            <div className="relative flex-shrink-0 w-11 h-11">
                                <Image
                                    src={'http://localhost:1337' + feed?.userinfo?.avatarImg?.url}
                                    alt={feed.userinfo.username || 'Profile'}
                                    width={44}
                                    height={44}
                                    unoptimized
                                    loading="lazy"
                                    className="rounded-full object-cover"
                                />
                            </div>

                            {/* User Meta */}
                            <div className="flex flex-col">
                                <h2 className="text-slate-800 font-semibold text-[15px] leading-tight">
                                    {feed.userinfo.username}
                                </h2>
                                <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mt-0.5 flex items-center gap-1.5">
                                    <span>{feed.userinfo.userTitle}</span>
                                    <span className="text-[8px] text-slate-300">•</span>
                                    <span>{getRelativeTime(feed.publishedAt)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bookmark Action */}
                        <button className="p-2.5 text-slate-400 hover:text-slate-800 transition-colors border border-gray-100 rounded-full bg-slate-50/50 hover:bg-slate-50">
                            <Bookmark className="w-[18px] h-[18px]" strokeWidth={1.8} />
                        </button>
                    </div>

                    {/* Feed Title */}
                    <h1 className="text-2xl md:text-[28px] font-bold text-slate-800 tracking-tight leading-[1.25] mb-4">
                        {feed.title}
                    </h1>

                    {/* Tags / Categories */}
                    {feed.tags && feed.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {feed.tags.map((tag: any) => (
                                <span
                                    key={tag.id}
                                    className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-slate-50 text-slate-500 border border-slate-100/50"
                                /* Tip: If your API provides custom tag colors, you can map them here */
                                >
                                    {tag?.titleTag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Excerpt / Description */}
                    <div className="text-slate-400 text-[15px] leading-relaxed mb-6 font-normal">
                        <p className="line-clamp-3">{feed.excerpt}</p>
                    </div>

                    {/* Footer Action Bar */}
                    <div className="flex items-center justify-between border-t border-gray-50 pt-5 mt-2">
                        {/* Left Action (e.g., Highlights Counter) */}
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            <HighlightFeed id={feed.id} />
                        </div>

                        {/* Right Action (Read Link) */}
                        <div>
                            <Link
                                href={`/article/${feed.slug}/${feed.documentId}`}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors group"
                            >
                                Read Insight

                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};