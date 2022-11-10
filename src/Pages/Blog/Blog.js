import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2>This is blog page.</h2>
        </div>
    );
};

export default Blog;