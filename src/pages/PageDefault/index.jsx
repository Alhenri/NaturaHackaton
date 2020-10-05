import React from 'react'
import './index.css'
import logo from './logo.svg'

function PageDefault({children}){
    return (
        <section id="PageDefault">
            <img src={logo} alt=""/>
            <section id="content">
                {children}
            </section>
        </section>
    )
}

export default PageDefault;