import React from 'react';
import classes from './TPagination.module.css';
import {usePagination} from "../../../hooks/usePaginations";

const TPagination = ({totalPages, page, setPage}) => {

    const pagesArray = usePagination(totalPages)

    return (
        <div className={classes.tPageWrapper}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => setPage(p)}
                    className={page === p ? [classes.tPage, classes.active].join(' ') : classes.tPage}>
                    {p}
                </span>)}
        </div>
    );
};

export default TPagination;