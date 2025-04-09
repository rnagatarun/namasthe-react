import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = 'I am from parcel';
const element = React.createElement('h1', null, heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
