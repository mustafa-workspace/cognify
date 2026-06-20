import FeedProfile from "@/features/Feeds/Sidebar/components/feedProfile";
import SidebarFeedLinks from "@/features/Feeds/Sidebar/components/SidebarFeedLinks";

export default function leftSidebar() {
    return (
        <div className="py-6 pl-5 sticky top-15">
            <FeedProfile />
            <SidebarFeedLinks />
        </div>
    );
}