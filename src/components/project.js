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
            <Col sm={6} md={6} lg={3}> <img src={house2} className="Project-img" /> 
                <div className="top-left">Brick House</div> 
            </Col>


            <Col sm={6} md={6} lg={3}> <img src={house3} className="Project-img"/>  
                <div className="top-left">Renovated</div> 
            </Col>


            <Col sm={6} md={6} lg={3}> <img src={house4} className="Project-img"/>  
                <div className="top-left">Summer House</div> 
            </Col>


            <Col sm={6} md={6} lg={3}> <img src={house5} className="Project-img"/>  
                <div className="top-left">Barn House</div>
            </Col>
        </Row>


        <Row>
            <Col sm={6} md={6} lg={3}> <img src={house5} className="Project-img"/> 
                <div className="top-left">Renovated</div>
            </Col>


            <Col sm={6} md={6} lg={3}> <img src={house4} className="Project-img"/> 
                <div className="top-left">Barn House</div>
            </Col>



            <Col sm={6} md={6} lg={3}> <img src={house2} className="Project-img"/> 
                <div className="top-left">Brick House</div>
            </Col>


            <Col sm={6} md={6} lg={3}> <img src={house3} className="Project-img"/> 
                <div className="top-left">Summer House</div>
            </Col>

        </Row>
        </div>
    </div>
    )
}
export default Projects;