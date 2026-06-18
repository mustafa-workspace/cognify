import React from 'react';
import Image from 'next/image';
import { MessageCircleMore, UsersRound, Bell } from 'lucide-react';

export default function NavbarDesk() {
    return (
        <div className='hidden md:block container-fluid p-2 bg-white top-0 sticky z-50 shadow-xs'>
            <div className='content-navs flex justify-between items-center w-full px-3'>
                <div className='nav-left flex items-center gap-3'>
                    <div className='brand-name'>
                        <span className='text-xl font-bold text-links tracking-tight'>Cognify</span>
                    </div>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search,auother,tags..." className='w-[300px] bg-slate-200/50 rounded-full py-[11px] pl-11 pr-4 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium' />
                    </div>
                </div>
                <div className='nav-right flex items-center justify-end gap-[18px] mr-2'>
                    <div className='icon-btn relative flex items-center justify-center cursor-pointer p-0'>
                        <MessageCircleMore className="w-[26px] h-[26px] text-icons fill-icons" strokeWidth={0} />
                        <span className="absolute -bottom-[2px] -right-px w-[13px] h-[13px] bg-[#3b82f6] border-2 border-white rounded-full block"></span>
                    </div>
                    <div className='icon-btn relative flex items-center justify-center cursor-pointer p-0'>
                        <UsersRound className="w-[28px] h-[28px] text-icons fill-icons" strokeWidth={0} />
                        <span className="absolute -bottom-[2px] -right-px w-[13px] h-[13px] bg-[#3b82f6] border-2 border-white rounded-full block"></span>
                    </div>
                    <div className='icon-btn relative flex items-center justify-center cursor-pointer p-0'>
                        <Bell className="w-[26px] h-[26px] text-icons fill-icons" strokeWidth={0} />
                        <span className="absolute -bottom-px right-0 w-[12px] h-[12px] bg-[#3b82f6] border-2 border-white rounded-full block"></span>
                    </div>
                    <div className='user-profile ml-2 cursor-pointer'>
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center bg-slate-100 relative">
                            <Image src="/images/user/avatar/user.png" alt="Avatar" width={55} height={55} className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}