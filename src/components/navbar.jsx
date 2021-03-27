import React, { Component } from 'react';

// Stateless Functional Component
const Navbar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                No. of Items: <span className="badge badge-pill badge-secondary m-2">
                    {props.totalCounters}
                    </span>
                Total Sum: <span className="badge badge-pill badge-secondary m-2">
                    {props.totalSum}
                    </span>
            </a>
        </nav>
    );
}
 
export default Navbar;
