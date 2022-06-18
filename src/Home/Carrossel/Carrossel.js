import React, { useEffect, useState } from 'react'
import './carrossel.css'

export default class Carrossel extends React.Component {

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
                        <p> This promotion is more anticipated than the passage of comet Harley.</p>
                    </div>

                    <div className='carrossel'>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/loja/meteorito_1.jpg" alt='Clothes' />
                            </div>

                            <div className='info'>
                                <span className='name'> Meteorito Encontrado no Peru - 20 cm de diâmetro</span>
                                <span className='oldPrice'>U$ 299.00</span>
                                <span className='price'>U$ 199.00</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                            {/* quando for classe, sempre colocar o this na frente para chamar a função  */}
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/loja/camiseta_1.jpg" alt='Clothes' />
                            </div>

                            <div className='info'>
                                <span className='name'> Camiseta "Astronauta na Lua" - Unisex</span>
                                <span className='oldPrice'>U$149.00</span>
                                <span className='price'>U$ 100.00</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/loja/luneta_1.jpg" alt='Clothes' />
                            </div>

                            <div className='info'>
                                <span className='name'> Luneta 6-24X50AOEG em Aluminio Gripho </span>
                                <span className='oldPrice'>U$ 499.00</span>
                                <span className='price'>U$ 399.00</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                        <div className='item'>
                            <div className='image'>
                                <img src="./img/loja/meteorito_1.jpg" alt='Clothes' />
                            </div>

                            <div className='info'>
                                <span className='name'> Meteorito Encontrado no Peru - 20 cm de diâmetro</span>
                                <span className='oldPrice'>U$ 299.00</span>
                                <span className='price'>U$ 199.00</span>
                            </div>


                            <button onClick={this.adicionaCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}