
import Link from "next/link";
import { Box, LayoutGrid } from "lucide-react";
export default function SidebarFeedLinks() {
    return (
        <>
            <div className="feed-links w-full bg-white rounded-4xl p-6 mt-6 ">
                <Link href="/feed" className="flex items-center gap-4 font-medium mb-4">
                    <span className="material-symbols-outlined  text-gray-400 text-2xl"><Box /></span>
                    <span className="text-gray-700">Portfolio</span>
                </Link>
                 <Link href="/graph" className="flex items-center gap-4 font-medium mb-4">
                    <span className="material-symbols-outlined  text-gray-400 text-2xl"><LayoutGrid /></span>
                    <span className="text-gray-700">Graph</span>
                </Link>
                 <Link href="/events" className="flex items-center gap-4 font-medium mb-4">
                    <span className="material-symbols-outlined  text-gray-400 text-2xl"><LayoutGrid /></span>
                    <span className="text-gray-700">Events</span>
                </Link>
                 <Link href="/community" className="flex items-center gap-4 font-medium mb-4">
                    <span className="material-symbols-outlined  text-gray-400 text-2xl"><LayoutGrid /></span>
                    <span className="text-gray-700">Community</span>
                </Link>
            </div>
        </>
    )
}