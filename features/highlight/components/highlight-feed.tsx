import getHighFeed from "../services/get-high-feed";
export default async function HighlightFeed({ id }: { id: number }) {
    const highFeed = await getHighFeed(id);
    return (
        <div className="actionable-left">
            <div className="cursor-pointer ">
                <span className="Bookmark-icon">
                  {highFeed.data.length}  HIGHLIGHT</span>
            </div>
        </div>
    )
}






