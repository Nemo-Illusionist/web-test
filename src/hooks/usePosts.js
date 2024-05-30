import {useMemo} from "react";

export const usePosts = (posts, sort, query) => {
    return useMemo(() => {
        const filteredPosts = query
            ? posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
            : posts

        if (sort) {
            return filteredPosts.sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return filteredPosts.sort((a, b) => a.id - b.id)
        }
    }, [posts, sort, query]);
}