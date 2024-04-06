import { createBrowserRouter} from 'react-router-dom';
import Layout from './layout/layout.jsx';
import NotFound from './pages/NotFound.jsx';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import MoviePage from './pages/Movie.jsx';


export default createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component:HomePage,
      },
      {
        path:'about',
        Component:AboutPage
      },
      {
        path: 'movie/:id',
        Component:MoviePage
      }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
])