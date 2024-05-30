import React from 'react';
import {useNavigate} from 'react-router-dom'
import TButton from "./UI/button/TButton";

const PostItem = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="post" onClick={() => navigate(`/posts/${props.post.id}`)}>
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <TButton onClick={(e) => {
                        e.stopPropagation();
                        props.remove(props.post)
                    }}>
                        Удалить
                    </TButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;