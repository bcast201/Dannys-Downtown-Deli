import React, { Component } from 'react';
import Header from './Header';
import Body from './BodyComponent';
import Location from './Map';
import Display from './Display';
import Footer from './FooterComponent';
import AboutDanny from './AboutDanny';
import Menu from './Menu'
import {Switch, Route, HashRouter as Router} from 'react-router-dom';




class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <React.Fragment>
                    <Body/>
                    <Display />
                </React.Fragment>
            )
        }
        return(
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/noBolony' component={Display}/>
                    <Route exact path='/location' component={Location}/>
                    <Route exact path='/aboutdanny' component={AboutDanny} />
                    <Route exact path='/menu' component={Menu} />
                </Switch>
                <Footer />
            </Router>
          )
        }
}

export default Main;