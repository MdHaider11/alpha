import React from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import './Contact.css'
import Logo from '../../store/logo/thicker-neon.png'
import Header from '../nav/Header'
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    const recaptchaRef = React.createRef();
    // onSubmit = () => {
    // const recaptchaValue = recaptchaRef.current.getValue();
    // this.props.onSubmit(recaptchaValue);
    // }
    return (
        <>
            <div className="background-box"  >
                <Header />
                <Container style={{height:"86%", display:"flex"}}>
                    <div className="contact-main">
                        <div className="contact-header">
                            <h2><span style={{fontSize:"10rem"}}>&alpha;</span>LPH<span style={{fontSize:"10rem"}}>&alpha;</span></h2>
                            <p>public sale</p>
                        </div>
                        <div className="contact-wrap">
                            <h2>The public sale is now closed</h2>
                            <p>
                                The public sale is now closed. Any outstanding support tickets are being
                                handled by the team. If you're looking for swift resolution, please reach out
                                to us at <a href="#" className="link-button">Alpha Telegram.</a>
                            </p>
                        </div>
                        {/* <div className="input-main-box">
                            <Form.Control type="email" placeholder="Your email" />
                        </div>
                        <div className="checkbox-wrap">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I certify that I am 18 years old or older, and I agree to the" />
                                <Form.Text className="text-muted">
                                    <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>
                                </Form.Text>
                            </Form.Group>
                        </div> */}
                        {/* <div className="recaptcha-box">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            // onChange={onChange}
                            />
                        </div> */}
                        <div className="button-wrap">
                            <Button>Log in</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Contact
