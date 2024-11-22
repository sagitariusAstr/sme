import React  from 'react';
import {  NavLink } from "react-router-dom";

import {BiLogOut} from "react-icons/bi";





import "bootstrap";




const AdminSidebar = () => {
    


    
    
    
    const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).name;
    

   
  


  
    

    const handleLogout = () => {
        
        localStorage.clear();
        window.location.href = '/';
    }


    
    
    return (<>
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <NavLink className="nav-link" to="/admin">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </NavLink>


                    <NavLink className="nav-link" to="/admin/employees">
                        <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                        Employees
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>


                    <NavLink className="nav-link" to="/admin/products">
                        <div className="sb-nav-link-icon"><i className="fas fa-shopping-cart"></i></div>
                        Products
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    <NavLink className="nav-link" to="/admin/company">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                        Companies
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    {/* <NavLink className="nav-link" to="/admin/testgraph/:id">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                        Test Graph
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink> */}

                    <NavLink className="nav-link" to="/admin/visitreportDisplay">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Extract SME Visit Report
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/salesreportfetch">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                          Extract Sales Report 
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/supervisors">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Supervisors
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/agents">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Agents
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    
                    <NavLink className="nav-link" to="/admin/visitreport">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                          SME Visit Report
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/salesreport">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         EDS Sales Closure Report
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    <NavLink className="nav-link" to="/admin/productinformation">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Product Information
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    
                    
                    <NavLink className="nav-link" to="/admin/register">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Register Users
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    <NavLink className="nav-link" >
                        <span onClick={handleLogout}  ><BiLogOut style={{display:"inline-block"}} /> Logout
                        </span>
                    </NavLink>



                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {loggedin_user}
            </div>
        </nav>
    </>)
}
export default AdminSidebar