import React from 'react';

const Container = ({className,children}) => {
    return (
        <div className={`${className} max-w-300 px-8 m-auto`}>
            {children}
        </div>
    );
};

export default Container;