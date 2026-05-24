import getFullArticle from "@/features/articles/services/get-article";

interface ParamsArticlePage {
  id: string;
}

export default async function articlePage({ params }: { params: ParamsArticlePage }) {
  const { id } = await params,
        articleData = await getFullArticle({id: id}),
        getArticleData = articleData.data;
  return (
    <main className="bg-black" >
        <div className="tx-cognify-page">
            <h2 className="text-2xl font-semibold mb-2">{getArticleData.title? getArticleData.title : "Article Slug"}</h2>
            {getArticleData.content}
        </div>
    </main>
  );
}
