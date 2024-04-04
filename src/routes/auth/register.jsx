import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/auth/login');
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">전송</button>
      </form>
    </>
  );
}

export default Register;