import React from 'react';
import BlogPost from './BlogPost';

function BlogList(props) {
    const {blog} = props;


  const body1 = {
    blog: "Bloggy Blog",
    blogP: "Bwahahaha"
  }
    
    return <div className ="BlogList">
        <h1>
            {blog}
        </h1>
        <h2>
            {blog}
        </h2>

        <BlogPost {...body1}/>
    </div>
}

export default BlogList;