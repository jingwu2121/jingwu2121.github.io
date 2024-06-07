import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost'
import Card from '../components/Card'
import note from '../assets/images/note-0.png'
import matter from "gray-matter"
import { marked }  from "marked";
import tree from '../assets/images/tree-0.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Button } from 'bootstrap';

const extractFilename = (filePath) => {
    // Extract the filename from the file path
    const filename = filePath.split('/').pop().replace('.md', '');
    return filename;
};
  
const Blog = () => {
    const [metas, setMetas] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postModules = import.meta.glob('/public/posts/*.md');
            const postPaths = Object.keys(postModules)

            let frontmatter = []
            for (const path of postPaths) {
                const res = await fetch(path);
                const text = await res.text();
                const { content, data } = matter(text);
                const filename = extractFilename(path)
                frontmatter.push({...data, path: path, filename: filename});
            }
            setMetas(frontmatter)
        };
    
        fetchPosts();
        }, []);

    return (
        <div className="container mt-5 pt-3 blog">
            <Card title="Blogs" logo={tree}>
                {metas.map((meta, index) => (
                    <div key={index} className='blog-header'>
                        <Link to={`/blog/${meta.filename}`}>
                            {meta.title}
                        </Link>
                        {meta.date}
                    </div>
                ))}
            </Card>          
        </div>
  )
}

export default Blog