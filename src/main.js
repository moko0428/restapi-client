import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/auth/register')}>join</button>
    </>
  );
}

export default Main;
