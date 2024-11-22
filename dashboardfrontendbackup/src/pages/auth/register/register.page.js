import { Container,Row,Col,Form,Button } from "react-bootstrap";
import {FaTrash,FaPaperPlane} from "react-icons/fa";
import "./register.css";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import auth_svc from "../services/auth.service";
import "../../../assets/css/global.css"

const RegisterPage = () => {
    const current_role = JSON.parse(localStorage.getItem('auth_user')).role
    const navigate = useNavigate();
    let formik = useFormik({
        initialValues:{
            name:null,
            email:null,
            msisdn:null,
            password:null,
            role:null,
            distributor:null,
            status: "active",
            image: null,
            
        },
        validationSchema:  null,
        onSubmit : async (values) => {
           try{
            let response = await auth_svc.register(values);
                navigate('/'+current_role);
           }catch(err){
            throw err
           }
        }
    })
    const list_distributor = ["Galaxy Digital world",
        "Digital Tele World",
        "Shiraaz International Pvt. Ltd.",
        "Manokamana suppliers",
        "N. S. Trade",
        "AARWART MONEY TRANSFER",
        "Jai Mata di Traders",
        "Dhading Training Express Pvt. Ltd.",
        "Bhattarai Enterprises",
        "Kusheshwar Enterprises",
       " R.R. Innovatives",
       " Efix Nepal Pvt. Ltd.",
        "Monica Digital",
        "D. R suppliers",
        "OM Sai Trading and Suppliers Pvt. Ltd",
       " Unique Traders",
        "G.D. Innovative Private Limited",
        "Chapagain Trade House",
        "Triple Eight Trading Concern",
        "Gaurav Traders",
        "New B.P. Suppliers",
        "Prime Access Pvt. Ltd.",
        "Global H.R. Traders Pvt. Ltd.",
        "Digital Online Pvt. Ltd.",
        "Surkhet Sanchar Sewa Kendra",
        "Prinsa and Aawart Trading Pvt. Ltd.",
        "S.N Brothers",
        "Easy Solution",
        "Dulari Koshi Trading",
        "Star Ad. Services",
        "Digitek.com.np Pvt. Ltd.",
        "Abha trading",
        "Fusion E-mart",
        "Satellite Nepal Pvt. Ltd.",
        "Mobillon Trade Intl. Pvt. Ltd.",
        "Digital Trade Company",
        "Hamro Store Company Pvt. Ltd.",
        "Ohm Solution Pvt. Ltd",
        "D&D Trading Concern Private Limited",
        "Kantipur Management Private Limited",
    ];

        












    const hrStyle = {marginTop:"15px",marginBottom:"15px"}
    return(
        <>
            <div className="register-bg">
                   <Container className="registration-container">
                        <Row style={{paddingBottom:"31px"}}>

                            <Col sm={12} md={{offset:2,span:8}} className={"mt-5 bg-light registration-box"} style={{borderRadius:"8px"}}>
                                <Col as={"h4"} className="text-center mt-3 h1-text-form ">Registration Page</Col>
                                <hr style={hrStyle} />
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Name:</Col>
                                            <Col sm={9}>
                                                <Form.Control
                                                    size="sm"
                                                    type="text"
                                                    name="name"
                                                    onChange={formik.handleChange}
                                                    required
                                                    placeholder="Enter your Full name..."
                                                >
                                                
                                                </Form.Control>
                                                <span className="text-danger">{formik.errors?.name}</span>
                                            </Col>
                                    </Form.Group>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Email:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                required
                                                placeholder="Enter your email"
                                            >

                                            </Form.Control>
                                            
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">MSISDN No:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                name="msisdn"
                                                onChange={formik.handleChange}
                                                required
                                                placeholder="Enter your MSISDN No"
                                            >

                                            </Form.Control>
                                            
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Password:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="password"
                                                name="password"
                                                onChange={formik.handleChange}
                                                required
                                                placeholder="Enter your password"
                                            >

                                            </Form.Control>
                                            <span className="text-danger">{formik.errors?.password}</span>
                                        </Col>
                                    </Form.Group>
                                    { current_role === "admin" ?
                                        <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Role:</Col>
                                        <Col sm={9}> 
                                            <Form.Select size="sm" name="role" required onChange={formik.handleChange}>
                                                <option>
                                                    --Select Any One--
                                                </option>
                                                <option value="supervisors">
                                                    Supervisor
                                                </option>
                                                <option value="agents">
                                                    Agents
                                                </option>
                                            </Form.Select> 
                                            <span className="text-danger">{formik.errors?.role}</span>
                                        </Col>
                                    </Form.Group> :
                                        <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Role:</Col>
                                        <Col sm={9}> 
                                            <Form.Select size="sm" name="role" required onChange={formik.handleChange}>
                                                <option>
                                                    --Select Any One--
                                                </option>
                                                
                                                <option value="agents">
                                                    Agents
                                                </option>
                                            </Form.Select> 
                                            <span className="text-danger">{formik.errors?.role}</span>
                                        </Col>
                                    </Form.Group>
                                    }

                                    <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Distributor:</Col>
                                            <Col sm={9}>
                                            <Form.Select size="sm" name="distributor" required onChange={formik.handleChange}>
                                                <option>
                                                    --Select Any One--
                                                </option>
                                                {
                                                    list_distributor.map(i => (
                                                        <option>
                                                            {i}
                                                        </option>
                                                    ))
                                                }
                                                
                                            </Form.Select>
                                                <span className="text-danger">{formik.errors?.distributor}</span>
                                            </Col>
                                    </Form.Group>
                                    
                                    
                                    
                                    {/* <Form.Group className="row mb-3">
                                        <Col as="label" sm={3} className="form-label">Image:</Col>
                                        <Col sm={9}>
                                            <Form.Control
                                                size="sm"
                                                type="file"
                                                name="image"
                                                onChange = {(e) => (
                                                    formik.setValues({
                                                        ...formik.values,
                                                        image: e.target.files[0]
                                                    })
                                                )}
                                                
                                                placeholder="Enter your email"
                                            >

                                            </Form.Control>
                                            <span className="text-danger">{formik.errors?.image}</span>
                                        </Col>
                                    </Form.Group> */}
                                    <Form.Group className="row mb-3">
                                        <Col sm={{offset: 3, span :9}}>
                                                    <Button size="sm" type="reset" variant='custom'  className="me-3 reset-btn" >
                                                        
                                                        <FaTrash className="button-icon" />
                                                        
                                                        
                                                         Reset
                                                    </Button>
                                                    <Button size="sm" type="submit" variant='custom' className="login-btn">
                                                    
                                                        <FaPaperPlane className="button-icon"  />
                                                        Register
                                                        
                                                        
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

export default RegisterPage;