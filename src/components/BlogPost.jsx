import React, { useEffect, useState } from 'react';
import { marked }  from "marked";
import matter from "gray-matter"
import { Buffer } from 'buffer/'
import Card from '../components/Card'
import tree from '../assets/images/tree-0.png'
import 'katex/dist/katex.min.css';
import markedKatex from "marked-katex-extension";
import user_computer from '../assets/images/user_computer-0.png'
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
    const post = useParams()
    const [content, setContent] = useState('')
    const [metadata, setMetadata] = useState({})

    useEffect(() => {
        const loadPost = async () => {
            const res = await fetch(`/src/posts/${post.blogId}.md`);
            const text = await res.text();
            const { content, data } = matter(text);

            // Add math support
            const options = {
                throwOnError: false
            };
            marked.use(markedKatex(options));

            const htmlContent = marked(content);
            setContent(htmlContent);
            setMetadata(data);
        };

        loadPost();
    }, []);
    
    return (
        <div className='blog container mt-5 pt-3'>
            <Card title={metadata.title} logo={tree}>
                <div className='blog-header'>
                <Link to="/blog" className="btn start-button mb-4 px-1">
                    <img src={user_computer} alt="Twitter" /> Go Back
                </Link>
                Last Update: {metadata.date}
                </div>
                <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
            </Card>
        </div>
    )


}

export default BlogPost