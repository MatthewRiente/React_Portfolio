import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return( 
            <div>            
                <a href="https://www.linkedin.com/in/matthew-riente-514880154/"><img class="linked-icon" src="../images/linkedin.png" alt="linkedin" /></a>
                <p><small>All images used for educational purposes</small></p>
                <a href="https://www.roadtohire.org/"><img class="r2h-icon" src="../images/roadtohirelogo-white.png" alt="r2h" /></a>
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
            </div>
        )
    }
}