import react, { useCallback, useEffect,useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import feasibility_svc from './services/feasibility.services';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';
import { getAllUsers } from './services/user.service';
import "../assets/css/global.css";


const FeasibilityReport = () => {
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
                    console.log("Map Link :", mapLink)
                    mapLink && setLat(latitude);
                    mapLink && setLong(longitude);
                    console.log(`Latitude = ${lat} and Longitude = ${long}`)
                    
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
            feasibility_sent_date: null,
            customer_name: null,
            address: null,
            district:null,
            service_type:null,
            bandwidth_primary:null,
            latitude:null,
            longitude:null,
            site_id:null,
            site_latitude:null,
            site_longitude:null,
            distance:null,
            l1_status:null,
            l1_reason:null,
            l1_completion_date:null,
            port_info:null,
            l2_remarks:null,
            l2_reason:null,
            customer_contact_name:null,
            contact_number:null,
            mail:null,
            sam:null

        },
        validationSchema: null,
        onSubmit: async (values) => {
            try {
                values.latitude = lat;
                values.longitude = long;
                
                console.log("Values",values)
               




                
                let response = await visit_svc.visit(values)
                const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).role;
                navigate('/'+loggedin_user);
            } catch (err) {
                throw err
            }

        }
    })

    const loadusers = useCallback(async () => {
        let doc = await getAllUsers();
        let list = [];
        
        const list_of_names = doc.data.result;
        
        Setallusers(list_of_names);
        
        
    },[])

    
    useEffect(() => {
       loadusers()
    },[])

    const hrStyle = {marginTop:"15px",marginBottom:"15px"}


    return(
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

                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Date:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            name="feasibility_sent_date"
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
                                    <Col as='label' sm={3} className="form-label">Customer Name:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="customer_name"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter Customer's Name"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Address:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="address"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter Address"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Mention District:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="district"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter District"
                                        >

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className='row mb-3'>
                                    <Col as='label' sm={3} className="form-label">Service Type:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name="service_type"
                                            onChange={formik.handleChange}
                                            required
                                            placeholder="Enter Service Type"
                                        >

                                        </Form.Control>
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

export default FeasibilityReport;