"use client";

import Image from "next/image";
import { useGetMeQuery } from "@/redux/apis/AuthApi";

export default function FeedProfile() {
    const { data: user, isLoading, error } = useGetMeQuery();

    if (process.env.NODE_ENV !== "production") {
        console.log("[FeedProfile] user data:", user, "error:", error);
    }

    const getAvatarSrc = () => {
        if (!user) return "./images/user/avatar/user.jpg";
        
        const avatar = 
            user?.userinfo?.avatarImg || 
            user?.userinfo?.data?.attributes?.avatarImg ||
            user?.userinfo?.data?.avatarImg ||
            user?.userinfo?.avatar || 
            user?.avatarImg || 
            user?.avatar;

        if (!avatar) return "/images/user/avatar/user.jpg";

        const url = 
            typeof avatar === "string" 
                ? avatar 
                : avatar?.url || 
                  avatar?.data?.attributes?.url || 
                  avatar?.data?.url;

        if (!url) return "/images/user/avatar/user.jpg";

        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        }

        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
        return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
    };

    if (isLoading) {
        return (
            <div className="feed-profile w-full bg-white rounded-4xl relative lx:h-102.5 lg:h-90 sm:h-75 h-102.5 animate-pulse p-6 flex flex-col justify-end">
                <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            </div>
        );
    }

    const info = user?.userinfo?.data?.attributes || user?.userinfo || user;

    const username = info?.username || user?.username || "Guest";
    const location = info?.location || user?.location || "Cairo, Maadi";
    const title = info?.userTitle || user?.userTitle || user?.email || "No bio added yet";

    return (
        <div className="feed-profile w-full bg-white rounded-4xl relative lx:h-102.5 lg:h-90 sm:h-75 h-102.5">
            {/* User Avatar */}
            <div className="overlay-cover bg-linear-to-bl from-sidebar-cover via-sidebar-cover2 to-sidebar-cover3 w-full  h-37.5 sm:h-19 lg:h-33.75 absolute top-0 left-0 rounded-[25px]">
                <div className="feed-profile-avatar overflow-hidden w-21.25 h-21.25 rounded-full border-4 border-white absolute -bottom-7.5 left-6 bg-slate-100">
                    <Image 
                        loading="eager" 
                        src={getAvatarSrc()} 
                        alt={username} 
                        width={85} 
                        height={85} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
            {/* User Information */}
            <div className="feed-profile-info absolute bottom-3 left-0 right-0 px-6 pb-3 ">
                <div className="user-info px-2 ">
                    <div className="text-header flex justify-between items-center">
                        <span className="user-name p-0 xl:text-size-username lg:text-[16px] text-[14px] font-bold">
                            {username}
                        </span>
                        <span className="user-location text-size-location text-[#7b8190]">
                            {location}
                        </span>
                    </div>
                    <div className="text-size-description text-slate-400 font-medium truncate">
                        {title}
                    </div>
                </div>
                <div className="user-details px-2 mt-3 flex justify-between items-center">
                    <span className="text-header text-[15px] font-medium text-slate-700">Daily Visitors</span>
                    <span className="text-links font-semibold text-[#4A90E2]">450</span>
                </div>
                {/* Action Create */}
                <hr className="border-t border-slate-200/60 my-4" />
                <button className="w-full bg-links hover:bg-links-hover text-white py-3 px-4 rounded-[18px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md hover:shadow-lg">
                    <span className="text-lg font-bold max-sm-2xl:text-sm ">+</span> Create New Project
                </button>
            </div>
        </div>
    )
}