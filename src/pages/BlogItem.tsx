import React from 'react';
import {Link} from 'react-router-dom';

interface IBlogItem {
    id: number;
    title: string;
    author: string;
    content: string;
    publishedAt: Date;
}

const Blog: React.FC<IBlogItem> = ({id, title, author, content, publishedAt}) => {
    return (
        <div id="blog" className="container">
            <h1 className="title">{title}</h1>
            <div className="meta">
                <span className="author">{author}</span>
                <span className="publishedAt">{publishedAt}</span>
            </div>
            <p className="content">
                {content}
            </p>
            <div className="cta-container">
                <Link to='/Blog'>Back to list</Link>
            </div>
        </div>
    )
};

export default Blog;
export const path = '/blog/:id';
