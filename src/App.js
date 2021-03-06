import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import i1 from './enac.png';
import i2 from './pos.png';

function App() {
  
  return (
    <div className="App responsive-padding"	>
      
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"/>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <header className="app_header  responsive-padding">
      <img className="app_image animate__animated animate__bounceInDown responsive-margin responsive-padding " src={i1} alt="ENACTUS"/>
      </header>
      <Nav/>
      <div className="app_body " style={{ }}>
       <p className="app_head ">ENACTUS WORLDWIDE</p>
       <p className="app_text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis, diam tortor pharetra est, quis euismod urna nunc eget est. Suspendisse potenti. In ac vestibulum sapien. Maecenas lacinia metus non dignissim gravida.</p>
      <br/><p className="app_text2"> WE BELIEVE INVESTING IN STUDENTS WHO TAKE</p>
      <p className="app_text3 flex justify-center responsive-margin responsive-padding"> EN<div className="app_text3" style={{color: 'white'}}>TREPRENEURIAL</div> </p>
      <h2 className="app_text4 flex justify-center responsive-margin responsive-padding"> AC<div className="app_text3" style={{color: 'white'}}>TION FOR OTHERS</div> </h2>
      <p className="app_text5 justify-center responsive-margin responsive-padding"> CREATES A BETTER WORLD FOR</p>
      <h2 className="app_text6 flex justify-center responsive-margin responsive-padding"> US &nbsp;<div className="app_text3" style={{color: 'white'}} > ALL</div></h2><br/>
      <p className="app_text7">WHO ARE WE?</p>
      <p className="app_text8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis.

Maecenas semper, augue nec faucibus lobortis, diam tortor pharetra est, quis euismod urna nunc eget est. Suspendisse potenti. In ac vestibulum sapien. Maecenas lacinia metus non dignissim gravida. Maecenas semper, augue nec faucibus lobortis, diam tortor pharetra est, quis euismod urna nunc eget est. Suspendisse potenti. In ac vestibulum sapien. Maecenas lacinia metus non dignissim gravida.</p>
      <br/><p className="app_text7">OUR PROJECTS</p>
      </div>
      <div className="y1 ">
      <div className="app_box responsive-margin responsive-padding">
        <ul className="responsive-margin u1">
          <li className="responsive-margin u1 animate__animated animate__bounceInRight" loading="lazy" ><h3>PROJECT UNNATI</h3><br/><p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,
</p></li><br/><br/>
          <li className="responsive-margin u1 animate__animated animate__bounceInLeft" loading="lazy"><h3>PROJECT SWAJAL</h3><br/><p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</p></li>
<br/><br/> <li className="responsive-margin u1 animate__animated animate__bounceInRight " loading="lazy"><h3>PROJECT RANGMANCH</h3><br/><p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</p></li>
<br/> <br/> <li className="responsive-margin u1 animate__animated animate__bounceInLeft" loading="lazy"><h3>PROJECT MILAN</h3><br/><p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</p></li>
        </ul>
      </div>
      </div>
      <footer className="app_foot flex justify-around bg-black">
       <div className=" hover-light-yellow white-90"><img src={i2} alt="."/><h3>FIND US -</h3><br/><p>Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</p></div>
       <div className=" hover-light-yellow white-90"><img src={i2} alt="."/><h3>FIND US -</h3><br/><p>Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</p></div>
       <div className=" hover-light-yellow white-90"><img src={i2} alt="."/><h3>FIND US -</h3><br/><p>Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</p></div>
       </footer>
      <div className="app_f1 bg-black  justify-center">
      <img className="app_image responsive-margin responsive-padding justify-center " src={i1} alt="ENACTUS"/>
      <h2 className=" justify-center Baskerville" style={{color: "white"}}>FOLLOW US-</h2><br/>
      <a className="link near-black hover-blue grow dib mh3 tc" href="https://www.facebook.com/EnactusDTU/" title="Facebook">
    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
    <span className="f6 db">Facebook</span>
  </a>
  <a className="link hover-hot-pink near-black dib grow mh3 tc" href="https://instagram.com/enactusdtu?utm_medium=copy_link" title="Instagram">
    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
    <span className="f6 db">Instagram</span>
  </a>
  <a className="link hover-blue near-black dib mh3 grow tc" href="https://www.linkedin.com/company/enactus-dtu" title="LinkedIn">
    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
    <span className="f6 db">LinkedIn</span>
  </a>
      </div><br/>
      <div className="">
      <h2 className="yellow Baskerville">USEFUL LINKS</h2><br/>
      <div className="flex justify-around">
       <div className="white-90 hover-yellow">HOME &nbsp; &nbsp; &nbsp; &nbsp;</div>
       <div className="white-90 hover-yellow">PROJECTS &nbsp; &nbsp; &nbsp; &nbsp; </div>
       <div className="white-90 hover-yellow">GALLERY &nbsp; &nbsp; &nbsp; &nbsp; </div>
       <div className="white-90 hover-yellow">RECOGNITION &nbsp; &nbsp; &nbsp; &nbsp;</div>
       <div className="white-90 hover-yellow">ABOUT US &nbsp; &nbsp; &nbsp; &nbsp; </div>
       <div className="white-90 hover-yellow">CONTACT US &nbsp; &nbsp; &nbsp; &nbsp;</div>
      </div>
      </div><br/><br/>
    </div>

  );
}

export default App;
