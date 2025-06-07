import { createBrowserRouter } from 'react-router-dom';
import { TestPage, RootPage, GradientPage, ComponentsPage } from '@/pages';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    Component: RootPage,
    children: [
      { index: true, element: <></> },
      {
        path: '/test',
        element: <TestPage />,
      },
      {
        path: '/gradient',
        element: <GradientPage />,
      },
      {
        path: '/components',
        element: <ComponentsPage />,
      },
    ],
  },
]);

export default routerConfig;
