import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import logo from './logo.svg'
import Button from '../../components/Button'

function PageDefault({children}){
    return (
        <section id="PageDefault">
            <Link to="/" id="Logo">
                <img src={logo} alt=""/>
                <h1>Home</h1>
            </Link>
            <section id="content">
                {children}
            </section>
        </section>
    )
}

export default PageDefault;