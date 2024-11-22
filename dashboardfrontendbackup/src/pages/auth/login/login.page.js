
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {FaTrash,FaPaperPlane} from "react-icons/fa";
import {useFormik} from "formik";
import auth_svc from "../services/auth.service";
import * as Yup from "yup";
import "./login.css"
import { NavLink, useNavigate,Link } from "react-router-dom";
import {toast} from "react-toastify";





const LoginPage = () => {
    let navigate = useNavigate();
    const validateUser = Yup.object({
        msisdn:Yup.string().required(),
        password: Yup.string().required()
    });
    let formik = useFormik({
        initialValues : {
            msisdn:null,
            password:null
        },
        validateSchema : validateUser,
        onSubmit : async (values) => {
            try{
               let user_detail = await auth_svc.login(values)
               
                localStorage.setItem("auth_token",user_detail.data.result.auth_token);
                localStorage.setItem("auth_user",JSON.stringify(user_detail.data.result.user));
                const loggedin_user = JSON.parse(localStorage.getItem("auth_user")).role;
                toast.success("Welcome " +JSON.parse(localStorage.getItem("auth_user")).name);
                

               
                //redirect
                navigate("/"+loggedin_user)
          

            }catch(err){
                console.log("Error :",err.data.msg);
                toast.error(err.data.msg)
               
            }
        }
    });

    const hrStyle = {marginTop:"15px",marginBottom:"15px"}

    
    



    return (
       <>
       <div className="body-bg">
            <Container className="login-container">
                    <Row>
                        <Col sm={12} md={{offset:3,span:6}} className={"mt-5 login-box"}>
                            <Col as={"h4"} style={{color:'white'}} className="text-center mt-3 login-text ">Login Page</Col>
                            <hr style={hrStyle} />
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="row mb-3">
                                    <Col as="label" sm={3} style={{color:'white'}} className="form-label">MSISDN No:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                        size="sm"
                                        type="text"
                                        name="msisdn"
                                        onChange={formik.handleChange}
                                        required
                                        placeholder="Enter your MSISDN No..."
                                        >

                                        </Form.Control>
                                        <span className="text-danger">{formik.errors?.email}</span>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="row mb-3">
                                    <Col as="label" sm={3} style={{color:'white'}} className="form-label">Password:</Col>
                                    <Col sm={9}>
                                        <Form.Control
                                        size="sm"
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        required
                                        placeholder="Enter your password ..."
                                        >

                                        </Form.Control>
                                        <span className="text-danger">{formik.errors?.password}</span>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="row mb-3">
                                        <Col sm={{offset: 3, span :9}}>
                                                    <Button size="sm" type="reset" variant='custom'  className="me-3 reset-btn" >
                                                        
                                                        <FaTrash className="button-icon" />
                                                        
                                                        
                                                         Reset
                                                    </Button>
                                                    <Button size="sm" type="submit" variant='custom' className="login-btn">
                                                    
                                                        <FaPaperPlane className="button-icon"  />
                                                        Login
                                                        
                                                        
                                                    </Button>
                                        </Col>
                                </Form.Group>
                                
                                
                            </Form>
                            
                            {/* <p>
                                <NavLink to="/register" className="redirect-btn">
                                    Register a new Account
                                </NavLink>
                            </p> */}
                        </Col>
                    </Row>
            </Container>
       </div>
        
       </>
      
       
    )
}

export default  LoginPage;