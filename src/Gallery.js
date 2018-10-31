import React, { Component } from 'react';
import gallery1 from "./css/gallery/gallery1.jpg" 
import gallery2 from "./css/gallery/gallery2.jpg" 
import gallery3 from "./css/gallery/gallery3.jpg" 
import gallery4 from "./css/gallery/gallery4.jpg" 
import gallery5 from "./css/gallery/gallery5.jpg" 
import gallery6 from "./css/gallery/gallery6.jpg" 
import gallery7 from "./css/gallery/gallery7.png" 
import gallery8 from "./css/gallery/gallery8.jpg" 
import gallery9 from "./css/gallery/gallery9.jpg" 
import gallery10 from "./css/gallery/gallery10.jpg" 
import gallery11 from "./css/gallery/gallery11.jpg" 
import gallery12 from "./css/gallery/gallery12.jpg" 

export default class Gallery extends Component {
    render () {
        return (
            <section className="gallery-container">
                <div>
                    <img src={gallery1} alt="The Blue Ridge mountians"/>
                    <p>The Blue Ridge mountians.</p>            
                </div>
                <div>
                    <img src={gallery2} alt="The Epcott ball at night"/>
                    <p>The Epcott ball at night.</p>
                </div>
                <div>
                    <img src={gallery3} alt="Downtown Charlotte"/>
                    <p>Downtown Charlotte</p>
                </div>
                <div>
                    <img src={gallery4} alt="Downtown Charlotte from the top of a parking garage"/>
                    <p>Downtown Charlotte from the top of a parking garage</p>
                </div>
                <div>
                    <img src={gallery5} alt="West Palm Beach's Highest point"/>
                    <p>West Palm Beach's Highest point</p>
                </div>
                <div>
                    <img src={gallery6} alt="Daytona Beach at West Palm"/>
                    <p>Daytona Beach at West Palm</p>
                </div>
                <div>
                    <img src={gallery7} alt="Cinderella's castle at Disney World"/>
                    <p>Me at Cinderella's castle in Disney World</p>
                </div>
                <div>
                    <img src={gallery8} alt="A Stream in the fall"/>
                    <p>A Stream in the fall</p>
                </div>
                <div>
                    <img src={gallery9} alt="Sunset at a West Palm park"/>
                    <p>Sunset at a West Palm park</p>
                </div>
                <div>
                    <img src={gallery10} alt="Walkway bridge at a West Palm park"/>
                    <p>Walkway bridge at a West Palm park</p>
                </div>
                <div>
                    <img src={gallery11} alt="Sunrise on the West Palm coast"/>
                    <p>Sunrise on the West Palm coast</p>
                </div>
                <div>
                    <img src={gallery12} alt="A creek in the mountians"/>
                    <p>A creek in the mountians</p>
                </div>
            </section>
        )
    }
}