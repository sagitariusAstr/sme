import {React,useState,useMemo, useEffect,useCallback} from 'react'
import { NavLink } from 'react-router-dom'
import DataTable from 'react-data-table-component';
// import { data } from 'autoprefixer';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { getAllDocs,deleteUserById } from './services/user.service';


const Export = ({ onExport }) => <Button variant="outline-warning" onClick={e => onExport(e.target.value)}>Export</Button>;


const Supervisors = () => {
 
  const [show,setShow] = useState(false);
  const[userid,setUserId] = useState();

  let current_role = JSON.parse(localStorage.getItem("auth_user")).role;

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
      
      let response = await deleteUserById(userid);
      if(response.status){
        console.log("Success")
        loadDocs();
      }
    }catch(error){
      console.log(error);
    }
    
  }

  

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
        name: 'Name',
        selector: row => (
          <NavLink style={{textDecoration:'none',color:'black'}} to={`/${current_role}/testgraph/${row.id}`} activeclassname="active-link">
            {row.name}
          </NavLink>
        ),
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

  }
  const handleClose = () => {
    setShow(false)
  }


let [data, setData] = useState([
  {
    id:1,
    name:"Test User",
    email:"test@gmail.com",
    role:"Admin",
    status:"Active",
  }
])

const loadDocs = useCallback(async () => {
  let doc = await getAllDocs();
  
  if(doc){
    
    setData(doc.data.result);
  }
},[])

useEffect(() => {
 loadDocs()
},[])


const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, [data]);


  return (
   <div className="container-fluid px-4">
    <h1 className='mt-4 h1-text-form'> Supervisor List</h1>
    <ol className="breadcrumb mb-4">
        <li className='breadcrumb-item'><NavLink to="/admin" style={{ textDecoration: "none",color:"inherit"}}>Dashboard</NavLink></li>
        <li className='breadcrumb-item active'>Supervisor List</li>
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
            <Modal.Title>Supervisor Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Confirm Deletion</Modal.Body>
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

export default Supervisors