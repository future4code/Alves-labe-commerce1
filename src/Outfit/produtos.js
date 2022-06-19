import React, { useEffect, useState } from 'react'
import './produtos.css'

export default class Podutos extends React.Component {

    state = {
        carrinho: "",
    }

    // funçoes sempre vão ao lado do render 
    adicionaCarrinho() {
        this.setState({
            carrinho: this.state.carrinho + 1
        })
        // sempre que for preciso mudar o state, é necessario usar this.setState,
        // e dentro dos parentes e chaves colocar o mesmo nome da propriedade do estado
    }

    render() {

        return (
            <div className='body'>
                <div className='container'>
                    <div className='text'>
                        <h2>SALE</h2>
                        <p>Welcome Astronaut, here are the best products for your space travel .</p>
                    </div>
                    <div className='item'>
                            <div className='image'>
                                <img src="./img/telescopio2.jpg" alt='Clothes' width="200" heigth="200" />
                            </div>

                            <div className='info'>
                                <span className='name'>Telescópio refletor Newtoniano 114mm Uranium equatorial</span>
                                <span className='oldPrice'>U$ 5.000</span>
                                <span className='price'>U$ 4.300</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                            {/* quando for classe, sempre colocar o this na frente para chamar a função  */}
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/telescopio3.jpg" alt='Clothes' width="200" heigth="200" />
                            </div>

                            <div className='info'>
                                <span className='name'>Telescópio refletor 114mm Cygnus + Adaptador Celular + ocular ploss SkyLife</span>
                                <span className='oldPrice'>U$ 3.500</span>
                                <span className='price'>U$ 2.800</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/camisaMET.jpg" alt='Clothes' width="200" heigth="200"/>
                            </div>

                            <div className='info'>
                                <span className='name'> Camiseta "psicodélica ET" - Masculino </span>
                                <span className='oldPrice'>U$ 600.00</span>
                                <span className='price'>U$ 400.00</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/camisaFET.jpg" alt='Clothes' width="200" heigth="200"/>
                            </div>

                            <div className='info'>
                                <span className='name'>Camiseta "ET em paz" - Feminino</span>
                                <span className='oldPrice'>U$ 600.00</span>
                                <span className='price'>U$ 499.99</span>
                            </div>

                    

                            <div className='item'>
                            <div className='image'>
                                <img src="./img/camisaMET2.jpg" alt='Clothes'width="200" heigth="200" />
                            </div>

                            <div className='info'>
                                <span className='name'>Camiseta "psicodélica Astronauta" - Masculino</span>
                                <span className='oldPrice'>U$ 700.00</span>
                                <span className='price'>U$ 500.00</span>
                            </div>

                                                   
                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>
                     </div> 
                 </div>
             </div>
         
     
     )


    }
}