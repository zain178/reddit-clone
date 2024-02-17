import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRedditPosts = createAsyncThunk(
    'reddit/fetchPosts',
    async () => {
        try {
            const response = await fetch('https://www.reddit.com/r/all.json');
            const data = await response.json();
            
            return data.data.children.map(child => ({
                id: child.data.id,
                title: child.data.title,
                author: child.data.author,
                created_utc: child.data.created_utc,
                num_comments: child.data.num_comments,
                likes: child.data.likes,
            }));
        } catch(error) {
            throw new Error('Failed to fetch Reddit posts');
        }
    }
); 