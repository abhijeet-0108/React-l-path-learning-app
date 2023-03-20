import React from 'react';
import '../App.css';
function Introduction() {
  return (
    <div>
    <div className="container mt-5 display-4">
      <h1>Introduction</h1>
      <p>Welcome to the course!</p>
    </div>
    <div className='container'>
    <p className='h6'>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
    <ul className='list'>
    <li>How to create and nest components</li>
    <li>How to add markup and styles</li>
    <li>How to display data</li>
    <li>How to render conditions and lists</li>
    <li>How to respond to events and update the screen</li>
    <li>How to share data between components</li>
    </ul>
    </div>
    <div className='container'>
    <p className='h6'>Module-1</p>
    <ul>
    <li>How to create and nest components</li>
    <li>How to add markup and styles</li>
    </ul>
    </div>
    <div className='container'>
    <p className='h6'>Module-2</p>
    <ul>
    <li>How to display data</li>
    <li>How to render conditions and lists</li>
    </ul>
    </div>
    <div className='container'>
    <p className='h6'>Module-3</p>
    <ul>
    <li>How to respond to events and update the screen</li>
    <li>How to share data between components</li>
    </ul>
    </div>
    </div>
  );
}

export default Introduction;