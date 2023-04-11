import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobDetails from './components/AppliedJobsDetails/AppliedJobsDetails';
// import AppliedSingleJobDetails from './components/AppliedSingleJobDetails/AppliedSingleJobDetails';
import SingleJobDetails from './components/SingleJobDetails/SingleJobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>fetch('jobsdata.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobDetails></AppliedJobDetails>,
        loader: () => fetch('jobsdata.json')
        
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobdetails',
        element: <SingleJobDetails></SingleJobDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
