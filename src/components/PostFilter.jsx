import React from 'react';
import TInput from "./UI/input/TInput";
import TSelect from "./UI/select/TSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <TInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск...'
            />
            <TSelect
                value={filter.sort}
                onChange={(sort) => setFilter({...filter, sort: sort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;