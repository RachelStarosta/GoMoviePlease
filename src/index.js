import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import ManageCatalogue from './Components/ManageCatalogue';
import Movies from './Components/Movies';
import Movie from './Components/Movie';
import EditMovie from './Components/EditMovie';
import Login from './Components/Login';
import Genres from './Components/Genres';
import GraphQL from './Components/GraphQL';



const router = createBrowserRouter([
  /**
   * This is a javascript object
   */
  {
    path: "/",          //To display:...
    element: <App />, //this is the default element
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/> },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie/>,
      },
      {
        path: "/genres",
        element: <Genres />,
      },
      {
        path: "/admin/movie/:id",
        element: <EditMovie/>,
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue/>,
      },
      {
        path: "/graphql",
        element: <GraphQL/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

