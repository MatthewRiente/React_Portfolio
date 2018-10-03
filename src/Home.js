import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render () {
        return (
            <div>
                <nav className="flex-container">
                    <Link to="/PastWorks">
                        <div>
                            <p className="blocks">Past Works</p>
                            <img className="blockImg__one" alt="Website Preview" />
                        </div>
                    </Link>  
                    <Link to='/About'>
                        <div>
                            <p className="blocks">About Me</p>
                            <img className="blockImg__two" alt="Journal"/>
                        </div>
                    </Link>
                    <Link to='/Contact'>
                        <div>
                            <p className="blocks">Contact</p>
                            <img className="blockImg__three"  alt="Someone using a mouse and keyboard"/>
                        </div>
                    </Link>  
                    <Link to='/Resume'>
                        <div>
                            <p className="blocks">Resume</p>
                            <img className="blockImg__four" alt="Resume Preview"/>
                        </div>
                    </Link>  
                </nav>
            </div>
        )}
}