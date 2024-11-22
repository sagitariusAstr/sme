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
import "../../assets/css/global.css";
import sales_svc from '../services/sales.services';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );


const AdminDashboard = () => {
let [barqty,setqty] = useState([]);
let [barsumdata,setbarsumdata] = useState();
let [barlabel,setbarlabel]= useState([]);
const [dataFetched, setDataFetched] = useState(false);

let [pieqty,setPieQty] = useState([]);
let [piecountdata,setPieCountData] = useState();
let [pielabel,setPieLabel] = useState([]);
const [piedataFetched,setPieDataFetched] = useState(false);

let [lineqty,setLineQty] = useState([]);
let [linesumdata,setLineSumData] = useState();
let [linelabel,setLineLabel] = useState();
let [linedataFetched,setLineDataFetched] = useState(false);


// <------------------bar graph operation--------------->



const loadBarGraphData = useCallback( async () => {
    

    const optBarLabel = barqty.map((item) => item.name)
    const optBarData = barqty.map((item) => item.sum)
  
    setbarlabel(optBarLabel);
  
    const graphData = {
      labels: barlabel,
      datasets: [
        {
          label: 'Dataset 1',
          data: optBarData,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    
      setbarsumdata(graphData);
      if(barlabel && barsumdata){
        setDataFetched(true);
      }
      
    
    
    
    
  }, [barqty, barlabel]);
  
  

const getTotalDataBar = useCallback(async() => {
    try{
        let response = await sales_svc.getTotalQty();
        
        if(response){
          
          setqty(response.data.result)
         
          

          
         }
      }catch(err){
      console.log(err)
    }
  },[barqty])




    

    


    useEffect(() => {
        if (barqty) {
            
            loadBarGraphData();
        }


    }, [barqty, dataFetched]);

    useEffect(() => {
        if (barqty && dataFetched === false) {
            

            getTotalDataBar();

        }
    }, [barqty, dataFetched]);


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Product Information',
            },
        },
    };

    

    // <-----------Pie Chart operation ---------->


    const  loadPieChartData = useCallback(async () => {
        // let optPieLabels = pieqty.map((item) => item.product_name);
        // let optPieData = pieqty.map((item) => item.count);

        const optPieData = pieqty.map((item) => {
            return{
                name:item.product_name,
                count:item.count,
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

    const getPieCountData = useCallback(async() => {
        try{
            let response = await sales_svc.getAgentProductCount();
            
            if(response){
                setPieQty(response.data.result);
            }
        }catch(error){
            console.log(error)
        }
    },[pieqty])







    useEffect(() => {
        if(pieqty){
            loadPieChartData()
        }
    },[pieqty])

    useEffect(() => {
        if (pieqty && piedataFetched === false ) {

            getPieCountData();
        }

    }, [pieqty,piedataFetched]);

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


    // <-----------------------------Line chart operation-------------------------->

       const loadLineChartData = useCallback( async () => {
            // let optLineLabel = lineqty.map((item) => item.date_formatted);
            // let optLineData = lineqty.map((item) => item.total_quantity )
            const optLineData = lineqty.map((item) => {
                return {
                    name:item.date_formatted,
                    count: item.total_quantity,
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
                    
                    let response = await sales_svc.getDateWiseData();
                    
                    if(response){
                        setLineQty(response.data.result);
                        
                    }
                    


                }catch(error){
                    throw error
                }
        },[lineqty])


    useEffect(() => {
        loadLineChartData();
    },[lineqty])

    useEffect(() => {
        if (lineqty && linedataFetched === false) {

            getLineSumData();
        }

    }, [lineqty,linedataFetched])









    

    

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
    
    

      const hrStyle = {marginTop:"15px",marginBottom:"15px"}

    return (<>
         <div className="container-fluid px-4">
            <h1  className="mt-4 h1-text-form">Dashboard</h1>
            <div className="row">
                <div className="col-12">
                    <hr style={hrStyle} />
                    {barsumdata && Object.keys(barsumdata).length > 0 && (
                        <Bar options={options} data={barsumdata} style={{ maxHeight: "300px" }} />
                    )}
                </div>

            </div>
             <div className="row">

                <div className=" col-sm-12 col-lg-6">
                   {piecountdata && <Pie options={pieOpts} data={piecountdata} />} 
                </div>
                <div className="col-sm-12 col-lg-6">
               { linesumdata && <Line options={LineOpts} data={linesumdata} />} 
                </div>
            </div> 
        </div> 



    </>)
}
export default AdminDashboard;