import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import './index.css'

function Home(){
    return (
        <PageDefault>
            <section id="ButtonArea">
                <Button to="/Cadastro">Cadastro</Button>
                <Button to="/Login">Login</Button>
            </section>
        </PageDefault>
    )
}

export default Home;