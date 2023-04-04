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
import Tripinsurance from './Pages/Tripinsurance';
import MapsMe from './Pages/MapsMe'
import About from './Pages/Company/About'
import Faq from './Pages/Company/Faq'
import { element } from 'prop-types';
import Reviews from './Pages/Company/Reviews';
import Insurance from './Pages/Company/Insurance';
import Info from './Pages/Company/Info';

const router = createBrowserRouter([
  {
    path: "/:lang?",
    element: <Main />,
    loader: ({ request, params }) => {
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
        element: <Home />,
        loader: ({ params }) => {
          console.log(params);
          return null
        }
      },
      {
        path: "aviasales",
        element: <Aviasales />
      },
      {
        path: "tripinsurance",
        element: <Tripinsurance />
      },
      {
        path: "mapsme",
        element: <MapsMe />
      },
      {
        path: "company",
        // element: <About />,
        loader: (par) => {
          console.log(par);
          return null;
        },
        children: [
          {
            index: true,
            element: <About />
          },
          {
            path: "faq",
            element: <Faq />
          },
          {
            path: "reviews",
            element: <Reviews />
          },
          {
            path: "insurance",
            element: <Insurance />
          },
          {
            path: "info",
            element: <Info />
          }
        ]
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
