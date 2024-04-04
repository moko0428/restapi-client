import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import Register from './routes/auth/register';
import Login from './routes/auth/login';
import Main from './main';
import Articles from './routes/articles/list';
import ArticlesList from './routes/articles/list';
import ArticleCreate from './routes/articles/create';
import ArticleView from './routes/articles/view';
import ArticleUpdate from './routes/articles/update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world</div>,
  },
  {
    path: '/articles',
    children: [
      {
        index: true,
        Component: ArticlesList,
      },
      { path: 'new', Component: ArticleCreate },
      {
        path: ':articleId',
        children: [
          { index: true, Component: ArticleView },
          { path: 'edit', Component: ArticleUpdate },
        ],
      },
    ],
  },
  {
    path: '/auth',
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
