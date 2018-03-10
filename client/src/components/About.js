import React from 'react';
import  SocialIcons  from 'react-social-icons';
import Social from './Social';

const urls = [
  'https://twitter.com/piccinius',
  'https://github.com/gnappo1',
  'https://www.linkedin.com/in/matteo-happylife-piccini/'
];


const About = () =>
  <div className="about">
    <div className="rome">
    </div>
    <div className="website-section">
      <h2>As my life changes <br /> it gives me new things to write about.</h2>
      <p>Eager to follow my dreams and challange myself with new experiences, I moved to San Diego in 2015. Curiosity is to me the most powerful human traits, it will open new ways you never even imagined before. Curiosity is what brought me here today, the reason I managed to become a Full Stack Web Developer. This Game App is the result of a personal project and will keep growing with time, patience and your suggestions.</p>
    </div>
    <div className="social-section">
      <SocialIcons urls={urls} />
    </div>
    <div className="san-diego">
    </div>
    <div className="website-section-two">
      <h2>Share your experience</h2>
      <p>Did you like this App? <br /> Share it with the rest of the world!</p>
      <Social />
    </div>
  </div>

export default About
