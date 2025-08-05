import React from 'react';

const IconAWS = (props) => (
  <img
    src="https://en.m.wikipedia.org/wiki/File:Amazon_Web_Services_Logo.svg"
    alt="Amazon Web Services logo"
    width={props.width || 40}
    height={props.height || 40}
    style={props.style || { display: 'block', margin: 'auto' }}
    {...props}
    />
);

export default IconAWS;