import React from 'react'
import PageDefault from '../PageDefault'
import Card from '../../components/Card'
import img1 from './assets/P1.svg'
import img2 from './assets/P2.svg'
import img3 from './assets/P3.svg'
import './index.css'
import Button from '../../components/Button'

function Produtos(){
    return (
        <PageDefault>
            <h1>Produtos disponiveis nessa loja!</h1>
            <section id="ButtonArea">
                <h2>Selecione o produto para fazer o agendamento</h2>
                <section id="CardArea">
                    <Card>
                        <img src={img1} />
                        <div> 
                            <h3>DEO CORPORAL MEU PRIMEIRO HUMOR FEMININO</h3>
                            <p>
                                Unidades: 50
                                Preço: R$ R$ 32,20
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <img src={img2} />
                        <div>
                            <h3>DEO CORPORAL MEU PRIMEIRO HUMOR FEMININO</h3>
                            <p>
                                Unidades: 50
                                Preço: R$ R$ 32,20
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <img src={img3} />
                        <div>
                            <h3>DEO CORPORAL MEU PRIMEIRO HUMOR FEMININO</h3>
                            <p>
                                Unidades: 50
                                Preço: R$ R$ 32,20
                            </p>
                        </div>
                    </Card>  
                </section>
            </section>
            <Button to="LojasEncontradas">Retornar</Button>
        </PageDefault>
    )
}

export default Produtos;