import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Main from './Pages/Main';
import Aviasales from './Pages/Aviasales/indes';
import Home from './Pages/Home';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   // element: <Main lang="ru" />,
  //   loader: () => {
  //     if (localStorage.getItem('lang')) {
  //       return redirect(`/${localStorage.getItem('lang')}`)
  //     } else {
  //       return redirect('/ru')
  //     }
  //   },
  // },
  {
    path: "/:lang?",
    element: <Main />,
    loader: ({ params }) => {
      switch (params.lang) {
        case 'ru':
        case 'en':
          localStorage.setItem('lang', params.lang);
          return params;
        default:
          if (localStorage.getItem('lang')) {
            return redirect(`/${localStorage.getItem('lang')}`)
          } else {
            return redirect('/ru');
          }
      }
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/:lang/aviasales",
        element: <Aviasales />
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
