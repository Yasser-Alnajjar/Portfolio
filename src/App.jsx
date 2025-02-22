import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'; 
import routes from './routes/index';

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
      
      <Toaster reverseOrder={false} position="top-right" />
    </>
      
  );
}

export default App;
