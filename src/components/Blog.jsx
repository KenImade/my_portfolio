import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/documentTitle";
import '../css/blog_style.css';
import articlesArray from '../data/blog_data.json';
import ArticlesList from "./ArticlesList";


function Blog() {
    useDocumentTitle('Blog')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setArticles(articlesArray)
    }, [])
    
    return (
        <>
            <h1 class="title">
                Blog
            </h1>

            <section class="posts">
                <ArticlesList articles={articles}/>
            </section>
        </>
    )
}

export default Blog