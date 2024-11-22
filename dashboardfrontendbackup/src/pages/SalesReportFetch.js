
import { React, useState, useMemo, useEffect, useCallback} from "react";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import {data} from 'autoprefixer';
import {Button} from 'react-bootstrap';
import { getSalesDocs } from "./services/fetchsales.services";


const Export = ({ onExport }) => <Button variant="outline-warning" onClick={e => onExport(e.target.value)}>Export</Button>;
const SalesReportFetch = () => {

    // function convertArrayOfObjectsToCSV(array) {
    //     let result;
    
    //     const columnDelimiter = ',';
    //     const lineDelimiter = '\n';
    //     const keys = Object.keys(data[0]);
    //     keys.pop();
    //     keys.pop();
    //     result = '';
    //     result += keys.join(columnDelimiter);
    //     result += lineDelimiter;
    
    //     array.forEach(item => {
    //       let ctr = 0;
    //       keys.forEach(key => {
    //         if (ctr > 0) result += columnDelimiter;
    
    //         if(key === "user_id"){
                
    //             //     if(item["User"].name){
    //             //         result += item["User"].name
    //             //     }else{
    //             //         result += item.name;
    //             //     }
    //             //    delete item["User"]
                
    //             result += item.name
    //             delete item["User"]
    //             }
    //             else{
    //                 if(key === "createdAt"){
    //                     let formatted_date = new Date(item[key])
    //                     formatted_date = formatted_date.toISOString().split('T')[0]
    //                     result += formatted_date;
    //                 }else{
    //                     result += item[key];
    //                 }
                    
    //             }
    
    //         ctr++;
    //       });
    //       result += lineDelimiter;
    //     });
    
    //     return result;
    //   }

    
    



  //Implemented double quotation to get rid of comma spacing problem  
    function convertArrayOfObjectsToCSV(array) {        
        let result;
    
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(array[0]);
       
       
        
        keys.pop()
        keys.pop()
       
        result = '';
        result += keys.map(key => `"${key}"`).join(columnDelimiter);
        result += lineDelimiter;
       
        
        
        array.forEach(item => {
            
            let ctr = 0;
            keys.forEach(key => {
                
                if (ctr > 0) result += columnDelimiter;
               
                if(key === "user_id"){
                    
                    // if(item["User"].name){
                    //     result += item["User"].name
                    // }else{
                    //     result += item.name;
                    // }
                    // delete item["User"]
                    
                    result += `"${item.user_id}"`
                    delete item["User"]
                    
                }
                else{
                    if(key === "createdAt"){
                        let formatted_date = new Date(item[key])
                        formatted_date = formatted_date.toISOString().split('T')[0]
                        result += `"${formatted_date}"`;
                    }else if(key === "start_date"){
                        let formatted_date = new Date(item[key])
                        formatted_date = formatted_date.toISOString().split('T')[0]
                        result += `"${formatted_date}"`;
                    }else if(key === "end_date"){
                        let formatted_date = new Date(item[key])
                        formatted_date = formatted_date.toISOString().split('T')[0]
                        result += `"${formatted_date}"`;
                    }
                    else{
                        result += `"${item[key]}"`;
                    }
                    
                }
                
              
    
                ctr++;
            });
            result += lineDelimiter;
            
        });
    
        return result;
    }
    function downloadCSV(array) {
        
          const link = document.createElement('a');
          let csv = convertArrayOfObjectsToCSV(array);
          if (csv == null) return;
      
          const filename = 'SalesClosureReport.csv';
      
          if (!csv.match(/^data:text\/csv/i)) {
              csv = `data:text/csv;charset=utf-8,${csv}`;
          }
      
          link.setAttribute('href', encodeURI(csv));
          link.setAttribute('download', filename);
          link.click();
    }
    
const columns = [
    {
        name:'Name',
        selector: row => (row.User ? row?.User?.name:row.name),
        sortable:true
    },
    {
        name:'Start Date',
        selector:row => row.start_date,
        sortable: true
    },
    {
        name:'End Date',
        selector:row => row.end_date,
        sortable:true
    },
    {
        name:'Company',
        selector:row => row.company,
        sortable:true

    },
    {
        name:'Contact Person',
        selector:row => row.contact_person,
        sortable:true
    },
    {
        name:'Contact Number',
        selector:row => row.contact_number,
        sortable:true
    },
    {
        name:'Plan Sold',
        selector:row => row.product_name,
        sortable:true
    },
    {
        name:'Quantity Sold',
        selector:row => row.quantity,
        sortable:true
    },
    {
        name:'Revenue',
        selector:row => row.revenue,
        sortable:true
    }
]

let [data,setData] = useState([
    {
        name:"Test User",
        start_date:"2023-1-1",
        end_date:"2023-1-1",
        company:"Google",
        contact_person:"Test",
        contact_number:"123456",
        plans_sold:"test",
        quantity:"12",
        revenue:"100"
    }
])

const loadDocs = useCallback(async () => {
    let docs = await getSalesDocs();
    
    if(docs){
        setData(docs.data.result)
    }
},[])

useEffect(() => {
    loadDocs()
   },[])



const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, [data]);

    return(
        <>
           <div className="container-fluid px-4">
                <h1 className="mt-4 h1-text-form">EDS Sales Closure Report</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><NavLink to="/admin" style={{ textDecoration: "none", color: "inherit" }}>Dashboard</NavLink></li>
                    <li className="breadcrumb-item active">EDS Sales Closure</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body" style={{ height: '400px', overflowY: 'scroll' }}>
                        <DataTable 
                            columns={columns}
                            data={data}
                            actions={actionsMemo}
                        />
                    </div>
                </div>
           </div>
        </>
    )
}


export default SalesReportFetch;