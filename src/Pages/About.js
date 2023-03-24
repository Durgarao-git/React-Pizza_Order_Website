import React from 'react';
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../Styles/About.css";

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop'  style={{backgroundImage:`url(${MultiplePizza})`}}></div>

        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>You can add new product lines without adding new internal structure or direct reports, and you can add them without meetings and projects and process in the logistics and e-commerce platforms,” Evans notes. “You don’t need to fly to Seattle and schedule a bunch of meetings to get people to implement support for launching makeup in Italy, or persuade anyone to add things to their roadmap.You can add new product lines without adding new internal structure or direct reports, and you can add them without meetings and projects and process in the logistics and e-commerce platforms,” Evans notes. “You don’t need to fly to Seattle and schedule a bunch of meetings to get people to implement support for launching makeup in Italy, or persuade anyone to add things to their roadmap.</p><br/><br/>
        </div>
      
    </div>
  )
}

export default About
