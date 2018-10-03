import React, { Component } from 'react';

export default class Bio extends Component{
    render() {
        return (
            <div>
                <p className="bio">My name is Matthew Riente and i am the author of this website.
                    I was born in Germany but raised in Charlotte, NC.</p>
                <p className="bio">I am a Road to Hire associate. Road to hire is a non-for-profit program that
                    provides the opportunity for young adults to learn how to code in several languages
                    as well as get professional skills to help them in the workplace.</p>
            </div>
        )
    }
}