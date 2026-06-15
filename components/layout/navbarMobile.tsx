"use client";
import { Search, Bell, Home, BookOpen, Users, User, Plus } from 'lucide-react';
import Image from 'next/image';
export default function MobileNav() {
    return (
        <div className="md:hidden top-0 sticky z-50 shadow-xs">
            {/* Top Navigation Block */}
            <div className="w-full bg-[#FAFAFA] px-4 pt-5 pb-3 z-40 sticky top-0">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="rounded-full flex items-center justify-center overflow-hidden">
                            <Image
                                src={"/images/user/avatar/user.png"}
                                alt="avatar"
                                width={30}
                                height={30}
                                className="object-cove cursor-pointer"
                            />
                        </div>
                        {/* Brand Name */}
                        <span className="text-xl font-bold text-[#0E1F35] tracking-tight">Cognify</span>
                    </div>

                    {/* Settings / Notifications */}
                    <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
                        <Bell className="w-[22px] h-[22px] text-slate-500" fill="currentColor" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-[18px] w-[18px] text-slate-400" strokeWidth={2.5} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search research, authors, tags..."
                        className="w-full bg-slate-200/50 rounded-full py-[11px] pl-11 pr-4 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    />
                </div>

                {/* Categories / Tags (Horizontal Scroll) */}
                <div className="flex items-center gap-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-1 -mx-4 px-4 scroll-smooth">
                    <button className="px-4 py-1.5 rounded-full bg-[#A4C2FE] text-blue-900 text-[13px] font-semibold whitespace-nowrap transition-transform active:scale-95 leading-tight">
                        Neuroplasticity
                    </button>
                    <button className="px-5 py-1.5 rounded-full bg-[#E8EAEE] text-[#4A5568] text-[13px] font-semibold whitespace-nowrap transition-transform active:scale-95 leading-tight">
                        AI Ethics
                    </button>
                    <button className="px-5 py-1.5 rounded-full bg-[#FCE2D4] text-[#8C3A24] text-[13px] font-semibold whitespace-nowrap transition-transform active:scale-95 leading-tight">
                        Deep Work
                    </button>
                    <button className="px-5 py-1.5 rounded-full bg-[#E8EAEE] text-[#4A5568] text-[13px] font-semibold whitespace-nowrap transition-transform active:scale-95 leading-tight relative">
                        Cir
                    </button>
                    <button className="px-5 py-1.5 rounded-full bg-[#E8EAEE] text-[#4A5568] text-[13px] font-semibold whitespace-nowrap transition-transform active:scale-95 leading-tight relative">
                        PSTD
                        <div className="absolute right-0 top-0 bottom-0 w-8  from-[#FAFAFA] gradient-to-l to-transparent pointer-events-none rounded-r-full" />
                    </button>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="fixed cursor-pointer bottom-[88px] right-5 w-14 h-14 bg-links hover:bg-links/80 text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,102,255,0.35)] transition-transform hover:scale-105 active:scale-95 z-50">
                <Plus className="w-7 h-7" strokeWidth={2.5} />
            </button>

            {/* Bottom Tab Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#FAFAFA] border-t border-slate-200 pb-3 pt-2 px-6 flex items-center justify-between z-50">
                <button className="flex flex-col items-center gap-1 min-w-[60px] py-1 outline-none">
                    <Home className="w-[22px] h-[22px] text-[#0066FF]" fill="currentColor" strokeWidth={1} />
                    <span className="text-[10px] font-bold text-[#0066FF] uppercase tracking-[0.08em] mt-0.5">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 min-w-[60px] py-1 outline-none transition-opacity hover:opacity-80">
                    <BookOpen className="w-[22px] h-[22px] text-slate-500" fill="currentColor" strokeWidth={1} />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.08em] mt-0.5">Library</span>
                </button>
                <button className="flex flex-col items-center gap-1 min-w-[60px] py-1 outline-none transition-opacity hover:opacity-80">
                    <Users className="w-[22px] h-[22px] text-slate-500" fill="currentColor" strokeWidth={1} />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.08em] mt-0.5">Community</span>
                </button>
                <button className="flex flex-col items-center gap-1 min-w-[60px] py-1 outline-none transition-opacity hover:opacity-80">
                    <User className="w-[22px] h-[22px] text-slate-500" fill="currentColor" strokeWidth={1} />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.08em] mt-0.5">Profile</span>
                </button>
            </div>

        </div>
    );
}
