import Header from './Header'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
    const location = useLocation()
    return (
        <main>
            <Header />
            <section>
                <Outlet />
                {location.pathname === '/' && (
                    <>
                        <Link to={'clients'}>go to clients</Link>
                    </>
                )}
            </section>
        </main>
    )
}

export default Layout
