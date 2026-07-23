export default function SidebarFeedStats() {
    return (
        <div className="feed-stats w-full bg-white rounded-4xl p-6 mt-4.5 shadow-xs">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-[15px] font-semibold">
                    <span className="text-slate-600">Most Highlights</span>
                    <span className="text-links font-bold">150</span>
                </div>
                <div className="flex justify-between items-center text-[15px] font-semibold">
                    <span className="text-slate-600">Share Impressions</span>
                    <span className="text-links font-bold">1.3k</span>
                </div>
            </div>
        </div>
    );
}
