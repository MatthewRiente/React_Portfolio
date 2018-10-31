import React, { Component } from 'react';

export default class Contact extends Component{

    validateForm(e) {
        // e.preventDefault();
        let fname = document.getElementById("firstName").value;
        let lname = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        if (fname === "" || lname === "") {
            alert("Name must be filled out");
            return false;
        } 
        if (email === "") {
            alert("Email must be filled out");
            return false;
        }
    }

    render() {
        return (
            <section>
                <div className="flex-container">
                    <form name="myForm" onSubmit={(e) => this.validateForm(e)} action="#" method="get" className="form">
                        <div className="contactBlock">
                            <div className="contactForm">
                                <div>
                                    <label for="firstName"> First Name: </label> 
                                    <input type="text" id="firstName" name="firstName" required/>
                                </div>
                                <div>
                                    <label for="lastName"> Last Name: </label> 
                                    <input type="text" id="lastName" name="lastName" required/>
                                </div>
                                <div>
                                    <label for="email"> Your Email: </label> 
                                    <input type="text" id="email" name="email" required/>
                                </div>
                                <div>
                                    <label for="company"> Company: </label> 
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>
                        </div>
                        <div className="contactExtras">
                            <textarea placeholder="Please enter your comment or question here..." rows="20" cols="75"></textarea>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div className="contactEmail">
                    <h3>Matthew Riente's Email:</h3>
                    <p>Matthew can be emailed at <strong>mjriente@gmail.com</strong></p>
                </div>
        </section>
        )
    }
}