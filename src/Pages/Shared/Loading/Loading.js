import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12" role="status">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;