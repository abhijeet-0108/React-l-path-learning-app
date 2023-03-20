import React from 'react';
import "../App.css";
function Module1() {
  return (
    <div>
    <div className="container mt-5 h4">
      <h1>Module 1</h1>
      <p>This is module 1 content:--{'>'}</p>
    </div>
    <div className='container'>
    <p className='h5'>Creating and nesting components:</p>
    <p className='h6'>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
    <p className='h6'>React components are JavaScript functions that return markup:</p>
    <div className='code1'>
    <span className='fnc1'>function</span>
    <span className='spacebtwn'>MyButton</span>
    <span>{'('}</span>
    <span>{')'}</span>
    <span className='spacebtwn'>{'{'}</span><br></br>
    <span>return</span>
    <span className='spacebtwn'>{'('}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>button</span>
    <span>{'>'}</span>
    <span>I am a button</span>
    <span>{'<'}</span>
    <span className='grnbtn'>button</span>
    <span>{'>'}</span><br></br>
    <span>{')'}</span>
    <span>{';'}</span><br></br>
    <span className='spacebtwn'>{'}'}</span>
    </div>
    <p className='mt-4 h6'>Now that you’ve declared MyButton, you can nest it into another component:</p>
    <div className='code2'>
    <span className='spacebtwn'>export</span>
    <span className='spacebtwn'>default</span>
    <span className='spacebtwn'>function</span>
    <span>MyApp</span>
    <span>{'('}</span>
    <span>{')'}</span>
    <span className='spacebtwn'>{'{'}</span><br></br>
    <span>return</span>
    <span className='spacebtwn'>{'('}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>div</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>h1</span>
    <span>{'>'}</span>
    <span>welcome to My App</span>
    <span>{'<'}</span>
    <span>{'/'}</span>
    <span className='grnbtn'>h1</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span style={{color:'blue'}}>MyButton</span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>div</span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{')'}</span>
    <span>{';'}</span><br></br>
    <span className='spacebtwn'>{'}'}</span>
    </div>
    </div>
    <div className='container'>
    <p className='h5 mt-4'>Writing markup with JSX :--{'>'} </p>
    <p className='h6'>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.</p>
    <p className='h6'>JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a {'<div>...</div>'} or an empty {'<>...</>'} wrapper:</p><br></br>
    <div className='code1'>
    <span style={{color:"blue"}}>function</span>
    <span style={{color:'red'}}>AboutPage</span>
    <span>{'('}</span>
    <span>{')'}</span>
    <span>{'{'}</span><br></br>
    <span>return</span>
    <span>{'('}</span><br></br>
    <span>{'<'}</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>h1</span>
    <span>{'>'}</span>
    <span>About</span>
    <span>{'<'}</span>
    <span className='grnbtn'>h1</span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'>p</span>
    <span>{'>'}</span>
    <span>Hello there How do you do ?</span>
    <span>{'<'}</span>
    <span className='grnbtn'>p</span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{'<'}</span>
    <span className='grnbtn'></span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{')'}</span>
    <span>{';'}</span><br></br>
    <span className='spacebtwn'>{'}'}</span>
    </div>
    <p className='h6 mt-4'>If you have a lot of HTML to port to JSX, you can use an online converter.</p>
    <p className='h5'>Adding Styles:--{'>'}</p>
    <p className='h6'>In React, you specify a CSS class with className. It works the same way as the HTML class attribute:</p>
    <div className='code1' >
    <span>{'<'}</span>
    <span style={{color:"red"}}>img</span>
    <span>className</span>
    <span>{'='}</span>
    <span>"</span>
    <span style={{color:"green"}}>Avtar</span>
    <span>"</span>
    <span>{'/'}</span>
    <span>{'>'}</span>
    </div>
    <p className='h6 mt-4'>Then you write the CSS rules for it in a separate CSS file:</p>
    <div className='code1'>
    <span style={{color:'green'}}>/* In your CSS */</span><br></br>
    <span style={{color:"blue"}}>.Avtar</span>
    <span>{"{"}</span>
    <span>border-radius:</span>
    <span>50%</span>
    <span>{";"}</span><br></br>
    <span>{"}"}</span>
    </div>
    <p className='h6 mt-3 mb-4'>React does not prescribe how you add CSS files. In the simplest case, you will add a {'<link>'} tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.</p>
    </div>
    </div>
    
  );
}

export default Module1;