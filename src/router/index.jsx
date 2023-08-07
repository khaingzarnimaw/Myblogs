import App from '../App';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BlogDetail from '../pages/BlogDetail';

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
        {
            path:'/blogs/:id',//main -> home.jsx
            element : <BlogDetail/>
        }
      ]
    },
  ]);

  export default router;