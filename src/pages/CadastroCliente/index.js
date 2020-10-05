import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import Input from '../../components/Input'
import './index.css'

function CadastroCliente(){
    return(
        <PageDefault>
            <h1>Seja nosso cliente!</h1>
            <form id="CadastroCliente">
                <Input type="text" value="Primeiro Nome"/>
                <Input type="text" value="Sobrenome" />
                <Input type="text" value="Telefone 01" />
                <Input type="email" value="E-mail" />

                <Input type="text" value="Senha" />
                <Input type="text" value="Telefone 02" />
                <Input type="text" value="CPF" />
                <Input type="text" value="RG" />
                <Input type="text" value="Nascimento" />
                <Input type="text" value="Genero" />
            </form>

            <Button to="Verificação">Avançar</Button>
        </PageDefault>
    )
}

export default CadastroCliente;