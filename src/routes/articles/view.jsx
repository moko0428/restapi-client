import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ArticleView() {
  const [article, setArticle] = useState([]);

  const { articleId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data._embedded.article);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link to={`/articles/${articleId}/edit`} state={{ article }}>
        <button>수정</button>
      </Link>
    </>
  );
}
export default ArticleView;
