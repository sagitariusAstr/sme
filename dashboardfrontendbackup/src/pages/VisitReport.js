import react, { useCallback, useEffect,useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import visit_svc from './auth/services/visit.service';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';
import { getAllUsers } from './services/user.service';
import "../assets/css/global.css";



const VisitReport = () => {
    const current_user = JSON.parse(localStorage.getItem("auth_user"));
    

    const [allusers,Setallusers] = useState();
    const[lat,setLat] = useState();
    const[long,setLong] = useState();
    const navigate = useNavigate();
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
                    
                    mapLink && setLat(latitude);
                    mapLink && setLong(longitude);
                    
                    
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
        initialValues: {
            user_id:current_user.id,
            name:null,
            role:null,
            latitude:null,
            longitude:null,
            date:null,
            company: null,
            opportunity:null,
            account_type:null,
            phone_number:null,
            contact_person:null,
            segment: null,
            remarks: null
        },
        validationSchema: null,
        onSubmit: async (values) => {
            try {
                values.latitude = lat;
                values.longitude = long;
                
                
               




                
                let response = await visit_svc.visit(values)
                const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).role;
                navigate('/'+loggedin_user);
            } catch (err) {
                throw err
            }

        }
    })

    

    

    // const loadSupervisors = useCallback(async () => {
    //     let doc = await getAllDocs();
    //     let list = [];
    //     console.log(doc.data.result);
    //     const list_of_names = doc.data.result;
    //     console.log(list_of_names)
    //     const extractedData = list_of_names.map(item => ({
    //         value: item.name,
    //         label: item.name,
    //       }));
    //     setData(extractedData);
        
        
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

    
    
    const hrStyle = {marginTop:"15px",marginBottom:"15px"}
    const list_products = [
        {
            id: 1,
            name: "Bizlite"
        },
        
        {
            id: 2,
            name: "Internet"
        },
        {
            id: 3,
            name: "SME Biz Plan"
        },
        
]

    return (
        <>
            <div className='form-bg'>
                <Container className='form-container'>
                    <Row>
                        <Col sm={12} md={{ offset: 2, span: 8 }} className={'mt-5 '}>
                            <Col as={"h4"} className="text-center mt-3 h1-text-form">Visit Report</Col>
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
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Role:</Col>
                                    <Col sm={9}>
                                        <Form.Select size="sm" name="role" onChange={formik.handleChange} required>
                                            <option>
                                                --Select Your Role--
                                            </option>
                                            
                                            <option>
                                                Supervisor
                                            </option>
                                            <option>
                                                Agent
                                            </option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Date:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="date"
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
                                    <Col as='label' sm={3} className="form-label">Product opportunity:</Col>
                                    <Col sm={9}>
                                        <Form.Select
                                            size="sm"
                                            type="text"
                                            name="opportunity"
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
                                    <Col as='label' sm={3} className="form-label">Account Type:</Col>
                                    <Col sm={9}>
                                        <Form.Select size="sm" name="account_type" onChange={formik.handleChange} required>
                                            <option>
                                                --Hot or Cold--
                                            </option>
                                            
                                            <option>
                                                Hot
                                            </option>
                                            <option>
                                                Cold
                                            </option>
                                        </Form.Select>
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
                                            placeholder="Enter Contact Person's name"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Phone Number:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="phone_number"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter the phone number"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Segment:</Col>
                                    <Col sm={9}>
                                        <Form.Select size="sm" name="segment" onChange={formik.handleChange} required>
                                            <option>
                                                --Type Of Company--
                                            </option>
                                            <option>
                                                Government
                                            </option>
                                            <option>
                                                Private
                                            </option>
                                            <option>
                                                IT company
                                            </option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Remarks:</Col>
                                    <Col sm={9}></Col>

                                    <Form.Control
                                        size="sm"
                                        as="textarea"
                                        name="remarks"
                                        onChange={formik.handleChange}
                                        required
                                        placeholder="..."
                                    >

                                    </Form.Control>
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

export default VisitReport;