import { Link, NavLink } from "react-router-dom";
import {FaTrash,FaPaperPlane} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
import { useNavigate } from "react-router-dom";


import "bootstrap";

const SupervisorSidebar = () => {
    let navigate = useNavigate();

    const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).name;
    const current_role = JSON.parse(localStorage.getItem("auth_user")).role;

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }


    return (
        <>
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <NavLink className="nav-link" to="/supervisors">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </NavLink>


                    {/* <NavLink className="nav-link" to="/supervisors/employees">
                        <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                        Employees
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>


                    <NavLink className="nav-link" to="/supervisors/products">
                        <div className="sb-nav-link-icon"><i className="fas fa-shopping-cart"></i></div>
                        Products
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    <NavLink className="nav-link" to="/supervisors/company">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                        Companies
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink> */}

                    <NavLink className="nav-link" to="/supervisors/visitreport">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Visit Report
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>
                    
                    
                    <NavLink className="nav-link" to="/supervisors/salesreport">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Sales Report
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    <NavLink className="nav-link" to="/supervisors/productinformation">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Product Information
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
                    </NavLink>

                    <NavLink className="nav-link" to="/supervisors/register">
                        <div className="sb-nav-link-icon"><i className="fas fa-companies"></i></div>
                         Register Agents
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
        </>
    )
}


export default SupervisorSidebar