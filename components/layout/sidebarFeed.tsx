import FeedProfile from "@/features/Feeds/Sidebar/components/feedProfile";
import SidebarFeedLinks from "@/features/Feeds/Sidebar/components/SidebarFeedLinks";
import SidebarFeedStats from "@/features/Feeds/Sidebar/components/SidebarFeedStats";
import SidebarFeedPromo from "@/features/Feeds/Sidebar/components/SidebarFeedPromo";

export default function leftSidebar() {
    return (
        <div className="py-6 pl-5 sticky top-15 overflow-y-auto pr-2 flex flex-col gap-0.5 scrollbar-thin ">
            <FeedProfile />
            <SidebarFeedLinks />
            <SidebarFeedStats />
            <SidebarFeedPromo />
        </div>
    );
}