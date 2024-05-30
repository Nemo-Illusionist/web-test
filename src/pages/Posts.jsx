import React, {useEffect} from "react";
import PostForm from "../components/PostForm";
import TModal from "../components/UI/modal/TModal";
import TButton from "../components/UI/button/TButton";
import TLoader from "../components/UI/loader/TLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import {usePosts} from "../hooks/usePosts";
import TPagination from "../components/UI/pagination/TPagination";
import PostApi from "../Api/PostApi";
import {useSearchParams} from "react-router-dom";
import {removeNullFields} from "../utils/obj";

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
    const [limit, _] = React.useState(10)
    const [page, setPage] = React.useState(parseInt(searchParams.get('page')) || 1)
    const [fetchPost, isPostLoading, errorPostLoading] = useFetching(async () => {
        const response = await PostApi.get(limit, page);
        setPosts(response.data)
        setTotalPages(getPageCount(response.totalCount, limit))
    })

    useEffect(() => {
        fetchPost()
        setSearchParams({...searchParams, page: page});
    }, [page]);

    useEffect(() => {
        const newSearchParams = {...searchParams, ...filter};
        removeNullFields(newSearchParams);

        for (let key in newSearchParams) {
            if (!newSearchParams[key]) {
                delete newSearchParams[key];
            }
        }
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
        {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><TLoader/></div>
            : <PostList posts={sortedAndSearchedPosts} title="Список посто" remove={removePost}/>}
        <TPagination totalPages={totalPages} page={page} setPage={setPage}/>
    </div>);
}

export default Posts;
