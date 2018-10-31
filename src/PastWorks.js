import React, { Component } from 'react';

export default class PastWorks extends Component {
    render() {
        return (    
            <div>
                <div class="flex-container">
                    <a href="https://codepen.io/Catsies/pen/yqrdjM">
                        <div>
                            <p class="blocks">Stair Challenge</p>
                            <div class="blockImg__five"> </div>
                        </div>
                    </a>
                    <a href="https://mjrmidterm.netlify.com">
                        <div>
                            <p class="blocks">My Move Project</p>
                            <div class="blockImg__six"> </div>
                        </div>
                    </a>
                    <a href="https://thingsforants.netlify.com/">
                        <div>
                            <p class="blocks">One Day Website</p>
                            <div class="blockImg__nine"> </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}