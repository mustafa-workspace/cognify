import {create} from 'zustand';
import getFeeds from '@/features/articles/services/get-feeds';

interface FeedState {
  items: any[]
  loading: boolean
  error: string | null
  fetchFeeds: () => Promise<void>
}

const useFeedStore = create<FeedState>((set) => ({
  items: [],
  loading: true,
  error: null,

  fetchFeeds: async () => {
    set({loading:true, error:null, items:[]});
    try {
        const feeds =  await getFeeds();
        if (feeds && feeds.data ) {
            set({items:feeds.data, loading:false});
        } else {
            set({items:feeds, loading: false});
        }
        
    } catch (error:any) {
      set({loading:false, error:error.message || 'Failed to fetch feeds'});
    }   
  }

}));

export default useFeedStore;