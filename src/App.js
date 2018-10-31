import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Bio from './Bio';
import Contact from './Contact';
import Gallery from './Gallery';
import PastWorks from './PastWorks';
import Resume from './Resume';
import Aux from './Aux';
import { Switch, Route } from 'react-router-dom';
import './css/reset.css';
import './css/index.scss';

export default class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/PastWorks' component={PastWorks} />
                <Route path='/About' component={About}/>
                <Route path='/Bio' component={Bio} />
                <Route path='/Gallery' component={Gallery} />
                <Route exact path='/Resume' component={Resume} />
                <Route exact path='/Contact' component={Contact} />
            </Switch>
        </main>
        <Footer />
      </Aux>
    );
  }
}
