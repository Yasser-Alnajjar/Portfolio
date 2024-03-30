import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import routes from './routes/index';

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
