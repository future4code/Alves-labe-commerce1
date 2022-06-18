import React from 'react';
import './App.css';
import Header from './Header/header';
import Home from './Home/Home';

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
        <Home />
      </div>
    );
  }
}

export default App;
