import React from 'react';
import Form from 'react-bootstrap/Form'
import './Contact.css'
import map from '../images/map.jpg'

function Contact() {

    return(
        <div className="container-games">
            <h3>Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <div>
            <Form.Control type="text" placeholder="Name" className="form-box"/>
            <Form.Control type="text" placeholder="Subject" className="form-box" />
            <Form.Control type="text" placeholder="Email" className="form-box" />
            <Form.Control type="text" placeholder="Contact" className="form-box" />
            </div>

            <input type="submit" value="SEND MESSAGE" className="Contact-Button"/>
            <img src={map} className="Contact-img img-fluid"/>
            
        </div>

    )
}

export default Contact;