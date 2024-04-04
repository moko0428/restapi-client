import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/articles', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data._embedded.articles);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <h1>List</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to={`/articles/new`}>
        <button>게시글 작성</button>
      </Link>
    </>
  );
}
export default ArticlesList;
