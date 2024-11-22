import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./admin.css";
import AdminSidebar from "../../components/admin-sidebar";
import AdminTopNav from "../../components/admin-top";

//css styles
let boundingBox = {
    position:"relative",
    top: "0",
    bottom:"0",
    left:"0",
    right:"0"
 }

 let spacing = {
    paddingTop:"50px"
 }

const AdminLayout = () => {
    
    return (<>
        <AdminTopNav />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <AdminSidebar />
            </div>
            
            <div id="layoutSidenav_content" >
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
    </>)
}

export default AdminLayout;