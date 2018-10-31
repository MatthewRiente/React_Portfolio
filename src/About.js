import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render () {
        return(
            <div>
            <nav class="flex-container">
                <Link to='/Bio'>
                    <div>
                        <p className="blocks">Biography</p>
                        <div className="blockImg__seven"> 
                        </div>
                    </div>
                </Link>
                <Link to='/Gallery'>
                    <div>
                        <p className="blocks">Gallery</p>
                        <div className="blockImg__eight"> 
                        </div>
                    </div>
                </Link>
            </nav>
        </div>
        )
    }
}