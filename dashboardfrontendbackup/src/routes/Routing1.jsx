import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import  Main from '../pages/Main';
// import  About from '../pages/About';
import  Employees from '../pages/Employees';
import  Products from '../pages/Products';
import Company from '../pages/Company';
import VisitReport from '../pages/VisitReport';
import AdminLayout from '../pages/layout/admin.layout';
import AdminDashboard from '../pages/admin/admindashboar.page';
import SupervisorDashboard from '../pages/supervisor/supervisordashboard.page';
import SupervisorLayout from '../pages/layout/supervisor.layout';
import AgentLayout from '../pages/layout/agent.layout';
import LoginPage from '../pages/auth/login/login.page';
import "bootstrap/dist/css/bootstrap.min.css"
import RegisterPage from '../pages/auth/register/register.page';
import Supervisors from '../pages/supervisors';
import Agents from '../pages/agents';
import SMEVisitReport from '../pages/visitreportdisplay';
import SalesReport from '../pages/SalesReport';
import SalesReportFetch from '../pages/SalesReportFetch';
import BarChart from '../pages/BarChart';
import ProductInformation from '../pages/productinformation';
import Testgraph from '../pages/testgraph';




const AdminPrivateRoute = ({component}) => {
  let  token = localStorage.getItem("auth_token")
  
  const loggedin_user_role = JSON.parse(localStorage.getItem("auth_user")).role;
  
  if(token && loggedin_user_role === "admin"){
    return component
  }else{
   return <Navigate to="/" />
  }
}

const SupervisorRoute = ({component}) => {
 let token = localStorage.getItem("auth_token")
 
 const loggedin_user_role = JSON.parse(localStorage.getItem("auth_user")).role;

 if(token && loggedin_user_role === "supervisors"){
  return component
 }else{
  return <Navigate to="/" />
 }
}

const AgentRoute = ({component}) => {
  let token = localStorage.getItem("auth_token")
  
  const loggedin_user_role = JSON.parse(localStorage.getItem("auth_user")).role;
 
  if(token && loggedin_user_role === "agents"){
   return component
  }else{
   return <Navigate to="/" />
  }
 }

const Routing = () => {
  return (
    <BrowserRouter>
    
      {/* <SidebarV5> */}
        <Routes>
            {/* <Route path="/" element={<Main />}></Route> */}
            
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/admin" element={<AdminPrivateRoute component={<AdminLayout />} />} >
              <Route index element={<AdminDashboard />}></Route>
              <Route path="employees" element={<Employees />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="company" element={<Company />}></Route>
              <Route path="testgraph/:id" element={<Testgraph />}></Route>
              <Route path="visitreport" element={<VisitReport />}></Route>
              <Route path="supervisors" element={<Supervisors />}></Route>
              <Route path="agents" element={<Agents />}></Route>
              <Route path="visitreportDisplay" element={<SMEVisitReport />}></Route>
              <Route path="salesreport" element={<SalesReport />}></Route>
              <Route path="salesreportfetch" element={<SalesReportFetch />}></Route>
              <Route path="productinformation" element={<ProductInformation />}></Route>
              
              <Route path="register" element={<RegisterPage />}></Route>

            </Route>

            <Route path="/supervisors" element={<SupervisorRoute component={<SupervisorLayout />} />}>
              <Route index element={<SupervisorDashboard />}></Route>
              <Route path="employees" element={<Employees />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="company" element={<Company />}></Route>
              <Route path="visitreport" element={<VisitReport />}></Route>
              <Route path="salesreport" element={<SalesReport />}></Route>
              <Route path="productinformation" element={<ProductInformation />}></Route>
              <Route path="register" element={<RegisterPage />}></Route>
              
            </Route>

            <Route path="/agents" element={<AgentRoute component={<AgentLayout />} />}>
              <Route index element={<SupervisorDashboard />}></Route>
              <Route path="employees" element={<Employees />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="company" element={<Company />}></Route>
              <Route path="visitreport" element={<VisitReport />}></Route>
              <Route path="salesreport" element={<SalesReport />}></Route>
              <Route path="productinformation" element={<ProductInformation />}></Route>
              
            </Route>


        </Routes>
      {/* </SidebarV5> */}

      
    </BrowserRouter>
  )
}

export default Routing