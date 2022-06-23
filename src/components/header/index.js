import React from 'react'
import { Header } from './style.js';
import imgLogo from "../../assets/S-Vermelho.png";

function HeaderSite() {
  return (
    <Header>
        <img src={imgLogo} />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li id='Menu-C'>Contact</li>
          </ul>
        </nav>

    </Header>
  )
}

export default HeaderSite