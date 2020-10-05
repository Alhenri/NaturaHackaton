import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import logo from './logo.svg'

function PageDefault({children}){
    return (
        <section id="PageDefault">
            <Link to="/">
                <img src={logo} alt="" href="/"/>
            </Link>
            <section id="content">
                {children}
            </section>
        </section>
    )
}

export default PageDefault;