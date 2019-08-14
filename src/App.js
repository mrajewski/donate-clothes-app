import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './App.css';
import "./styles.scss";
import Header from './components/header'
import Yellow from './components/sectionYellow'
import Steps from './components/sectionSteps'


class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Header/>
                    <Yellow/>
                    <Steps/>
                    <Route path='/'/>
                    <Route path='/'/>
                </HashRouter>
            </>


        )

    }
}

export default App;
