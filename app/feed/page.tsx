import Sidebar from "@/components/layout/sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import { Feed } from "@/features/articles/components/Feeds";
export default function FeedPage() {
    return (
        <main className="container-fluid grid grid-cols-12 max-sm:grid-cols-1 gap-4">
            <div className="lg:col-span-3 sm:col-span-12 hidden lg:block">
                <Sidebar />
            </div>
            <div className="lg:col-span-6 sm:col-span-12 w-full">
                <Feed />
            </div>
            <div className="lg:col-span-3 sm:col-span-12 hidden lg:block">
                <RightSidebar />
            </div>
        </main>
    );
}