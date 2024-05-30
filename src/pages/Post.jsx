import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostApi from "../Api/PostApi";
import TLoader from "../components/UI/loader/TLoader";

const Post = () => {
    const params = useParams();
    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])

    const [fetchPost, isPostLoading, errorPostLoading] = useFetching(async (id) => {
        const response = await PostApi.getById(id);
        setPost(response)
    })

    const [fetchPostComments, isPostCommentsLoading, errorPostCommentsLoading] = useFetching(async (id) => {
        const response = await PostApi.getComments(id);
        console.log(response)
        setComments(response)
    })

    useEffect(() => {
        fetchPost(params.id)
        fetchPostComments(params.id)
    }, []);

    return (
        <div>
            {errorPostLoading && <h1>Ошибка загрузки поста {errorPostLoading}</h1>}
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><TLoader/></div>
                : <div><h1>Пост {post.id} {post.title}</h1>
                    <div>{post.body}</div>
                </div>}

            <h1>Комментарии</h1>

            {errorPostCommentsLoading && <h1>Ошибка загрузки Комментариев {errorPostCommentsLoading}</h1>}
            {isPostCommentsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><TLoader/></div>
                : comments.map(comment =>
                    <div style={{marginTop: 15}}>
                        <h5>Комментарий {comment.id}</h5>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>)}
        </div>
    );
};

export default Post;