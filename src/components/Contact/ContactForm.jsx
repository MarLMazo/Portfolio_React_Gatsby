import React, { useState} from 'react';
import { Container, Modal, Button } from "react-bootstrap";


const ContactForm = () =>{
    const [modal, setModal] = useState(false);
    const handleToggle = () => setModal(!modal);
    return(
        <Container>
            <Button variant="secondary"  onClick={handleToggle}>Edit </Button>
            <Modal 
                size="lg"
                show={modal}
                onHide={handleToggle}
                animation= {false}
                dialogclassName="modal-90w"
            >
            <Modal.Header closeButton>
                <Modal.Title>Contact us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div className="row">
                    <div className="col-xs-12 col-md-8">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
                                </div>
                            </div>     
                        </form>
                        {/* <div className="text-center text-md-left">
                            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status"></div> */}
                    </div>
                    <div className=".col-xs-6 .col-md-4 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>
                </div>


            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );

}


export default ContactForm;