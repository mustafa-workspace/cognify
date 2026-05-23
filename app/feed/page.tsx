import Sidebar from "@/components/layout/sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import { Feed } from "@/features/articles/components/Feeds";
export default function FeedPage() {
    return (
        <main className="container-fluid grid grid-cols-12 gap-4">
            <Sidebar />
            <div className="col-span-6">
                <Feed />
            </div>
            <RightSidebar />
        </main>
    );
}