import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {

    var navStyle = {
        width : '500px'
    };

  return (
    <div class="navigation">
      <NavLink to="/" exact activeStyle={ { background:'green' } } >Home</NavLink>
      <NavLink to="/about" exact activeStyle={ { background:'green' } } >About</NavLink>
      <NavLink to="/contact" exact activeStyle={ { background:'green' } } >Contact</NavLink>
    </div>
  );
};

export default Navigation;