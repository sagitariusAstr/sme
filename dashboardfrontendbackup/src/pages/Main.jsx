import React,{useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
} from "react-bootstrap";
import { Line,Bar,Pie } from 'react-chartjs-2';
import axios from "axios";
import faker from 'faker';

import {useNavigate} from "react-router-dom";







ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


// const baseURL_stocks = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-10-10/2022-10-17?adjusted=true&sort=asc&limit=120&apiKey=w4gd9SMUGaQdWHLecTx7MA8p4MnLljUD";





// <--------------------------Pie chart-------------------->
// export const data_pie = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
















const Main = () => {

  // <-----------------------------------API FETCH OPERATION------------------------------->
// const [post,setPost] = useState([]);
// React.useEffect(() => {
//   axios.get(baseURL_stocks)
//   .then(function (response) {
//     setPost(response.data.results)
//     let stock_data = [];
//     response.data.results.forEach((item) => {
//       stock_data.push(item.h);
//     })
//     console.log(stock_data);
    
   
//   })

//   }, []);
  
  

// <---------------------------------Graph data--------------------------------->
// <-----------------------------Bar Graph-------------------------------->
//  const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Visit Report',
//     },
//   },
//   maintainAspectRatio: false
// };
// const labels = ['January', 'February', 'March', 'April'];
//  const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [20,3,40,5],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data:[30,5,10,60],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };





  
  return (
    
      // <div className='main'>

      //   <div className='main-bar-graph' >
      //     <Bar options={options} width={"1000px"} height={"250px"} data={data} />
      //   </div>
      //   <Container fluid>
      //       <Row>
      //         <Col md='8'>
      //         <Card>
      //           <Card.Header>
      //             <Card.Title as="h4">Supervisors review</Card.Title>
      //             <p className="card-category">24 Hours performance</p>
      //           </Card.Header>
      //           <Card.Body>
      //           <Line options={options} data={data} />
      //           </Card.Body>
      //           <Card.Footer>
      //             <p>Hello from footer</p>
      //           </Card.Footer>

      //         </Card>
      //         </Col>
      //         <Col md='4'>
      //           <Card>
      //             <Card.Header>
      //             <Card.Title as="h4">Users Behavior</Card.Title>
                  
      //             </Card.Header>
      //             <Card.Body className='pie-card'>
      //             <Pie data={data} options={{maintainAspectRatio:false}} />
      //             </Card.Body>
      //           </Card>
      //         </Col>
      //       </Row>
      //   </Container>
       
        
      // </div>
      <>
        <div>
          Hello from Login page
        </div>
      </>




      
    
    
  )
}

export default Main