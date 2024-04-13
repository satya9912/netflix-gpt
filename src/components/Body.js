import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {

    const routes = [
        {path: '/', element: <Login />},
        {path: '/browse', element: <Browse />}
    ];
    const appRouter = createBrowserRouter(routes, { basename: "/netflix-gpt" });
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body