import {create} from 'zustand';
import getFullArticle from '@/features/articles/services/get-article';


interface ArticleState {
    items: any[];
    loading: boolean;
    error: string | null;
    fetchArticles: (id:string) => Promise<void>;
}


const useArticleStore = create<ArticleState>((set) => ({
  items: [],
  loading: true,
  error: null,
  fetchArticles: async (id:string) => {
    set({loading:true,items:[],error:null})
    try {  
        const article = await getFullArticle({id:id});
        if (article && article.data) {
            set({items:article.data, loading:false}); 
        } else { 
            set({items:article, loading:true}); 
        }
    } catch (er:any){
        set({loading:false,error:er.message || 'Failed to fetch articles'})
    }
  }
}));

export default useArticleStore;
