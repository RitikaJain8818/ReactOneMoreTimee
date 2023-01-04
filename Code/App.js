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
Tree Shaking: Removing Unwanted Code
Transitive Dependencies
*/

//JSX => React.createElement => Object => HTML(DOM)
/*
data = api.getData()

Let's say api got hacked 😮
Hackers can insert any malicious piece of JS code. 
XSS Attack: Cross-site scripting attack.
But But, JSX does the sanitization. So, it keeps the app safe.
*/
const heading = (
  <h1 id="title" key="h1">
    Bonjour!!
  </h1>
);

const MostestFavouritestSong = () => {
  return (
    <p>All Too Well - 10 Minutes Version</p>
  )
};

/*
React Components
Functional Component : NEW
Class Based Component : OLD
*/

const dieHardFan = "I'm Taylor's Version Swiftie";


/* 
Multiple children in parent element? Add keys to children to help React to uniquely identify the child element.
*/
const HeaderComponent = () => {
  return (
    <div id="container">
      {heading}
      <h2 key="h2">What's up</h2>
      <h3 key="h3">How is it going?</h3>
      {dieHardFan}
      <MostestFavouritestSong /> {/*Component Composition*/}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root.
root.render(<HeaderComponent />);
