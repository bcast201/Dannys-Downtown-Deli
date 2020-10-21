import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, Jumbotron } from 'reactstrap';
import large2 from '../img/large2.jpg';

class Body extends Component {
    constructor(props) {
        super(props)


        this.state = {
            isModalOpen: false,
        }



        this.toggleModal = this.toggleModal.bind(this);
    };
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <Container className='welcome-box p-5 col-sm-7 mx-auto text-center'>
                            <Col>
                                <h1 className='welcome-text'> Test7 Welcome To The Finest Deli In Lincoln!</h1>
                            </Col>
                            <Col className='pt-3'>
                                <p id="div-text">Take-out only due to Covid-19. Stop by or call ahead! <a role="button" className="text-white" href="tel:+14024389410"><i className="fa fa-phone"></i> 402-438-9410</a></p>
                            </Col>
                            <Col>
                                <Button color='success' onClick={this.toggleModal}>Check out our menu!</Button>
                            </Col>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body bg-success">
                                        <div className="container-fluid">
                                        <div className='container menuContainer'> 
                            <div className='row'>
                                <div className='col-12 menuCenter'>
                                <button type="button" className="close" toggle='close' onClick={this.toggleModal}>&times;</button>
                                    <div className='text-center'><h3>Danny's Specialty Heros</h3></div>
                                    <div className='text-center'><h4>Italian or Wheat</h4></div>
                                    <div className='text-center'><p>Half 8" Hero --  $7.49  &nbsp;&nbsp;  Whole-16"Hero -- $12.49</p> </div>
                                        <div className = 'row menuCenter'>
                                            <div className='col-12 '>
                                                <div className='item'>'A' St. Roast Beef & Cheddar</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'B' St. Pastrami & Cheese'</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'C' St. Corned Beef & Cheese</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'I' St. Pepperoni, Cappicola & Provolone </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'N' St. Ham, Turkey, Bacon, Swiss & American</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'O' St. Ham, Salami, Cappicola, Prosciutto & Provolone</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'X' St. Roast Beef, Turkey & Cheddar</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'Y' St. Cappicola, Prosciutto, Cheddar & Monterey Jack</div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='item'>'Z' St. Corned Beef, Pastrami, Cheddar & Montery Jack</div>
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                    </Container>
                </Jumbotron>
 
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
}


export default Body;