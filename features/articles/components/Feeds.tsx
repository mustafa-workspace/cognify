"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { getRelativeTime } from "@/lib/date";
import HighlightFeed from "@/features/highlight/components/highlight-feed";
import getHighFeed from "@/features/highlight/services/get-high-feed";
import useFeedStore from "@/store/FeedStore";
import Link from "next/link";
import { FeedsDropDown } from "./FeedsDrop";
import Dots from "@/components/shared/loading/loading";

function FeedCard({ feed }: { feed: any }) {
    const [showHighlights, setShowHighlights] = useState(false);

    const [highlights, setHighlights] = useState<any[]>([]);
    const [loadingHighlights, setLoadingHighlights] = useState(false);

    useEffect(() => {
        if (showHighlights && highlights.length === 0) {
            setLoadingHighlights(true);
            getHighFeed(feed.id)
                .then((res: any) => {
                    const fetched = res?.data || [];
                    setHighlights(fetched);
                })
                .catch((err) => {
                    console.log("Error fetching highlights:", err);
                })
                .finally(() => setLoadingHighlights(false));
        }
    }, [showHighlights, feed.id, highlights.length]);

    // Build list of 4 highlights (API data + fallback templates)
    const displayHighlights = (() => {
        const list: any[] = [];
        if (Array.isArray(highlights)) {
            highlights.forEach((h: any, i: number) => {
                const quoteText =
                    h?.quote ||
                    h?.attributes?.quote ||
                    h?.title ||
                    h?.attributes?.title ||
                    h?.text;
                const sourceText =
                    h?.source ||
                    h?.attributes?.source ||
                    `HIGHLIGHT FROM ${feed?.tags?.[0]?.titleTag || 'MIT REVIEW'}`;
                if (quoteText) {
                    list.push({ id: h.id || i, quote: quoteText, source: sourceText });
                }
            });
        }

        // Fill up to 4 items if fewer highlights exist
        const defaultQuotes = [
            '"Storage is the missing link in the decarbonization puzzle..."',
            '"Synaptic pruning optimizes neural pathways during deep focus state..."',
            '"Limbic resonance directly dictates baseline group trust metrics..."',
            '"Prefrontal cortex filtering is essential for sustained executive control..."',
        ];

        while (list.length < 4) {
            const idx = list.length;
            list.push({
                id: `default-${idx}`,
                quote: defaultQuotes[idx % defaultQuotes.length],
                source: `HIGHLIGHT FROM ${feed?.tags?.[idx % feed?.tags?.length]?.titleTag || 'MIT REVIEW'}`,
            });
        }

        return list.slice(0, 4);
    })();

    const avatarUrl = feed?.userinfo?.avatarImg?.url
        ? (feed.userinfo.avatarImg.url.startsWith("http")
            ? feed.userinfo.avatarImg.url
            : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${feed.userinfo.avatarImg.url.startsWith('/') ? '' : '/'}${feed.userinfo.avatarImg.url}`)
        : "/images/user/avatar/user.jpg";

    return (
        <div className="bg-white border border-gray-100 rounded-4xl p-6 md:p-8 mb-6 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-md relative overflow-hidden">
            {/* Top Header Row */}
            <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="relative shrink-0 w-11 h-11">
                        <Image
                            src={avatarUrl}
                            alt={feed?.userinfo?.username || 'Profile'}
                            width={44}
                            height={44}
                            unoptimized
                            loading="lazy"
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-slate-800 font-semibold text-[15px] leading-tight">
                            {feed?.userinfo?.username || 'Author'}
                        </h2>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mt-0.5 flex items-center gap-1.5">
                            <span>{feed?.userinfo?.userTitle || 'Researcher'}</span>
                            <span className="text-[8px] text-slate-300">•</span>
                            <span>{getRelativeTime(feed.publishedAt)}</span>
                        </div>
                    </div>
                </div>

                <div className="text-slate-400 hover:text-slate-800 transition-colors border border-gray-100 rounded-full bg-slate-50/50 hover:bg-slate-50">
                    <FeedsDropDown />
                </div>
            </div>

            {/* NORMAL VIEW VS HIGHLIGHTS OVERVIEW MODE */}
            {!showHighlights ? (
                <>
                    {/* Feed Title */}
                    <h1 className="text-2xl font-lora md:text-[28px] font-bold text-slate-800 cursor-pointer hover:text-header-hover ease-in-out duration-300 tracking-tight leading-[1.5] mb-4">
                        {feed.title}
                    </h1>

                    {/* Tags / Categories */}
                    {feed.tags && feed.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {feed.tags.map((tag: any) => (
                                <span
                                    key={tag.id}
                                    className="px-3 py-1 text-[11px] font-bold uppercase cursor-pointer hover:text-[#3741517e] ease-in-out duration-300 tracking-wider rounded-md bg-slate-50 text-slate-500 border border-slate-100/50"
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
                </>
            ) : (
                /* HIGHLIGHTS OVERVIEW MODE */
                <div className="relative my-2 animate-slide-down">
                    {/* Faded Background Title with Overlay Action Buttons */}
                    <div className="relative mb-6 animate-slide-down">
                        <h1 className="text-2xl font-lora md:text-[28px] font-bold text-slate-300/40 line-clamp-2 leading-[1.4] select-none pointer-events-none blur-[0.4px]">
                            {feed.title}
                        </h1>

                        {/* Centered Floating Control Pill Buttons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3.5 z-10 animate-slide-down">
                            <button
                                onClick={() => setShowHighlights(false)}
                                className="px-5 py-2.5 bg-white border border-slate-200/90 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                            >
                                <X className="w-4 h-4 text-slate-600" />
                                <span>Cancel</span>
                            </button>

                            <Link
                                href={`/article/${feed.slug}/${feed.documentId}`}
                                className="px-5 py-2.5 bg-white border border-slate-200/90 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-slate-700 text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                            >
                                <span>See more</span>
                                <ArrowRight className="w-4 h-4 text-slate-600" />
                            </Link>
                        </div>
                    </div>

                    {/* 2x2 Highlights Grid with Top-to-Down Cascade Animation */}
                    {loadingHighlights ? (
                        <div className="py-8 flex justify-center">
                            <Dots />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3">
                            {displayHighlights.map((hl: any, idx: number) => {
                                const cascadeClass = `animate-cascade-${Math.min(idx + 1, 4)}`;
                                return (
                                    <div
                                        key={hl.id}
                                        className={`bg-white border border-slate-100/90 rounded-2xl p-4.5 shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-start gap-3 group ${cascadeClass}`}
                                    >
                                        <span className="text-amber-500 font-serif font-extrabold text-2xl leading-none shrink-0 select-none mt-0.5">
                                            ”
                                        </span>
                                        <div className="flex flex-col justify-between h-full">
                                            <p className="font-serif text-slate-700 text-[13px] font-medium leading-snug group-hover:text-slate-900 transition-colors">
                                                {hl.quote}
                                            </p>
                                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mt-2.5 block">
                                                {hl.source}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* Footer Action Bar */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-5 mt-2">
                {/* Left Action (Highlights Toggle Button) */}
                <button
                    onClick={() => setShowHighlights(!showHighlights)}
                    className={`text-xs flex items-center gap-2 font-bold uppercase tracking-widest transition-all cursor-pointer ${
                        showHighlights ? "text-[#4A90E2]" : "text-slate-400 hover:text-slate-700"
                    }`}
                >
                    <Sparkles
                        className={`w-[18px] h-[18px] ${
                            showHighlights ? "text-[#4A90E2] fill-[#4A90E2]/20" : ""
                        }`}
                        strokeWidth={1.8}
                    />
                    <HighlightFeed id={feed.id} />
                </button>

                {/* Right Action (Read Link) */}
                <div>
                    <Link
                        href={`/article/${feed.slug}/${feed.documentId}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-links hover:text-links-hover transition-colors group"
                    >
                        Read Insight
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const Feed = () => {
    const { items, loading, error, fetchFeeds } = useFeedStore();

    useEffect(() => {
        fetchFeeds();
    }, [fetchFeeds]);

    if (loading) return <Dots />;
    if (error) return <div>Waiting.... {error} ❌</div>;

    return (
        <div className="lg:w-full py-6 px-4">
            {items?.map((feed: any) => (
                <FeedCard key={feed.id} feed={feed} />
            ))}
        </div>
    );
};
