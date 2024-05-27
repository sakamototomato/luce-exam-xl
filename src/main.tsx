import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/reset.scss'
import './styles/common.scss'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
