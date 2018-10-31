import React, { Component } from 'react';
import linkedin from "./css/images/linkedin.png";
import r2h from "./css/images/roadtohirelogo-white.png";

export default class Footer extends Component {
    render () {
        return( 
            <footer className="footer">            
                <p><small>All images used for educational purposes</small></p>
                <nav className="footer--links">
                    <a href="https://www.linkedin.com/in/matthew-riente-514880154/"><img className="linked-icon" src={linkedin} alt="linkedin" /></a>
                    <a href="https://www.roadtohire.org/"><img className="r2h-icon" src={r2h} alt="r2h" /></a>
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
                </nav>
            </footer>
        )
    }
}