import React from 'react';

function BlogPost(props) {
    const {blogP} = props;
    return <div className ="BlogPost">
        <h1>
            {blogP}
        </h1>
    </div>
}

export default BlogPost;