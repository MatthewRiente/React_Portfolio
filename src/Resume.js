import React, { Component } from 'react';

export default class Resume extends Component {
    render () {
        return(
            <div className="resume">
                <div className="resuHeader">
                    <div className="resuName">
                        <h1>Matthew Riente</h1>
                        <h2>Web Developer</h2>
                    </div>
                    <div className="headerContact">
                        <p><strong>Phone #:</strong> 704 618-1312</p>
                        <p><strong>Email:</strong> mjriente@gmail.com</p>
                        <p><strong>Mailing Address:</strong> 14134 Whistling Duck Ct</p>
                    </div>
                </div>
                <div className="resuBody">
                    <div className="obj">
                        <h3>Objective</h3>
                        <p>My goal is to acquire a position at Red Ventures
                        as a Software Engineer using the various professionalism 
                        and software skills such as public speaking and web design using coding languages (such as HTML and JavaScript).</p>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <h4>Web Development with Coding languages:</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>LabView</li>
                        </ul>
                        <ul className="secondList">
                            <li>Node.js</li>
                            <li>MySQL/MongoDB</li>
                            <li>React</li>
                            <li>AJAX</li>
                        </ul>
                    </div>
                    <div className="exp">
                        <h3>Experience</h3>
                        <div>
                            <h4>Road to Hire + Associate + June 18, 2018 – Present</h4>
                            <ul>
                                <li>Developed responsive, cross browser compatible websites using HTML/CSS and JavaScript based on Sketch designs given by designers.</li>
                                <li>Built a responsive eCommerce website utilizing React and SCSS in a Single Page Application.</li>
                                <li>Established a Mongo database and integrating technologies such as Postman and  Robo3T and Currently refactoring to use MySQL in replacement of MongoDB.</li>
                                <li>Designed and Developed a CRUD API using NodeJS, Express, Mongoose to deliver information to our eCommerce Website from our Mongo Database.</li>
                                <li>Collaborate via Git, GitHub (all projects and challenges are hosted on my GitHub!).</li>
                                <li>Active participant in Toastmasters & Red Ventures hackathon (to create a Badge System for hackathon participants).</li>
                            </ul>
                        </div>
                        <div>
                            <h4>FIRST Robotics + Team Lead and Mentor + May 2014 – Aug 2017</h4>
                            <ul>
                                <li>Team Leader for 1.5 years while enrolled.</li>
                                <li>Mentored for one year after graduation from highschool.</li>
                                <li>Was taught professionalism and engineering skills.</li>
                                <li>Won one major and minor competition, as well as two off-season competitions.</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Car Washing, Greenway Express + Shift Manager + May 2016 – July 2018</h4>
                            <ul>
                                <li>Learned how to deal with stressful situations in quickly.</li>
                                <li>Became more skillful with managing my time.</li>
                                <li>Was taught professionalism and engineering skills.</li>
                                <li>Was taught retaining professionalism in the face of adversity.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <h4>Olympic community of schools METS + Aug 2012 – June 2016</h4>
                        <ul>
                            <li>Graduated June 2016</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Western Carolina University + July 2016 – Sep 2017</h4>
                    </div>
                </div>
            </div>
        )
    }
}