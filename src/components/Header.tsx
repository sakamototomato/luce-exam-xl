import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'
import { routeNamesMap } from '../routes'

function Header() {
    //TODO: static text at this moment, can use hook of router to get path and show it
    const location = useLocation()
    const pathList = location.pathname.split('/')
    const path = pathList[1]
    console.log('path', path)
    return (
        <section>
            <div className="route-information">{routeNamesMap[path]}</div>
        </section>
    )
}

export default Header
