import { NavLink } from "react-router-dom";
import React, { useEffect, useRef } from 'react';




const AdminTopNav = () => {

  

  const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).name;

  const current_role = JSON.parse(localStorage.getItem('auth_user')).role;
  console.log(current_role);


  const toggleSidebar = (e) => {
    e.preventDefault();

    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
  }

  const sideStyle = {position:"fixed",top:0,left:0,right:0,paddingBottom:"20px"}






  
  return (
    <nav  className="sb-topnav navbar navbar-expand navbar-dark bg-dark" style={sideStyle} >
    <NavLink className="navbar-brand ps-3" to={`/${current_role}`}>SME APP</NavLink>
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={toggleSidebar} href="#!"><i className="fas fa-bars"></i></button>
    <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>


    <div>
      
      <p style={{color:"white",margin:"15px"}}>{loggedin_user}</p>
    </div>



  </nav>
  )
}

export default AdminTopNav;