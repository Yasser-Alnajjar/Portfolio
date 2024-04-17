import Home from '../Layouts/Home';
import ProjectDetails from '../components/sections/Projects/details';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Homepage from '../pages/Home';
import Projects from '../pages/Projects';

const routes = [
  {
    path: '',
    element: <Home />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:id', element: <ProjectDetails /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
];

export default routes;
