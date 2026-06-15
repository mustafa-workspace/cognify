"use client";
import React from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bookmark, Search, PlusCircle, Library } from "lucide-react";

export function FeedsDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Bookmark className="w-[20px] h-[20px] text-slate-600" strokeWidth={1.8} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[280px] bg-white p-3.5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col gap-3.5 font-sans"
                align="start"
                sideOffset={8}
            >
                {/* Search Box */}
                <div className="flex items-center px-4 py-3 bg-slate-50/80 rounded-2xl text-sm text-slate-400 border border-transparent focus-within:border-slate-200 focus-within:bg-white transition-colors">
                    <Search className="w-[18px] h-[18px] mr-3 text-slate-300" strokeWidth={2.5} />
                    <input
                        type="text"
                        placeholder="Search Portfolio"
                        className="bg-transparent outline-none w-full text-slate-700 placeholder:text-slate-300 placeholder:font-medium font-medium text-[15px]"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    />
                </div>

                <div className="h-px w-full bg-slate-100/80 my-[-2px]"></div>

                {/* Save Article */}
                <DropdownMenuItem className="flex items-center gap-3.5 px-4 py-3.5 bg-slate-50/70 focus:bg-slate-100 rounded-2xl cursor-default text-slate-700 font-medium outline-none transition-colors">
                    <PlusCircle className="w-[19px] h-[19px] text-slate-500" strokeWidth={1.8} />
                    <span className="text-[15px] tracking-wide">Save Article</span>
                </DropdownMenuItem>

                {/* Portfolio List */}
                <div className="bg-slate-50/70 rounded-3xl p-2 flex flex-col gap-1">
                    {[
                        { title: 'Anxity Researchers', active: false },
                        { title: 'Addictions Young', active: false },
                        { title: 'Research 2026', active: false },
                        { title: 'ADHD 2020', active: false },
                    ].map((item, idx) => (
                        <DropdownMenuItem
                            key={idx}
                            className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl cursor-default font-medium outline-none transition-all ${item.active
                                ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-slate-700 focus:bg-white focus:text-slate-800'
                                : 'text-slate-600 focus:bg-white focus:shadow-[0_2px_10px_rgba(0,0,0,0.04)] focus:text-slate-800'
                                }`}
                        >
                            <Library className={`w-[19px] h-[19px] ${item.active ? 'text-slate-700' : 'text-slate-400'}`} strokeWidth={item.active ? 1.8 : 1.5} />
                            <span className="text-[14.5px] tracking-wide">{item.title}</span>
                        </DropdownMenuItem>
                    ))}
                </div>

                {/* Create New Portfolio */}
                <DropdownMenuItem className="mt-0.5 flex items-center justify-center py-3.5 bg-[#eff6ff] focus:bg-[#e0f0ff] text-blue-500 rounded-2xl cursor-default font-medium outline-none transition-colors">
                    <span className="text-[14.5px] tracking-wide font-semibold">+ Create New Portfolio</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}