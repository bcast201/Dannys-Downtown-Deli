import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import large2 from '../img/large2.jpg';


function Display() {
    return (
            <React.Fragment>
                <Container className='displayContainer'>
                    <Row>
                        <Col md={6}>
                            <img className='img-responsive displayImage img-fluid' alt='sandwich' src={large2}/>
                        </Col>
                        <Col md={6} className='displayFlex'>
                        <div className='taglineContainer'>
                            <p className='tagline'>Quality Meat</p>
                            <p className='tagline'> Quality Cheeses</p>
                            <p className='tagline'> NO BALONEY!!</p>
                            <p className='tagline'> Sliced Fresh Every time!!</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
    )
}

export default Display;