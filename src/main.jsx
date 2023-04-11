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
import SingleJobDetails from './components/SingleJobDetails/SingleJobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import AppliedSingleJobDetails from './components/AppliedSingleJobDetails/AppliedSingleJobDetails';
// import AppliedSingleJobDetails from './components/AppliedSingleJobDetails/AppliedSingleJobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>fetch('/jobsdata.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignment-marks.json')
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobDetails></AppliedJobDetails>,
        loader: () => fetch('/jobsdata.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobdetails/:jobId',
        element: <SingleJobDetails></SingleJobDetails>,
        loader: async ({params}) => {
          const res = await fetch('/jobsdata.json')
          const data = await res.json()
          return data.find(job => job.id == params.jobId)
        } 
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
