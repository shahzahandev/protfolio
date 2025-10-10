import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Skill from './components/Skill/Skill.jsx';
import About from './components/About/About.jsx';
import Banner from './components/Banner/Banner.jsx';
import Education from './components/Education/Education.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';

const router = createBrowserRouter([
  //   {
  //   path: "/banner",
  //   element: <Banner></Banner>,
  // },
  //  {
  //   path: "/about",
  //   element: <About></About>,
  // },
  //   {
  //   path: "/education",
  //   element: <Education></Education>,
  // },
  //   {
  //   path: "/skill",
  //   element: <Skill></Skill>,
  // },
  //    {
  //   path: "/footer",
  //   element: <Footer></Footer>,
  // },

  {
    path: "/",
    Component: MainRoot,
    children: [
      { path: "/banner", Component: Banner },
      { path: "/about", Component: About },
      { path: "/education", Component: Education },
      { path: "skill", Component: Skill },
      { path: "/footer", Component: Footer }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
