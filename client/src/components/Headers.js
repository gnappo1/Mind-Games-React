import React from 'react';

const Headers = ({data, headerWidth}) => {

  let style = {width: headerWidth},
      headers = [];

  data.forEach((category, index) => headers.push(<span className='header' style={style} key={index}>{category}</span>));

  return (
    <div className='headers'>
        {headers}
    </div>
  );
};

export default Headers
