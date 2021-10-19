import React from 'react';
import './Nav.css';

const Nav = () => {
    return (<>
     <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"/>
    <div className=" tc pv4 nav1 animate__animated animate__jackInTheBox">
    <nav class=" bg-gray tc center justify-between mt4 responsive-margin responsive-padding Baskerville">
    <li class="f6 f5-l  black-80 hover-yellow dib pa2 ph4-l responsive-margin responsive-padding">HOME</li>
    <li class="f6 f5-l  black-80 hover-yellow dib pa2 ph4-l responsive-margin responsive-padding" >PROJECTS</li>
    <li class="f6 f5-l  black-80 hover-yellow dib pa2 ph4-l responsive-margin responsive-padding" >EVENTS</li>
    <li class="f6 f5-l  black-80 hover-yellow dib pa2 ph4-l responsive-margin responsive-padding" >CAMPAIGNS</li>
    <li class="f6 f5-l  black-80 hover-yellow dib pa2 ph4-l responsive-margin responsive-padding" >ABOUT US</li>
  </nav>
        </div>
   </> );
}

export default Nav
