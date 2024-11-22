import  {Navlink, Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./supervisor.css";
import SupervisorSidebar from "../../components/supervisor-sidebar";
import AgentSidebar from "../../components/agent-sidebar";
import AdminTopNav from "../../components/admin-top";


const AgentLayout = () =>{
    return (
        <>
                <AdminTopNav />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <AgentSidebar />
            </div>
            
            <div id="layoutSidenav_content">
                <main>
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

export default AgentLayout;