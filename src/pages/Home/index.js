import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import './index.css'

function Home(){
    return (
        <PageDefault>
            <section id="ButtonArea">
                <h1>Bem vindo ao atendimento virtual da Natura!</h1>
                <Button to="/Cadastro">Cadastro</Button>
                <Button to="/Login">Login</Button>
            </section>
        </PageDefault>
    )
}

export default Home;