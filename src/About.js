import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class About extends Component {
    render () {
        return(
            <div>
            <nav class="flex-container">
                <Link to='/Bio'>
                    <div>
                        <p class="blocks">Biography</p>
                    </div>
                </Link>
                <Link to='/Bio'>
                    <div>
                        <p class="blocks">Gallery</p>
                    </div>
                </Link>
            </nav>
        </div>
        )
    }
}