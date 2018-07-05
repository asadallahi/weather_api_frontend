import React, {Component} from 'react';
import './App.css';
import ajax from "./utils/ajax";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import Details from "./components/Details";


class App extends Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">

                        <div className="header">
                            <Header/>
                        </div>
                        <div className="container-fluid">
                            <Route exact path="/" component={Content}/>
                            <Route path="/about" component={About}/>
                            <Route path='/details/:id' component={Details}/>
                        </div>
                    </div>
                </div>

            </Router>
        );
    }
}

export default App;

const About = () => (
    <div>
        <h2>About</h2>
        <p>
            About Goes herer
        </p>
    </div>
);
