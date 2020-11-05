import React, { useRef, useEffect } from 'react';
import { TweenLite, Power2 } from 'gsap';
import './Homepage.css';

const Homepage = () => {

  let webDev = useRef(null);
  let design = useRef(null);
  let city = useRef(null);

  useEffect(() => {
    TweenLite.from(webDev, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 1.5,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })
    TweenLite.from(design, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 2.3,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })
    TweenLite.from(city, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 3.1,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })
    }
  )


    return (
        <div class="menu">

        <div class="name">
            <h2 id="surname" class="surname"> <span class="firstLetter">R</span>OMAIN</h2>
            <h2 id="lastname" class="lastname">BERNA<span class="firstLetter">Z</span></h2>
        </div>

        <div className="navbar">
            <div className="hamburger">
                <i class="fas fa-4x fa-bars"></i>
            </div>
            <ul className="nav">
                <li className="projects">Projets</li>
                <li className="about">About Me</li>
                <li className="contact">Contact</li>
            </ul>

        </div>

        <div class="title">
            <h3 ref={el => {webDev = el}} id="webDev" class="webDev">WEB DEVELOPER </h3>
            <h3 ref={el => {design = el}} id="design" class="design">DESIGN ENTHOUSIAST </h3>
            <h4 ref={el => {city = el}} id="city" class="city">NANTES FR.</h4>
        </div>
        <script src="./Homepage.js"></script>
    </div>
    )
}

export default Homepage;