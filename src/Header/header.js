import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>

                <div className='logo'>
                    <h4>LOGO</h4>
                </div>

                <Navbar dark expand="md">

                    <div className='menu'>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <NavLink className='categoria' href="#">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='categoria' href="#">Outfit</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='categoria' href="#">Store</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='categoria' href="#">Blog</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                        
                    </div>



                </Navbar>
                <div className='lupa-carrinho'>
                        <input placeholder='Pesquisar' hidden />
                        <a href="#"><img src='./img/lupa-arredondada.png' /></a>
                        <a href="#"><img src='./img/bolsa-de-compras.png' /></a>
                    </div>
            </header>
        );
    }
}


// export default class Header extends React.Component {

//     render() {
//         return (
//             <header>
//                 <button className='btn-mobile'>Menu</button>

//                 <img />

//                 <nav>
//                     <a href="#">Home</a>
//                     <a href="#">Outfit</a>
//                     <a href="#">Store</a>
//                     <a href="#">Blog</a>
//                 </nav>

//                 <div className='lupa-carrinho'>
//                     <input placeholder='Pesquisar' hidden />
//                     <a href="#"><img src='./img/lupa-arredondada.png' /></a>
//                     <a href="#"><img src='./img/bolsa-de-compras.png'  /></a>
//                 </div>
//             </header>
//         )
//     }

// }