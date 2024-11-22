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
  





const BarChart = () => {
let [Cmp,setCmp] = useState();
let [data,setCountData] = useState();
let [labels,setLabel] = useState([]);  



const loadGraphData = useCallback(async() => {
  console.log("Count Data:",Cmp)
  
  
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
    
  
},[Cmp])

const getCountData = useCallback(async() => {
  try{
      let response = await sales_svc.getProductCount();
      if(response){
        console.log(response.data.result);
        setCmp(response.data.result)
        
      }
    }catch(err){
    console.log(err)
  }
},[Cmp])

useEffect(() => {
  getCountData();
},[])

useEffect(()=>{
  if(Cmp){
    console.log(Cmp)
    loadGraphData()
  }
  
},[Cmp])

















    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Product Sold',
          },
        },
    };

   

      return(
        <>
          {
            data && <Pie options={options} data={data} />
    
          }
             
        </>
         

      )
}

export default BarChart