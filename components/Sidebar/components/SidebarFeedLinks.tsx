import Link from "next/link";
import { Briefcase, Layers } from "lucide-react";

export default function SidebarFeedLinks() {
    return (
        <div className="feed-links w-full bg-white rounded-4xl p-6 mt-4.5 ">
            <nav className="flex flex-col gap-5">
                <Link href="/feed" className="group flex items-center gap-4 font-semibold text-[15px] text-slate-700 hover:text-links transition-colors duration-200">
                    <Briefcase className="w-5 h-5 text-[#b0b5c1] group-hover:text-links transition-colors duration-200 group-hover:scale-105" />
                    <span>Portfolios</span>
                </Link>
                <Link href="/graph" className="group flex items-center gap-4 font-semibold text-[15px] text-slate-700 hover:text-links transition-colors duration-200">
                    <Layers className="w-5 h-5 text-[#b0b5c1] group-hover:text-links transition-colors duration-200 group-hover:scale-105" />
                    <span>Graphs</span>
                </Link>
                <Link href="/events" className="group flex items-center gap-4 font-semibold text-[15px] text-slate-700 hover:text-links transition-colors duration-200">
                    <Layers className="w-5 h-5 text-[#b0b5c1] group-hover:text-links transition-colors duration-200 group-hover:scale-105" />
                    <span>Events</span>
                </Link>
                <Link href="/community" className="group flex items-center gap-4 font-semibold text-[15px] text-slate-700 hover:text-links transition-colors duration-200">
                    <Layers className="w-5 h-5 text-[#b0b5c1] group-hover:text-links transition-colors duration-200 group-hover:scale-105" />
                    <span>Community</span>
                </Link>
            </nav>
        </div>
    );
}