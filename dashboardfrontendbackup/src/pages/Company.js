import axios from "axios";
import React, { useState,useCallback,useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { NavLink } from "react-router-dom";
import { getCompanyCount } from "./auth/services/visit.service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const Company = () => {
  
let [Cmp,setCmp] = useState();
let [data,setCountData] = useState();
let [labels,setLabel] = useState([]);  
const [dataFetched,setDataFetched] = useState(false);



  

  

const loadGraphData = useCallback(async() => {
  
  
  
  let optLabels = Cmp.map((item) => item.segment)
  let optData = Cmp.map((item) => item.count)
 
  setLabel(optLabels);

  let graphData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:optData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  }
  setCountData(graphData);
  if(labels && data){
    setDataFetched(true);
  }
    
  
},[Cmp])
 
const getCountData = useCallback(async() => {
  try{
      let response = await getCompanyCount();
      if(response){
        
        setCmp(response.data.result)
        
      }
    }catch(err){
    console.log(err)
  }
},[Cmp])

useEffect(() => {
  if( dataFetched === false){
    getCountData();
  }
  
},[Cmp,dataFetched])

useEffect(()=>{
  if(Cmp){
    
    loadGraphData()
  }
  
},[Cmp,dataFetched])


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Company Visits',
    },
  },
};



 












    


    






  return (
    <>

      <div className="container-fluid px-4">
            <h1 className="mt-4">Company Information
            </h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active">Company List</li>
            </ol>
            <div className="row">
              <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-body">
                    
                    {data && <Bar className="company-Barchart" options={options} data={data} />}
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              <h4>Segment List</h4>
              <hr />
              <table className="table table-sm table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>S.N</th>
                    <th>Segment</th>
                    <th>No of Visits</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Cmp && Cmp.map((item, ind) => (
                      <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{item.segment}</td>
                        <td>{item.count}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
                
              </div>
            </div>
      </div>


          
    </>
   
  )
}

export default Company