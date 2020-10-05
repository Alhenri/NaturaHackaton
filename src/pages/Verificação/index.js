import React from 'react'
import PageDefault from '../PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.css'

function Verficação(){
    return(
        <PageDefault>
            <section id="Verificação">
                <p>
                    <h1>Código de verificação:</h1>
                    <h2>Enviado para seu e-mail</h2>
                </p>
                <Input type="text" />
            </section>
                <Button>Avançar</Button>
        </PageDefault>
    )
}

export default Verficação;