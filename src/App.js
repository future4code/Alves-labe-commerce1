import React from 'react';
import './App.css';
import Header from './Header/header';
import Home from './Home/Home';
import Outfit from './Outfit/produtos'
class App extends React.Component {
  state = {
		telaAtual: "Home"
	}

  irParaHome = () => {
		this.setState({telaAtual: "Home"})
	}

  irParaCarrinho = () => {
		this.setState({telaAtual: "Carrinho"})
	}

	irParaOutfit = () => {
		this.setState({telaAtual: "Outfit"})
	}

  irParaStore = () => {
		this.setState({telaAtual: "Store"})
	}

  render() {
    return (
      <div>
        <Header />
        <Outfit />
      </div>
    );
  }
}

export default App;
