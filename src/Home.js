import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render () {
        return (
            <nav className="flex-container">
                <Link to="/PastWorks">
                        <p className="blocks">Past Works</p>
                        <div className="blockImg__one"> 
                        </div>
                </Link>  
                <Link to='/About'>
                    <div>
                        <p className="blocks">About Me</p>
                        <div className="blockImg__two"> 
                        </div>
                    </div>
                </Link>
                <Link to='/Contact'>
                    <div>
                        <p className="blocks">Contact</p>
                        <div className="blockImg__three" >
                        </div>
                    </div>
                </Link>  
                <Link to='/Resume'>
                    <div>
                        <p className="blocks">Resume</p>
                        <div className="blockImg__four" >
                        </div>
                    </div>
                </Link>  
            </nav>
        )}
}