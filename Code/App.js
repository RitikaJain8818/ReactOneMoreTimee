import React from "react";
import ReactDOM from "react-dom/client";


/*
Created a server
HOT Module Replacement
File Watcher Algorithm : Written in C++
Caching during Development
Bundling
Minify
Cleaning our Code
Dev and Production Build
Super fast build algorithm
Image Optimization
Compression
Compatible with older versions of Browser
HTTPS on dev -> npx parcel index.html --https
PORT Number
Consistent Hashing Algorithm to To cache things up
Zero Configuration

*/

const heading1 = React.createElement(
  'h1',
  {
    id: 'title',
  },
  'Bonjour!!',
)

const heading2 = React.createElement(
  'h2',
  {
    id: 'title',
  },
  "What's up?",
)

console.log(heading1)

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading1, heading2],
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
