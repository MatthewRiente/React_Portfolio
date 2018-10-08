import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import hamburger from "./css/images/full-home-icon.png";

export default class Header extends Component {
    render () {
        return (
            <div>
                <div className="headerImg">        
                </div>
                <div className="headerText">
                    <h1>Matthew Riente</h1>
                    <h2>Road to Hire Associate</h2>
                    <div className="dropdown">
                            <img className="home-icon" src={hamburger} alt="home" />
                            <nav className="dropdown-content">
                                <ul>
                                    <li><Link to='/'> Home </Link></li>                    
                                    <li><Link to='/PastWorks'> Past Works </Link></li>                  
                                    <li><Link to='/About'> About Me </Link></li>                    
                                    <li><Link to='/Contact'>Contact</Link></li>                    
                                    <li><Link to='/Gallery'>Gallery</Link></li>                    
                                    <li><Link to='/Bio'> Biography </Link></li>                            
                                    <li><Link to='/Resume'>Resume</Link></li>
                                </ul>                    
                            </nav>
                    </div>
                </div>
            </div>
        )
    }
}