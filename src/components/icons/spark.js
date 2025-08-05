import React from 'react';

const IconSpark = (props) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"
    alt="Apache Spark logo"
    width={props.width || 40}
    height={props.height || 40}
    style={props.style || { display: 'block', margin: 'auto' }}
    {...props}
  />
);

export default IconSpark;