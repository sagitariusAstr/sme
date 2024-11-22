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
import { Bar, Pie, Line } from "react-chartjs-2";
import "../assets/css/global.css";
import { useParams } from 'react-router-dom';
import sales_svc from './services/sales.services';
import fetchreport_svc from './services/sme.service';
import fetchsales_svc from './services/fetchsales.services';
import { getUsersById } from './services/user.service';
import { Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// let current_role = JSON.parse(localStorage.getItem("auth_user")).role;

export let liststyle = {
  margin: '10px'
}

const Testgraph = () => {
  let [pieqty, setPieQty] = useState([]);
  let [piecountdata, setPieCountData] = useState();
  let [pielabel, setPieLabel] = useState([]);
  const [piedataFetched, setPieDataFetched] = useState(false);

  let [lineqty, setLineQty] = useState([]);
  let [linesumdata, setLineSumData] = useState();
  let [linelabel, setLineLabel] = useState();
  let [linedataFetched, setLineDataFetched] = useState(false);

  let [name,setName] = useState();

  let [visitdata,SetVisitData] = useState(0);
  let [salesdata,setSalesData] = useState(0);
  
  let [data,setData] = useState();
  



  const { id } = useParams();



  // Pie Chart operation

  const  loadPieChartData = useCallback(async () => {
   
    const optPieData = pieqty.map((item) => {
        return{
            name:item.product_name,
            count:item.total,
        }
    })

    setPieLabel(optPieData.map((item) =>item.name ))

    let pieChartData = {
        labels:pielabel,
        datasets: [
          {
            label: 'Products Sold',
            data:optPieData.map((item) => item.count),
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
    setPieCountData(pieChartData)
    if(pielabel && piecountdata){
        setPieDataFetched(true);
    }
},[pieqty,pielabel]);


  const getPieCountData = useCallback( async () => {
    try{
      
      let response = await sales_svc.getIdwiseData(id);
      
      if(response){
        setPieQty(response.data.result);
        
      }
    }catch(error){
      console.log(error)
    }
  },[pieqty])


  useEffect(() => {
    if(pieqty && piedataFetched === false){
      getPieCountData();
    }
  },[pieqty,piedataFetched])

  useEffect(() => {
    if(pieqty){
      loadPieChartData()
    }
  },[pieqty])

  const pieOpts =  {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pie Information',
        },
    },
};



// <---------------------line graph operation--------------->

const loadLineChartData = useCallback( async () => {
  // let optLineLabel = lineqty.map((item) => item.date_formatted);
  // let optLineData = lineqty.map((item) => item.total_quantity )
  const optLineData = lineqty.map((item) => {
      return {
          name:item.month,
          count: item.total_sales,
      }
      
  })

  setLineLabel(optLineData.map((item) => item.name));
  const labels=linelabel
  const Linedata = {
      labels,
      datasets: [
          {
              label: 'Dataset 1',
              data: optLineData.map((item) => item.count),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
      ],
  };
  setLineSumData(Linedata);
  if(linelabel && linesumdata){
      setLineDataFetched(true);
  }


},[lineqty,linelabel])

const getLineSumData = useCallback(async () => {
  try{    
      
      let response = await sales_svc.getIdwisePerformanceData(id);
     
      
      if(response){
          setLineQty(response.data.result);
          
      }
      


  }catch(error){
      throw error
  }
},[lineqty])


useEffect(() => {
  if (lineqty && linedataFetched === false) {

      getLineSumData();
  }

}, [lineqty,linedataFetched])

useEffect(() => {
  loadLineChartData();
},[lineqty])

const LineOpts = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


// <--------------------FETCH USER BY ID------------------->
 
const loaduser = useCallback ( async () => {
  const response = await getUsersById(id)
  
  setName(response.data.result.name)

})

useEffect(() => {
  loaduser()
})



//<------------Fetch total visits for specific id--------------->
let [visitboolean,setVisitBoolean] = useState(false)

const fetchtotalvisitsbyid = useCallback( async () => {
  
  let response = await fetchreport_svc.getTotalVisitsIdwise(id);
  if(response.data && response.data.result && response.data.result.length > 0){
    SetVisitData(response.data.result[0].count);
  }else{
    SetVisitData(0)
  }


  if(visitdata){
    setVisitBoolean(true)
  }
  
  

})


useEffect(() => {
  if(visitboolean === false){
    fetchtotalvisitsbyid();
  }
  
},[visitboolean])





//<--------------------------------Fetch total sales for an ID--------------------------------->

const fetchtotalsalesbyid = useCallback(async () => {
  let response = await fetchsales_svc.getTotalSalesquantityIdwise(id);
   if(response){
    if(response.data && response.data.result && response.data.result.length > 0){
      setSalesData(response.data.result[0].total_quantity)
    }else{
      setSalesData(0)
    }
    
   }
})


useEffect(() => {
  fetchtotalsalesbyid();
})



//<---------------------FETCH EXCEL FILE--------------------------->

//<------------------------Visit Data------------------------------->

const exportToExcel = () => {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Create a new worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

 const startRow = 2;
 
 const ref = worksheet['!ref'];
const range = XLSX.utils.decode_range(ref);
const length_sheet = range.e.r;

for(let row = startRow; row <= length_sheet + 1; row++ ){
  let cellPosition = `G${row}`;
  let cell = worksheet[cellPosition];
  let dateValue = cell.v;
  let formatted_date = new Date(dateValue).toISOString().split('T')[0];
  cell.v = formatted_date;
  cell.t = 's';

}





  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Data');

  // Save the workbook as an Excel file
  XLSX.writeFile(workbook, 'visit_data.xlsx');

 
};


const fetchTotalData = useCallback( async () => {
  let response = await fetchreport_svc.getAllVisitDatas(id);
  
  setData(response.data.result);
})

useEffect(() => {
  fetchTotalData();
},[])



//<---------------------------Sales Data----------------------------------->

const [totalsales,setTotalSales] = useState();
let [salesboolean,setSalesBoolean] = useState(false);

const exportSalesExcel = () => {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Create a new worksheet
  const worksheet = XLSX.utils.json_to_sheet(totalsales);

 
 
 






  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Data');

  // Save the workbook as an Excel file
  XLSX.writeFile(workbook, 'SALES_data.xlsx');

}

const fetchtotalsalesdata = useCallback ( async () => {
  let response = await fetchsales_svc.getTotalSales(id);
  
  if(response.data.result){
    setTotalSales(response.data.result)
  }
  if(totalsales){
    setSalesBoolean(true)
  }
})


useEffect(() => {
  if( salesboolean === false){
    fetchtotalsalesdata()
  }
  
},[salesboolean])







  return (



   
    <div className='container-fluid px-4'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-4'>{name}</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              Dashboard
            </li>
            <li className="breadcrumb-item active">Supervisor 
            details</li>
          </ol>
        </div>
      </div>
      <div className='row'>
        <div className="col-sm-12 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                {piecountdata && <Pie options={pieOpts} data={piecountdata} />} 

                  
                </div>
              </div>
        </div>
        <div className="col-sm-12 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                { linesumdata && <Line options={LineOpts} data={linesumdata} />} 
               
                  
                </div>
              </div>
              <div>
                <ul style={{display:"flex",margin:"46px 10px",padding:"22px 39px"}}>
                  <li style={liststyle}><Button onClick={exportToExcel} variant="outline-warning">Export Visit Report</Button></li>
                  <li style={liststyle}><Button onClick={exportSalesExcel} variant="outline-warning">Export Sales Report</Button></li>
                </ul>
              </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
        <table className="table table-sm table-bordered table-hover">
                <thead className="table-dark">
                  <tr style={{textAlign:'center'}}>
                    
                    <th>Category</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                  
                    <td>Visits</td>
                    <td>{visitdata}</td>
                    
                  
                </tbody>
                <tbody style={{textAlign:'center'}}>
                  
                    <td>Sales</td>
                    <td>{salesdata}</td>
                    
                  
                </tbody>
              </table>
        </div>
      </div>


    </div>
  )
}

export default Testgraph