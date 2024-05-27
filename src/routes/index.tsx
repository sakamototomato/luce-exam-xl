import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Clients from '../pages/clients/Clients'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'index',
                element: <Home />,
            },
            {
                path: 'clients',
                element: <Clients />,
            },
        ],
    },
])

export const routeNamesMap: Record<string, string> = {
    clients: 'Clients',
    index: 'Home',
}
