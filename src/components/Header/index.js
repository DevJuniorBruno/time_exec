

import  {Link}from "react-router-dom";
import './header.css';
import {useState} from 'react';
import Logo from '../../img/2.png';

export default function Header(){

    const[active, setActive]=useState("header__menu");
    const[toggleIcon, setToggleIcon]=useState("header__toggler")


    const headerToggle = ()=>{
        active === "header__menu"
        ? setActive("header__menu header__active")
        :setActive("header__menu");


        toggleIcon === "header__toggler"
        ? setToggleIcon("header__toggler toggle")
        : setToggleIcon("header__toggler") ;
    }

    //TogglerIcon
    return(
        <header className="header" >
            <Link className="header__logo" to='/' >
            <img 
            alt="logo"
            src={Logo}
            width={200}
            height={70} />
            </Link>

            <ul className={active} >
                <li className="header__item"><Link className="header__link"  to='/' onClick={headerToggle}>Home</Link> </li>
                <li className="header__item"><Link className="header__link"  to='/quemsomos' onClick={headerToggle}>Quem Somos</Link></li>
                <li className="header__item"><Link className="header__link"  to="/servicos" onClick={headerToggle} >Serviços</Link></li>
                <li className="header__item"><Link className="header__link"  to="/contato" onClick={headerToggle}>Solitar Orçamento</Link> </li>
            </ul>
            

            <button type="button" id="button" onClick={headerToggle} className={toggleIcon} >
            <span></span>
            <span></span>
            <span></span>
            </button>
        </header>
    )
}