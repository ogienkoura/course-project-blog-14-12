import React from 'react'
import { useParams } from 'react-router-dom'
import articles from 'utils/articlesArray'

function getArticle(id) {
    return articles.find((article) => article.id === id)
}

export const ArticlePage = () => {
    let params = useParams()
    let article = getArticle(parseInt(params.id))
    return (
        <div>
            <div>{article.id}</div>
            <div>{article.description}</div>
            <div>
                <img src={`/${article.image}`} alt=""></img>
            </div>
        </div>
    )
}
