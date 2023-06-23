import { lazy } from 'react';
import Loadable from '../modules/components/Loadable';

import Home from "../modules/pages/Home";
import Terms from "../modules/pages/Term";

const HomeRoutes = {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'terms',
        element: <Terms />
      }

    ]
  };
  
export default HomeRoutes;