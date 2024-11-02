import React from 'react'
import "./Header.css"
import "../Footer/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus,faEnvelope, faSearch, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className="headr-content px-5">
      <nav style={{alignItems:"center", verticalAlign:"middel"}} className="navbar navbar-expand-lg navbar-light">
        <div style={{display:"flex", alignItems:"center"}}>
        <div className='logo'>
         <FontAwesomeIcon className="ml-2 cartlogo"  icon={faCartArrowDown} />
        </div>
        <a className="navbar-brand" href="#?">FoodMart</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li  className="nav-item active ">
              <a  class="nav-link  spicial" href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#?">Contact</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#?" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shops
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#?">Action</a>
                <a className="dropdown-item" href="#?">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#?">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#?" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Best Sales
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#?">Action</a>
                <a className="dropdown-item" href="#?">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#?">Something else here</a>
              </div>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0 nav-bar-left">
          <div className="row m-0 p-0 align-items-center mr-2 footer-subscribe-form test">
                <div className="nav-item dropdown category m-0">
                    <a className="nav-link dropdown-toggle" href="#?" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Category
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#?">Action</a>
                      <a className="dropdown-item" href="#?">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#?">Something else here</a>
                    </div>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                    <FontAwesomeIcon className="ml-2"  icon={faEnvelope} />
                    <div className="p-0 m-0">
                      <form  id="search-form" className="text-center p-0" action="#!"method="post" >
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search anything..."/>
                      </form>
                    </div>
                    <div>
                  <button  className="subscribe-btn p-1 searchicon "><FontAwesomeIcon className="ml-2"  icon={faSearch} /></button>
                </div>
               </div>
                
            </div>
            <div className="manage-account" type="submit">
               <button className='login'>Login</button>
               <button className='register'>Register</button>
            </div>
            <div className='account-cart'>
               <div className='account'>
                <FontAwesomeIcon className="icons"  icon={faUser} />
               </div>
               <div className='cart'>
                <FontAwesomeIcon className="icons"  icon={faCartPlus} />
                <div className='cart-items'>
                  <span>02</span>
                </div>
               </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header