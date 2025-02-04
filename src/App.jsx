import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './Components/First';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App