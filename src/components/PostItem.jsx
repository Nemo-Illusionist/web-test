import React from 'react';
import TButton from "./UI/button/TButton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <TButton onClick={() => props.remove(props.post)}>
                        Удалить
                    </TButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;