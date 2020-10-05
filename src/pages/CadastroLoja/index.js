import React from 'react'
import PageDefault from '../PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.css'

function CadastroLoja(){
    return(
        <PageDefault>
            <section id="CadastroLoja" >
                <h1>Cadastro da sua loja franquiada Natura</h1>
                <form id="CadastroLoja">
                    <Input type="text" value="CEP"/>
                    <Input type="text" value="Referencia"/>
                    <Input type="text" value="Andar/Piso" />
                    <Input type="text" value="CNPJ"/>
                </form>
                <Button>Avançar</Button>
            </section>
        </PageDefault>
    )
}

export default CadastroLoja;