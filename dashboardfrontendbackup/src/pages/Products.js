import {React, useCallback, useEffect,useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';
// import { getCompanyCount } from "./auth/services/visit.service"
import sales_svc from './services/sales.services';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );






const Products = () => {
let [Cmp,setCmp] = useState();
let [data,setCountData] = useState();
let [labels,setLabel] = useState([]);  
const [dataFetched, setDataFetched] = useState(false); 

const loadGraphData = useCallback(async() => {
  
  
  
  let optLabels = Cmp.map((item) => item.product_name)
  let optData = Cmp.map((item) => item.count)
 
  setLabel(optLabels);

  let graphData = {
    labels,
    datasets: [
      {
        label: 'Products Sold',
        data:optData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,

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
      let response = await sales_svc.getProductCount();
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
    maintainAspectRatio: false	// Don't maintain w/h ratio
  }

  return (
    <>


      <div className="container-fluid px-4">
        <div className="row">
          <div className="col">
          <h1 className="mt-4">Product Performance



          </h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            Dashboard
          </li>
          <li className="breadcrumb-item active">Product List</li>
          </ol>
          </div>
        </div>


        <div className="row">
        <div className="col-sm-12 col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                  {
                    data && <Pie
                      data={data} />
                  }
                
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <h4>Product Lists</h4>
            <hr />
            <table className="table table-sm table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>No. Of Sales</th>
                </tr>
              </thead>
              <tbody>
                {
                  Cmp && Cmp.map((item, ind) => (
                    <tr key={ind}>
                      <td>{ind+1}</td>
                      <td>{item.product_name}</td>
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

export default Products