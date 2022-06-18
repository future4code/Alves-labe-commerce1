import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    const [MobileMenu, setMobileMenu]= useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categoria d_flex">
                        <span className="fa-border-all"></span>
                        <h4>
                            Categoria <i className="chaveron"></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul className="nav">
                            <li>
                             <Link to='/'>Home</Link>
                            </li>
                            <li>
                             <link to='/page'>pagina</link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)} >
                            {
                                MobileMenu? <i className="home-btn"></i>:
                                <i className="open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Navbar