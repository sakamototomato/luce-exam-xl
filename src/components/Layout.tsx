import React, { PropsWithChildren } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <main>
            <Header />
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default Layout
