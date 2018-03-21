import React from 'react';

const Home = () =>
  <div className="homepage">
    <div className="grid-container">
      <div id="cool-background">
        <img src="https://image.freepik.com/free-vector/pack-of-hand-drawn-test-elements_23-2147596296.jpg" alt="background" />
      </div>
      <div className="wlcome-text">
        <h1>Welcome to MPGames</h1><br/>
        <p> Pick the quiz that you like. <br/> Make sure you are focused and keep paper and pen close. <br/> Questions have a timer. Once it starts, it will stop only when you answer the question correctly. <br/> Each incorrect attemp will decrease your total score of 1 point. <br/> Have fun! </p>
      </div>
    </div>
    <div className="page-footer" ></div>
  </div>

export default Home;
