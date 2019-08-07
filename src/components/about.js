import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import './About.css'

function About() {

    return(
    <div className="container-games">
        <h3>About</h3>
        <div className="About-txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div>
        <Row>
            <Col sm={3}> 
                <img src={team1} className="About-img"/>
                <h3>Jhon Doe</h3>
                <p>CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. 
                    Suspendisse sodales pellentesque elementum.</p>  
            </Col>
            <Col sm={3}>
                 <img src={team2} className="About-img"/>
                 <h3>Jhon Doe</h3>
                 <p>Architect</p>
                 <p>Phasellus eget enim eu lectus faucibus vestibulum. 
                    Suspendisse sodales pellentesque elementum.</p> 
             </Col>
            <Col sm={3}>
                 <img src={team3} className="About-img"/>
                 <h3>Mike Ross</h3>
                <p>Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. 
                    Suspendisse sodales pellentesque elementum.</p> 
            </Col>
            <Col sm={3}>
                 <img src={team4} className="About-img"/> 
                 <h3>Jhon Doe</h3>
                <p>Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. 
                    Suspendisse sodales pellentesque elementum.</p> 
            </Col>
        </Row>
        </div>
    </div>
    )
}

export default About