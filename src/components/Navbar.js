import React from 'react'
import myLogo from "../Images/logo.png";
import Darktoggl from './Drktoggl'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-color  rounded-2 p-2">

  <div className="container-fluid m-2 mx-3">
     <img className='logo mx-2' src={myLogo} alt="logo" width="50" />
    
    <a className="navbar-brand fw-bold fs-2 text-white fontfamily" href="/">Caseify</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>

    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


        <li className="nav-item mx-4 fw-bold">
          <a className="nav-link active text-white nav-item" aria-current="page" href="#home">Home</a>
        </li>


        <li className="nav-item mx-4  fw-bold">
          <a className="nav-link text-white nav-item" href="#about">About</a>
        </li>


        <li className="nav-item mx-4  fw-bold">
          <a className="nav-link text-white nav-item" href="#contact">Contact</a>
        </li>


         <li className="nav-item mx-4  fw-bold">
          <a className="nav-link text-white nav-item" href="#privacy">Privacy Policy</a>
        </li>
       
      </ul>
      <Darktoggl/>
    </div>
  </div>
</nav>
    </>
  )
}
