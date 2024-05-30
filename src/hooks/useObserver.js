import {useEffect, useRef} from "react";

export const useObserverIntersecting = (ref, isLoading, canLoad, callback) => {
    const observer = useRef()

    return useEffect(() => {
        if (isLoading) {
            return
        }

        if (observer.current) {
            observer.current.disconnect()
        }

        if (!canLoad) {
            return;
        }

        observer.current = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                callback()
            }
        })
        observer.current.observe(ref.current)
    }, [isLoading])
}