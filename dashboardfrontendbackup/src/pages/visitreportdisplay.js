import { React, useState, useMemo, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { data } from 'autoprefixer';
import { Button } from 'react-bootstrap';
import { getVisitDocs } from "./services/sme.service";
import "../assets/css/global.css";

const Export = ({ onExport }) => <Button variant="outline-warning" onClick={e => onExport(e.target.value)}>Export</Button>;

const SMEVisitReport = () => {
    // function convertArrayOfObjectsToCSV(array) {    
        
    //     let result;
    
    //     const columnDelimiter = ',';
    //     const lineDelimiter = '\n';
    //     const keys = Object.keys(data[0]);
       
    //     console.log("Keys:",keys);
        
    //     keys.pop()
    //     keys.pop()
    //    console.log("Keys",keys)
    //     result = '';
    //     result += keys.join(columnDelimiter);
    //     result += lineDelimiter;
    //    console.log("Result :",result); 
        
       
    //     array.forEach(item => {
    //         console.log("Item :",item)
    //         console.log("Name from Item :",item.name)
    //       let ctr = 0;
    //       keys.forEach(key => {
    //         console.log("Key from loop",key)
    //         if (ctr > 0) result += columnDelimiter;
           
    //         if(key === "user_id"){
                
    //         //     if(item["User"].name){
    //         //         result += item["User"].name
    //         //     }else{
    //         //         result += item.name;
    //         //     }
    //         //    delete item["User"]
            
    //         result += item.name
    //         delete item["User"]
    //         }
    //         else{
    //             if(key === "createdAt"){
    //                 let formatted_date = new Date(item[key])
    //                 formatted_date = formatted_date.toISOString().split('T')[0]
    //                 result += formatted_date;
    //             }else if(key === "date"){
    //                 let formatted_date = new Date(item[key])
    //                 formatted_date = formatted_date.toISOString().split('T')[0]
    //                 result += formatted_date;
    //             }
    //             else{
    //                 result += item[key];
    //             }
                
    //         }
            
          

    //         ctr++;
    //       });
    //       result += lineDelimiter;
    //     });
    
    //     return result;
    //   }

    

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
                    }else if(key === "date"){
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
        
            const filename = 'SMEvisitReport.csv';
        
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
            sortable: true
        },
        {
            name:'Date',
            selector:row => row.date,
            sortable: true
        },
        {
            name:'Company',
            selector:row => row.company,
            sortable: true
        },
        {
            name:'Segment',
            selector:row => row.segment,
            sortable: true
        },
        {
            name:'Remarks',
            selector:row => row.remarks,
            sortable: true
        },

    ]
    let [data, setData] = useState([
        {
          name:"Test User",
          date:"2023-1-16",
          company:"NTC",
          segment:"Private",
          remarks:"test remarks"
        }
      ])
    
    const loadDocs = useCallback(async () => {
        let docs = await getVisitDocs();
        
        if(docs){
            setData(docs.data.result)
            
           
        }
        
    },[])



    useEffect(() => {
        loadDocs()
        
       },[])

    
    const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, [data]);

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4 h1-text-form">SME visit Report</h1>
            <ol className="breadcrumb mb-4">
                <li className='breadcrumb-item'><NavLink to="/admin" style={{ textDecoration: "none", color: "inherit" }}>Dashboard</NavLink></li>
                <li className="breadcrumb-item active">SME visit report</li>
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
    )
}

export default SMEVisitReport;


