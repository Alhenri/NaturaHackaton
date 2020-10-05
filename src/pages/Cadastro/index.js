import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import './index.css'

function Cadastro(){
    return(
        <PageDefault>
            <section id="ButtonArea">
                <Button to="CadastroCliente">Cliente</Button>
                <Button to="CadastroLoja">Loja</Button>
            </section>
        </PageDefault>
    )
}

export default Cadastro;