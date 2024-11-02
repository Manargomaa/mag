import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPrint, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container-fluid p-0">  
        <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: "#000000" }}>
          <section className="d-flex justify-content-between  p-3 px-4 text-black footer-header" style={{ backgroundColor: "#EBEEF6" }}>
            <div className="me-5">
              <p className="subscribe-footer-title"><span>Subscribe</span> & Get 10% OFF for first order</p>
            </div>
            <div className="row m-0 align-items-center  footer-subscribe-form">
               <FontAwesomeIcon className="ml-2"  icon={faEnvelope} />
                <div className="p-0 m-0">
                  <form  id="search-form" className="text-center p-0" action="#!"method="post" >
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Enter your email address"/>
                  </form>
                </div>
                <div>
                  <button  className="subscribe-btn p-1">SUBSCRIBE</button>
                </div>
            </div>
          </section>
        <section>
            <div className="container-fluid px-4 text-left mt-5 pt-3 pb-5 footer-body">
              <div className="row px-0 mt-3">
              {/* FoodMart Column */}
              <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold logo-title">FoodMart</h6>
                <p><a href="#!" className="text-light">Subscribe</a></p>
                <p><a href="#!" className="text-light pb-1">Get 60% off your first order</a></p>
                <div className="footer-subscribe-body">
                  <form id="search-form" className="text-center p-0" action="#!" method="post">
                   <div style={{display:"flex", alignItems:"center"}}>
                      <input type="text" className="form-control border-0 bg-transparent" placeholder="Enter your email"/>
                      <FontAwesomeIcon className="mr-2"  icon={faPaperPlane} />
                   </div>
                  </form>
                </div>
              </div>
              {/* Category Column */}
              <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Category</h6>
                <p><a href="#!" className="text-light">Dairy Derivatives</a></p>
                <p><a href="#!" className="text-light">Supermarket and grocery</a></p>
                <p><a href="#!" className="text-light">Water and Softeners</a></p>
                <p><a href="#!" className="text-light">Bakeryand Biscuits</a></p>
                <p><a href="#!" className="text-light">Detegrents</a></p>
                <p><a href="#!" className="text-light">Sauces and Dressings</a></p>
              </div>
              {/* Account Links Column */}
              <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Account</h6>
                <p><a href="#!" className="text-light">My Account</a></p>
                <p><a href="#!" className="text-light">Login / Register</a></p>
                <p><a href="#!" className="text-light">Cart</a></p>
                <p><a href="#!" className="text-light">Wishlist</a></p>
                <p><a href="#!" className="text-light">Shop</a></p>
              </div>
              {/* Quick liks Column */}
              <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Link</h6>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
              {/* Contact Column */}
              <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p><FontAwesomeIcon  icon={faHome} />  <span className="mx-2">111 Bijoy sarani, Dhaka, DH 1515</span></p>
                <p><FontAwesomeIcon  icon={faEnvelope} /> <span className="mx-2">info@foodmart.com</span></p>
                <p><FontAwesomeIcon  icon={faPhone} />  <span className="mx-2">+ 01 234 567 88</span></p>
                <p><FontAwesomeIcon  icon={faPrint} />  <span className="mx-2">+ 01 234 567 89</span></p>
              </div> 
               {/* Suport Column */}
               <div className="col-md-6 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Opening Hours</h6>
                <table className="table text-light p-0 m-0">
                    <tbody>
                      <tr>
                        <td className="m-0 p-0 py-3">
                            <span className="fw-bold">Mon-Thu:</span>
                        </td>
                        <td className="m-0 p-0 py-3">
                            <span> <span>8am - 9pm</span></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="m-0 p-0 py-3">
                            <span className="fw-bold">Fri-Sat:</span>
                        </td>
                        <td className="m-0 p-0 py-3">
                            <span> <span>8am - 1pm</span></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="m-0 p-0 py-3">
                            <span className="fw-bold">Sun:</span>
                        </td>
                        <td className="m-0 p-0 py-3">
                            <span> <span>9am - 10pm</span></span>
                        </td>
                      </tr>
                    </tbody>
                </table>
              </div>
              </div>
            </div>
        </section>

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: "#EBEEF6" }}> © 2024 Copyright:
            <a className="text-dark fw-bold" href="https://mdbootstrap.com/">FoodMart 2024. All right reserved</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
