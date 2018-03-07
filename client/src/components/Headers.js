import React from 'react';

let cols = ["1 pt", "3 pts", "5 pts", "7 pts"],
headers = [];

cols.forEach((category, index) => headers.push(<span className='header' key={index}>{category}</span>));

const Headers = () =>
  <div className='headers'>
    {headers}
  </div>

export default Headers;
