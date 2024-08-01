import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import projects from './projects.js'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/portfolio',
          element: <Portfolio projects={projects}/>,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/resume',
          element: <Resume />,
        },
        {
          path: '/footer',
          element: <Footer />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
