import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import Input from '../../components/Input'

function BuscarLoja(){
    return (
        <PageDefault>
            <h1>Você deseja:</h1>
            <section id="ButtonArea">
                <Button to="LojasEncontradas">Buscar lojas proximas</Button>
                <h1>Ou</h1>
                <Input type="text" value="Cidade"/>
                <Button to="LojasEncontradas" >Buscar na cidade</Button>
            </section>
        </PageDefault>
    )
}

export default BuscarLoja;