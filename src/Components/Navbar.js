import React from "react";

const Navbar = () => {
    return (
         <nav id='navbar' className="navbar px-1 navbar-primary " style={{ background: 'black', color: 'white', zIndex: '1', position: 'sticky', top: '0' }}   >
    <div className="container-fluid">
        <a href='/' className="navbar-brand text-dark bg-info rounded-3 px-2" >
            Images
        </a>

        <div className="justify-content-end " >
            <ul className="navbar-nav ">
                <li className="nav-item ">
                <a className="nav-link p-1 text-white rounded-2 mx-1" href='/' >Login </a>
                
                </li>
            </ul>
        </div>
    </div>
</nav> 
    );
}

export default Navbar;
