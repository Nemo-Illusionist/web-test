import React from 'react';
import classes from './TModal.module.css'

const TModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.tModal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.tModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default TModal;