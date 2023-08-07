import App from '../App';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import {
    createBrowserRouter,

  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'',
            //element:
            element: <Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
      ]
    },
  ]);

  export default router;