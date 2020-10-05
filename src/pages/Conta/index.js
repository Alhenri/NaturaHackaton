import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'

function Conta(){
    return (
        <PageDefault>
            <h1>Bem vindo ao seu cadastro Natura</h1>
            <section id="ButtonArea">
            <h2>
                Agora você pode buscar e/ou agendar retirada de produtos em nossas lojas cadastradas ou ser
                atendido por nossos funcionários online
            </h2>
                <Button to="BuscarLoja">Buscar</Button>
                <Button>Duvidas?</Button>
            </section>
        </PageDefault>
    )
}

export default Conta;