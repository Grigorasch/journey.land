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
import { createGlobalStyle } from 'styled-components';

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

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html,
body,
div,
span,
h1,
h2,
h3,
p,
a,
img,
ul,
li,
form,
label,
aside,
footer,
header,
nav {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

aside,
nav {
    display: block;
}

html {
    scroll-behavior: smooth;
    height: 100%;
}

html,
body {
    width: 100%;
}

body {
    padding: 0 10px 10px;
    min-height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    color: #ffffff;
    line-height: 1;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 70%, rgba(255, 255, 255, 0) 95%) top / 100% 10000px no-repeat,
        url(/images/background.png) top / cover no-repeat,
        #000000;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: 0.3s;
}

a:hover {
    text-decoration: underline;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.Fragment>
);

reportWebVitals();