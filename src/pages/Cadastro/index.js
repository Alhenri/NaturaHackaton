import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import './index.css'

function Cadastro(){
    return(
        <PageDefault>
            <section id="ButtonArea">
                <Button>Cliente</Button>
                <Button>Loja</Button>
            </section>
        </PageDefault>
    )
}

export default Cadastro;