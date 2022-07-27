import React from "react";
import './Navbar.css'
import {FaBars,FaAngleDown} from 'react-icons/fa'
import {VscChromeClose} from 'react-icons/vsc'

const Navbar = () => {  
    React.useEffect(()=>{
        var navIconC = document.querySelector('.nav-iconc');        
        var navIconB = document.querySelector('.nav-iconb');
        var navbtn = document.querySelector('.navbar-toggler');
        var navBarNav = document.querySelector('.navbar-nav');
        var navbarSM = document.querySelector('.navbar-sm');
        var navlist = document.querySelector('.navbar-collapse')
        var loginContainer = document.querySelector('.login-container');
        var dropdown_nav = document.querySelector('.collapse');
        var login_div = document.querySelector('.login')
        let show = false;
        navbtn.addEventListener('click',()=>{
            if(!show)
            {
                show = true;
                navlist.classList.add('show');
                navlist.setAttribute('style','display:flex; flex-direction:column');
                navbarSM.setAttribute('style','display:flex; flex-direction:column');
                navBarNav.setAttribute('style','display:none;');
                navIconB.setAttribute('style','display:none;');
                navIconC.setAttribute('style','display:flex;');
                loginContainer.classList.add('login-containerSM')
                loginContainer.classList.remove('justify-content-end')
                dropdown_nav.classList.add('collapseSM')
                login_div.classList.add('loginSM')
            }
            else
            {
                show = false;                               
                navBarNav.setAttribute('style','display:flex;');
                navIconC.setAttribute('style','display:none;');
                navIconB.setAttribute('style','display:flex;');
                login_div.classList.remove('loginSM');
                dropdown_nav.classList.remove('collapseSM')
                loginContainer.classList.add('justify-content-end')
                navlist.classList.remove('show');
                loginContainer.classList.remove('login-contianerSM')
                navlist.setAttribute('style','display:none;');
                navbarSM.setAttribute('style','display:none;');
            }
        });
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-light container-fluid m-0">
            <div className="container-fluid justify-content-between py-2">
                    <div className="hidden order-4"></div>
                    <img src="assets/images/mobox-logo.png" className="ms-4 navbar-brand col-3 col-sm-2 col-lg-1 order-2 order-lg-first"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="navIcon">
                        <FaBars className="bar-btn nav-iconb"/>
                        <VscChromeClose className="bar-btn nav-iconc"/>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between nav-list" id="navbarNav">
                    <ul className="navbar-nav  text-center">
                        <li className="nav-item">
                        <a className="nav-link1 active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Earnings">Earn</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Earnings">Stake</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#swap">Swap</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#Refferals">Referral</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="https://bscscan.com/address/0x91749805F8B29016861dC174e889BC9FA6aE50c1">Contract</a>
                        </li>
                    </ul>
                        <div className="d-flex flex-row justify-content-end login-containerSM login-container align-items-center">
                            <div className="d-flex flex-row justify-content-end login">
                                <a className="nav-link2 my-0" href="#">Login</a>                
                                <button className="nav-link2 my-0 nav-btn" href="#">Register</button>
                            </div>                    
                            <a className="nav-link2 my-0" href="#">Download <FaAngleDown /></a>
                        </div>
                        <div className="navbar-sm justify-content-start text-start">
                            <a className="navlink-sm">Home</a>
                            <a className="navlink-sm">MOMOFramer</a>
                            <a className="navlink-sm-white">Games</a>
                            <a className="navlink-sm ps-5 ms-5">MOMOverse</a>
                            <a className="navlink-sm ps-5 ms-5">ChainZ Arena</a>
                            <a className="navlink-sm ps-5 ms-5">MOland Defence</a>
                            <a className="navlink-sm ps-5 ms-5">Block Brawler</a>
                            <a className="navlink-sm ps-5 ms-5">Token Master</a>
                            <a className="navlink-sm">NFT Marcketplace</a>
                            <a className="navlink-sm-white">Governance</a>
                            <a className="navlink-sm ps-5 ms-5">Vote</a>
                            <a className="navlink-sm ps-5 ms-5">Community</a>
                            <a className="navlink-sm">Docs</a>
                        </div>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbar;