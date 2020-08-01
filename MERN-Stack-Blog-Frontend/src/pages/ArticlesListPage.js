import React from 'react';
import articleContent from './article-content.js'
import ArticlesList from '../components/ArticlesList';


const ArticlesListPage = () => (
    <>
    <h1>List of Articles</h1>
    <ArticlesList articles={articleContent} />
    </>
)

export default ArticlesListPage;
