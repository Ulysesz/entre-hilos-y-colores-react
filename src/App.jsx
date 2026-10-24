import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Index from './pages/Index.jsx'
import Productos from './pages/Productos.jsx'
import Galeria from './pages/Galeria.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import PaginaError from './pages/PaginaError.jsx'


const mapaRutas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'productos', element: <Productos /> },
      { path: 'galeria', element: <Galeria /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'contacto', element: <Contacto /> },
      { path: '*', element: <PaginaError /> },
    ]
  },
])

function App() {
  return <RouterProvider router={mapaRutas} />
}

export default App;

