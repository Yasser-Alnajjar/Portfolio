import Home from '../Layouts/Home';
import HomePage from '../pages/Home';
const routes = [
  {
    path: '',
    element: <Home />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <h2>about</h2> },
    ],
  },
];

export default routes;
