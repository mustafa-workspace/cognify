export default function SidebarFeedPromo() {
    return (
        <div className="feed-promo w-full bg-white rounded-4xl p-6 mt-4.5 shadow-xs">
            <p className="text-slate-700 font-semibold text-[15px] leading-relaxed mb-5">
                Expand your research network and discover our innovative tools every month.
            </p>
            <div className="relative">
                {/* Crown Illustration overlapping the button */}
                <div className="absolute -left-3 -bottom-1 z-10 -rotate-12 pointer-events-none">
                    <svg width="48" height="42" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_3px_5px_rgba(249,115,22,0.4)]">
                        {/* Crown Body */}
                        <path d="M7 29.5L3 14.5L13.5 21.5L22 7L30.5 21.5L41 14.5L37 29.5H7Z" fill="#FFC02D" stroke="#E28500" strokeWidth="2" strokeLinejoin="round" />
                        {/* Bottom rim */}
                        <path d="M6 29.5C14.5 31.5 29.5 31.5 38 29.5" stroke="#E28500" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M10 29.5C16.5 30.5 27.5 30.5 34 29.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                        {/* White pearl tips */}
                        <circle cx="3" cy="14.5" r="2.5" fill="#FFF" stroke="#E28500" strokeWidth="1.5" />
                        <circle cx="22" cy="7" r="2.5" fill="#FFF" stroke="#E28500" strokeWidth="1.5" />
                        <circle cx="41" cy="14.5" r="2.5" fill="#FFF" stroke="#E28500" strokeWidth="1.5" />
                        {/* Middle gems */}
                        <circle cx="15" cy="24" r="1.5" fill="#FF8A12" />
                        <circle cx="22" cy="23" r="1.5" fill="#FF8A12" />
                        <circle cx="29" cy="24" r="1.5" fill="#FF8A12" />
                    </svg>
                </div>
                
                {/* Promo button */}
                <button className="w-full bg-[#FFA033] hover:bg-[#FF8C1A] text-white py-3.5 pl-11 pr-4 rounded-full font-bold text-[14px] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md hover:shadow-lg">
                    Try 1 month with free
                </button>
            </div>
        </div>
    );
}
