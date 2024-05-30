import React, {useEffect, useRef} from "react";
import PostForm from "../components/PostForm";
import TModal from "../components/UI/modal/TModal";
import TButton from "../components/UI/button/TButton";
import TLoader from "../components/UI/loader/TLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import {usePosts} from "../hooks/usePosts";
import PostApi from "../Api/PostApi";
import {useSearchParams} from "react-router-dom";
import {removeNullFields} from "../utils/obj";
import {useObserverIntersecting} from "../hooks/useObserver";

function Posts() {
    let [searchParams, setSearchParams] = useSearchParams();

    const [posts, setPosts] = React.useState([])
    const [modal, setModal] = React.useState(false)
    const [filter, setFilter] = React.useState({
        sort: searchParams.get('sort') || '',
        query: searchParams.get('query') || ''
    })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = React.useState(0)
    const [limit] = React.useState(10)
    const [page, setPage] = React.useState(1)

    const listElement = useRef()

    const [fetchPost, isPostLoading, errorPostLoading] = useFetching(async () => {
        const response = await PostApi.get(limit, page);
        setPosts([...posts, ...response.data])
        setTotalPages(getPageCount(response.totalCount, limit))
    })

    useObserverIntersecting(
        listElement,
        isPostLoading,
        () => page < totalPages,
        () => setPage(page + 1)
    )

    useEffect(() => {
        fetchPost()
    }, [page]);

    useEffect(() => {
        const newSearchParams = {...searchParams, ...filter};
        removeNullFields(newSearchParams);
        setSearchParams(newSearchParams);
    }, [filter]);

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (<div className="App">
        <TButton
            style={{marginTop: '30px',}}
            onClick={() => setModal(true)}> Создать пост
        </TButton>
        <TModal visible={modal} setVisible={setModal}>
            <PostForm postCallback={addNewPost}/>
        </TModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {errorPostLoading && <h1>Ошибка загрузки ${errorPostLoading}</h1>}
        <PostList posts={sortedAndSearchedPosts} title="Список посто" remove={removePost}/>
        {isPostLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><TLoader/></div>}
        <div ref={listElement} style={{height: 50}}></div>
    </div>);
}

export default Posts;
