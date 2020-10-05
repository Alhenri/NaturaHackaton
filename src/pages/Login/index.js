import React from 'react'
import PageDefault from '../PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.css'

function Login(){
    return(
        <PageDefault>
            <section id="Login">
                <form>
                    <Input type="text" value="Usuário" />
                    <Input type="text" value="Senha" />
                </form>
                <Button>Avançar</Button>
            </section>
        </PageDefault>
    )
}

export default Login;