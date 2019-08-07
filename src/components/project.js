import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import house5 from '../images/house5.jpg'
import './project.css'


function Projects () {

    return(
    <div className="container-games">
        <h3>Projects</h3>
        <div>
        <Row>
            <Col sm={3}> <img src={house2} className="Project-img" />  </Col>
            <Col sm={3}> <img src={house3} className="Project-img"/> </Col>
            <Col sm={3}> <img src={house4} className="Project-img"/> </Col>
            <Col sm={3}> <img src={house5} className="Project-img"/> </Col>
        </Row>
        <Row>
            <Col sm={3}> <img src={house5} className="Project-img"/></Col>
            <Col sm={3}> <img src={house4} className="Project-img"/> </Col>
            <Col sm={3}> <img src={house2} className="Project-img"/></Col>
            <Col sm={3}> <img src={house3} className="Project-img"/></Col>
        </Row>
        </div>
    </div>
    )
}
export default Projects;