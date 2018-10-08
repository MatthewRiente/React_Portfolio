import React, { Component } from 'react';
import avatar from "./css/images/avatar.jpg" 

export default class Bio extends Component{
    render() {
        return (
            <div className="bioDiv">
                <img className="bioImage" src={avatar} alt="Matthew Riente" />
                <p className="bio">Young Professional raised in the Charlotte, NC area who is currently participating in the Road to Hire non-profit
                 program that aims to help young adults within the ages of 18-25 get a professional and technical education regardless of the ability to afford a college education.
                 Currently going through the Tech Cohort (5) to learn Web Development skills such as coding in HTML, CSS, and JavaScript.</p>
                <p className="bio">I Participated in several FIRST Robotics Competitions as a Team Lead and Mentor. FIRST Robotics is a competition
                 in which High-schoolers can learn Professionalism, Engineering, Problem Solving and Leadership Skills through designing and building
                  a robot to compete in games designed by FIRST.</p>
            </div>
        )
    }
}