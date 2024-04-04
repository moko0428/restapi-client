import { useNavigate } from 'react-router-dom';

function ArticleCreate() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/article/${data._embedded.article.id}`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        {' '}
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <textarea name="content" />
        </div>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
export default ArticleCreate;
