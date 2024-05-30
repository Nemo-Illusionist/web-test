import {useMemo, useState} from "react";

export const usePagination = (totalPages) => useMemo(() => {
    const pagesArray = []
    for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i)
    }
    return pagesArray
}, [totalPages])