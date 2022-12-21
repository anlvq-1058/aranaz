import React from "react";
import logo from "../img/logo.png"

function Header() {
  return(
    <>
      <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html"> <img src={logo} alt="logo"/> </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="navbar-collapse main-menu-item collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <a className="dropdown-item" href="category.html"> shop category</a>
                                        <a className="dropdown-item" href="single-product.html">product details</a>
                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <a className="dropdown-item" href="login.html"> login</a>
                                        <a className="dropdown-item" href="tracking.html">tracking</a>
                                        <a className="dropdown-item" href="checkout.html">product checkout</a>
                                        <a className="dropdown-item" href="cart.html">shopping cart</a>
                                        <a className="dropdown-item" href="confirmation.html">confirmation</a>
                                        <a className="dropdown-item" href="elements.html">elements</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        blog
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                        <a className="dropdown-item" href="blog.html"> blog</a>
                                        <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                    </div>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hearer_icon d-flex">
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="search_input" id="search_input_box" style={{display: "none"}}>
          <div className="container ">
              
          </div>
        </div>
      </header>
    </>
  );
}

export default Header