import  {Navlink, Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./supervisor.css";
import SupervisorSidebar from "../../components/supervisor-sidebar";
import AdminTopNav from "../../components/admin-top";


let spacing = {
    paddingTop:"50px",
    
    
 }

const SupervisorLayout = () =>{
    return (
        <>
                <AdminTopNav />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <SupervisorSidebar />
            </div>
            
            <div id="layoutSidenav_content">
                <main style={spacing}>
                    <Outlet />
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright ; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

        </>
            
    )
}

export default SupervisorLayout;