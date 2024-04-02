import Home from '../Layouts/Home';
import Homepage from '../pages/Home';

const routes = [
  {
    path: '',
    element: <Home />,
    children: [{ path: '/', element: <Homepage /> }],
  },
];

export default routes;
