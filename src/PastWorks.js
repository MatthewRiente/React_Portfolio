import React, { Component } from 'react';

export default class PastWorks extends Component {
    render() {
        return (    
            <div>
                <div class="flex-container">
                    <a href="https://github.com/MatthewRiente">
                        <div>
                            <p class="blocks">Github Portfilio</p>
                            <img class="blockImg__five" alt="Github Profile Preview"/>
                        </div>
                    </a>
                    <a href="https://github.com/Code2Hire/submit-weekly-challenges-MatthewRiente">
                        <div>
                            <p class="blocks">Git Challenges</p>
                            <img class="blockImg__six" alt="Github Challenges Preview"/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}