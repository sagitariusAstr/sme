import { React, useState, useMemo, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import { data } from 'autoprefixer';
import { Button } from 'react-bootstrap';
import { getAgents } from './services/user.service';
import { deleteAgentById } from './services/user.service';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/global.css";


const Export = ({ onExport }) => <Button variant="outline-warning" onClick={e => onExport(e.target.value)}>Export</Button>;

const Agents = () => {
    const [show,setShow] = useState(false);
    const[userid,setUserId] = useState();
    function convertArrayOfObjectsToCSV(array) {
        let result;

        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach(item => {
            let ctr = 0;
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];

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

        const filename = 'Supervisors.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }

    const handleDelete = async () => {
        setShow(false);
        
       try{
        
        let response = await deleteAgentById(userid);
        if(response.status){
            console.log("Success")
            loadDocs();
            
        }
       }catch(error){
        console.log(error)
       }

    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Role',
            selector: row => row.role,

        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => <><Button onClick={(e) => handleShow(row.id)} variant="outline-warning" size="sm">Delete</Button></>,
        },


    ];


   
   
    const handleShow = (id) =>{
        setShow(true);
        setUserId(id)
        console.log(id);
        

    } 


    const handleClose = (x) => {
        setShow(false);
        console.log("only close operation was performed")
        

       
    }






    


    
    let [data, setData] = useState([
        {
            name: "Test User",
            email: "test@gmail.com",
            role: "Admin",
            status: "Active",
        }
    ])

    const loadDocs = useCallback(async () => {
        let doc = await getAgents();

        if (doc) {
            setData(doc.data.result);
        }
    }, [])


    useEffect(() => {
        loadDocs()
    }, [])

    const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, [data]);
    
    return (
        <div className="container-fluid px-4">
         <h1 className='mt-4 h1-text-form'> Agent List</h1>
         <ol className="breadcrumb mb-4">
             <li className='breadcrumb-item'><NavLink to="/admin" style={{ textDecoration: "none",color:"inherit"}}>Dashboard</NavLink></li>
             <li className='breadcrumb-item active'>Agent List</li>
         </ol>
         <div className='card mb-4'>
           <div className='card-body'>
               <DataTable 
                 columns={columns}
                 data={data}
                 actions={actionsMemo}
               />
           </div>
         </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agent Delete Operation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm deletion?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
       )


}

export default Agents
