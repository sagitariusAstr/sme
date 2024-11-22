import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

// using tester database in databaseDB directory
const baseURL_people = "http://localhost:9000/people";
const baseURL_product = "http://localhost:9000/product";



const Graph = () => {
// call api look after axios fetch data

const [post, setPost] = React.useState([]);
    React.useEffect(() => {
      axios.get(baseURL_product)
      .then(function (response) {
        setPost(response.data)
        
       
      })
      
      .then(function () {
        // always executed
      });
      }, []);
      
      const graphDataSales = [];
      const graphDataNames = [];
      post.forEach(function(item){
          
          graphDataSales.push(item.Sales)
          graphDataNames.push(item.Name)
      });
    if (!post) return null;







// ---------------------------------------------------GRAPH DATA----------------------------------------
const data = {
  labels: graphDataNames,
  datasets: [
    {
      label: '# of Votes',
      data: graphDataSales,
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
};

  return(
    <>
    <div style={{ height:'300px',width:'300px',margin:'0 auto' }}>
			<Pie data={data} />
    </div>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Sales
              </th>
              
            </tr>
          </thead>
          {post.forEach((item) => {
                <tbody>
            
                  <tr class="border-b">
                  
                    
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.Name}
                      {console.log(item.Name)}
                  </td>
                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.Sales}
                  {console.log(item.Sales)}
                 </td>
                  </tr>
              </tbody>


          })} 
          
        </table>
      </div>
    </div>
  </div>
</div>
    
    </>
    
    
    
    
    
  );
}

export default Graph;