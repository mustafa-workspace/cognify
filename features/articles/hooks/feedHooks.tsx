'use client';
import useFeedStore from "@/store/FeedStore";
import { useEffect } from "react";

   const { loading, error, items, fetchFeeds } = useFeedStore();
    useEffect(() => {
        fetchFeeds();
    }, [fetchFeeds]);

