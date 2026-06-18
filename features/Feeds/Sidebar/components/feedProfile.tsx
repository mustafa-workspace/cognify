import Image from "next/image"
export default function FeedProfile() {
    return (
        <div className="feed-profile w-full bg-white rounded-4xl py-6 px-4 relative h-102.5 sm:h-100">
            {/* User Avatar */}
            <div className="overlay-cover bg-linear-to-bl from-sidebar-cover via-sidebar-cover2 to-sidebar-cover3 w-full h-37.5 sm:h-30 lg:h-33.75 absolute top-0 left-0 rounded-[25px]">
                <div className="feed-profile-avatar overflow-hidden w-21.25 h-21.25 rounded-full border-4 border-white absolute -bottom-7.5 left-6">
                    <Image src="/images/user/avatar/user.jpg" alt="Avatar" width={85} height={85} className="w-full h-full object-cover" />
                </div>
            </div>
            {/* User Information */}
            <div className="feed-profile-info absolute bottom-10 left-0 right-0 px-6 pb-3 ">
                <div className="user-info px-2 ">
                    <div className="text-header flex justify-between items-center">
                        <span className="user-name xl:text-size-username lg:text-[16px] text-[14px] font-bold">Betsy Turner</span>
                        <span className="user-location text-size-location">Cairo,Maadi</span>
                    </div>
                    <div className="text-size-description  mt-0.5 flex items-center gap-1.5 text-gray-600">
                        researcher in psychology and intellectual issues
                    </div>
                </div>
                <div className="user-details px-2 mt-4 flex justify-between">
                    <span className="text-header text-[15px] font-medium">Daily Visitor</span>
                    <span className="text-links font-semibold">568</span>
                </div>
                {/* Action Create */}
                <hr className="border-t border-slate-200/60 my-4" />
                <button className="w-full bg-links hover:bg-links-hover text-white py-3  px-4 rounded-[18px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md hover:shadow-lg">
                    <span className="text-lg font-bold max-sm-2xl:text-sm ">+</span> Create New Project
                </button>
            </div>
        </div>
    )
}