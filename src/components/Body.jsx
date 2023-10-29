import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import NotFound from './NotFound';

const appRouter = createBrowserRouter([
  { errorElement: <NotFound /> },

  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'browse',
    element: <Browse />,
  },
]);
const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    
    </div>
  );
};

export default Body;
