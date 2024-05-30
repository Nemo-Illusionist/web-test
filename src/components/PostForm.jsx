import React from 'react';
import TInput from "./UI/input/TInput";
import TButton from "./UI/button/TButton";

const PostForm = ({postCallback, title = '', body = ''}) => {
    const [post, setPost] = React.useState({title: title, body: body});

    const updatePost = (e) => {
        e.preventDefault();

        const newPost = {...post, id: Date.now()}
        postCallback(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <TInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <TInput
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <TButton onClick={updatePost}>
                Создать пост
            </TButton>
        </form>
    );
};

export default PostForm;