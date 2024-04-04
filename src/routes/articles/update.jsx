import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ArticleUpdate() {
  const { articleId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/articles/${articleId}`);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>Update {articleId}</h1>
      <form onSubmit={handleSubmit}>
        {' '}
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" defaultValue={state.article.title} />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <textarea name="content" defaultValue={state.article.content} />
        </div>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
export default ArticleUpdate;
