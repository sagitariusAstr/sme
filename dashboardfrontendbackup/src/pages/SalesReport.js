import react, {useState,useCallback,useEffect} from "react";
import {Container,Row,Col,Form,Button} from "react-bootstrap";
import { useFormik } from "formik";
import sales_svc from "./services/sales.services";
import { useNavigate } from "react-router-dom";
import { FaTrash,FaPaperPlane } from "react-icons/fa";
import { getAllDocs,getAllUsers } from './services/user.service';
import "../assets/css/global.css";

function Sales() {
    const current_user = JSON.parse(localStorage.getItem("auth_user"))
    const [allusers,Setallusers] = useState();
    const[lat,setLat] = useState();
    const[long,setLong] = useState();
    const navigate = useNavigate();

    //implementing geo location api
    const getLocation = () => {
        const mapLink = {};
                mapLink.href = "";
                mapLink.textContent = "";

                function success(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    
                    // status.textContent = "";
                    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
                    
                     setLat(latitude);
                     setLong(longitude);
                    
                    
                }

                function error() {
                    console.log("Error from geo location")
                }

                if (!navigator.geolocation) {
                   console.log("Geolocation is not supported by your browser");
                } else {
                    console.log("Loading");
                    navigator.geolocation.getCurrentPosition(success, error);
                }
    }




  
    let formik = useFormik({
        initialValues:{
            user_id:current_user.id,
            name:null,
            role:null,
            latitude:null,
            longitude:null,
            start_date:null,
            end_date:null,
            company:null,
            contact_person:null,
            contact_number:null,
            product_name:null,
            quantity:null,
            revenue:null,
            

        },
        validationSchema: null,
        onSubmit : async (values) => {
            try{
                values.latitude = lat;
                values.longitude = long;
                let response = await sales_svc.sales(values)
                
                
                const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).role;
                navigate("/"+loggedin_user)
            }catch(err){
                throw err
            }
        }
    })

    // let [data,setData] = useState([])
    // const loadSupervisors = useCallback(async () => {
    //     let doc = await getAllDocs();
    //     let list = [];
        
    //     const list_of_names = doc.data.result;
        
    //     const extractedData = list_of_names.map(item => ({
    //         value: item.name,
    //         label: item.name,
    //       }));
    //     setData(extractedData);
        
        
    // },[])

    
    // useEffect(() => {
    //     loadSupervisors()
    // },[])

    const loadusers = useCallback(async () => {
        if(current_user.role === "admin"){
            let doc = await getAllUsers();
            let list = [];
            
            const list_of_names = doc.data.result;
            
            Setallusers(list_of_names);
        }else{
            Setallusers(0)
        }
        
        
        
        
    },[])

    
    useEffect(() => {
       loadusers()
    },[])

    const list_products = [
        {
            id: 1,
            name: "Biz 189"
        },
        
        {
            id: 2,
            name: "Biz 259"
        },
        {
            id: 3,
            name: "Biz 389"
        },
        {
            id: 4,
            name: "Biz 649"
        }, 
        {
            id: 5,
            name: "Biz 909"
        },
        {
            id : 6,
            name : "Student Plan"
        },
        {
            id : 7,
            name : "Biz 299"
                
        },
        {
            id:8,
            name: " Biz 499"
        },
        {
            id:9,
            name: " Biz 149 "
        },
        {
            id:10,
            name: "Internet"
        }
]

const hrStyle = {marginTop:"15px",marginBottom:"15px"}
    
    return(
        <>
            <div className='form-bg'>
                <Container className='form-container'>
                    <Row>
                        <Col sm={12} md={{ offset: 2, span: 8 }} className={'mt-5 '}>
                            <Col as={"h4"} className="text-center mt-3  h1-text-form">EDS Sales Closure Report</Col>
                            <hr style={hrStyle} />
                            <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="row mb-3">
                                <Col as='label' sm={3} className="form-label">Latitude:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="latitude"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={lat}
                                            readOnly={true}
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="row mb-3">
                                <Col as='label' sm={3} className="form-label">Longitude:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="longitude"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={long}
                                            readOnly={true}
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Button size="sm" onClick={getLocation} variant='custom' className="location-btn">

                                    <FaPaperPlane className="button-icon" />
                                    Get Location


                                </Button>

                                
                            {current_user.role === "admin" ?
                                    <Form.Group className="row mb-3">
                                        <Col as='label' sm={3} className="form-label">Name:</Col>
                                        <Col sm={9}>
                                            <Form.Select size="sm" name="user_id" onChange={formik.handleChange} required>
                                                <option>
                                                    --Select Your Name--
                                                </option>
                                                {allusers && allusers.map(option => (
                                                    <option key={option.value} value={option.id}>
                                                        {option.name}
                                                    </option>
                                                ))}
                                                {/* <option>
                                            {current_user.name}
                                        </option> */}
                                            </Form.Select>
                                        </Col>
                                    </Form.Group> : <></>

                                }
                                <Form.Group className="row mb-3">
                                        <Col as='label' sm={3} className="form-label">Role:</Col>
                                        <Col sm={9}>
                                            <Form.Select size="sm" name="role" onChange={formik.handleChange} required>
                                                <option>
                                                    --Select Your Role--
                                                </option>
                                                <option>
                                                    Agent
                                                </option>
                                                <option>
                                                    Supervisor
                                                </option>
                                                
                                                
                                            </Form.Select>
                                        </Col>
                                </Form.Group>

                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Start Date:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="start_date"
                                            type="date"
                                            onChange={formik.handleChange}
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">End Date:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="end_date"
                                            type="date"
                                            onChange={formik.handleChange}
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Company:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="company"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter Company"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Contact Person:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="contact_person"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the details of the contact person"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Contact Number:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="contact_number"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the contact details"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Product Name:</Col>
                                    <Col sm={9}>
                                        <Form.Select
                                            size="sm"
                                            type="text"
                                            name="product_name"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the contact details"
                                        >
                                            <option>
                                                    --Select Your Product--
                                            </option>
                                            {
                                                    list_products.map(option => (
                                                        <option>
                                                            {option.name}
                                                        </option>
                                                    ))
                                            }

                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Quantity:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="number"
                                            name="quantity"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the contact details"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Revenue:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="revenue"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the contact details"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                               

                                <Form.Group className="row mb-3">
                                    <Col sm={{ offset: 3, span: 9 }}>
                                        <Button size="sm" type="reset" variant='custom' className="me-3 reset-btn" >

                                            <FaTrash className="button-icon" />


                                            Clear Form
                                        </Button>
                                        <Button size="sm" type="submit" variant='custom' className="login-btn">

                                            <FaPaperPlane className="button-icon" />
                                            Send


                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default Sales;
