import React from 'react'
import PageDefault from '../PageDefault'
import Button from '../../components/Button'
import './index.css'
import Input from '../../components/Input'
import Loja01 from './assets/Loja01.svg'
import Loja03 from './assets/Loja02.svg'
import Loja02 from './assets/Loja03.svg'

function LojasEncontradas(){
    return (
        <PageDefault>
            <h1>Encontramos essas lojas no local desejado!</h1>
            <section id="ButtonArea">
                <h2>Selecione a loja desejada para mais informações</h2>
                <section id="CardArea">
                    <div>
                        <img src={Loja01}/>
                        <p>Rua Pietro Muniz</p>
                    </div>
                    <div>
                        <img src={Loja02}/>
                        <p>Rua marivaldo texeira</p>
                    </div>
                </section>
                <Button to="BuscarLoja">Retornar</Button>
            </section>
        </PageDefault>
    )
}

export default LojasEncontradas;