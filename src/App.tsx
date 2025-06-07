import { RouterProvider } from 'react-router';
import routerConfig from '@/Router.tsx';
import Providers from '@/Providers.tsx';
import './App.scss';

function App() {
  return (
    <>
      <Providers>
        <RouterProvider router={routerConfig} />
      </Providers>
    </>
  );
}

export default App;
