import React from 'react';
import "../App.css";

function Module2() {
  return (
    <div className='container'>
    <div className="container h5">
      <h1>Module 2</h1>
      <p>This is module 2 content</p>
    </div>
    <p className='h5'>Displaying data:--{'>'} </p>
    <p className='h6 mb-4'>JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:</p>
    <div className='code1'>
    <span style={{color:'red'}}>return</span>
    <span>{'('}</span><br></br>
    <span>{'<'}</span>
    <span style={{color:'green'}}>h1</span>
    <span>{'>'}</span><br></br>
    <span>{'{'}</span>
    <span style={{color:'blue'}}>user.name</span>
    <span>{'}'}</span><br></br>
    <span>{'<'}</span>
    <span style={{color:'green'}}>h1</span>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{')'}</span>
    <span>{';'}</span>
    </div>
    <p className='h6 mt-4 mb-4'>You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={'{user.imageUrl}'} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:</p>
    <div className='code1'>
    <span style={{color:'red'}}>return</span>
    <span>{'('}</span><br></br>
    <span>{'<'}</span>
    <span style={{color:'green'}}>img</span><br></br>
    <span>className</span>
    <span>{'='}</span>
    <span>"</span>
    <span style={{color:'green'}}>Avtar</span>
    <span>"</span><br></br>
    <span>src</span>
    <span>=</span>
    <span>{'{'}</span>
    <span style={{color:'blue'}}>user.imageURL</span>
    <span>{'}'}</span><br></br>
    <span>{'/'}</span>
    <span>{'>'}</span><br></br>
    <span>{')'}</span>
    <span>{';'}</span>
    </div>
    <p className='h5 mt-4 mb-4'>Conditional rendering:--{'>'}</p>
    <p className='h6 mb-4'>In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:</p>
    <div className='code1'>
    <span style={{color:'red'}}>let{" "}content{" ;"}</span><br></br>
    <span style={{color:'red'}}>if{" ("}isLoggedIn{") "} {'{'}</span><br></br>
    <span>Content{" "}= {'<'}AdminPanel{'/'}{'>'}{';'}</span><br></br>
    <span style={{color:'red'}}>{'}'}{" "}else {" "}{'{'}</span><br></br>
    <span>Content{" "}= {'<'}LoginForm{'/'}{'>'}{';'}</span><br></br>
    <span>{"}"}</span>
    <span style={{color:'red'}}>return {" "}{"("}</span><br></br>
    <span>{'<'}div{'>'}</span><br></br>
    <span style={{color:'blue'}}>{"{"}content{"}"}</span><br></br>
    <span>{'<'}div{"/"}{'>'}</span><br></br>
    <span>{')'}{';'}</span>
    </div>
    <p className='h6 mt-4 mb-4'>If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:</p>
    <div className='code1 mb-4'>
    <span style={{color:"green"}}>{'<'}div{'>'}</span><br></br>
    <span>{"{"}{" "}isLoggedIn ? {" "} {"("}</span><br></br>
    <span style={{color:"red"}}>{"<"}AdminPanel{"/"}{'>'}</span><br></br>
    <span style={{color:"blue"}}>{')'}{" "}{":"}{" "}{'('}</span><br></br>
    <span style={{color:"red"}}>{'<'}LoginForm{"/"}{">"}</span><br></br>
    <span>{")"}{" "}{"}"}</span><br></br>
    <span style={{color:"green"}}>{'<'}div{"/"}{'>'}</span><br></br>
    </div>
    <p className='h6'>When you don’t need the else branch, you can also use a shorter logical && syntax:</p>
    <div className='code1 mb-4 mt-4'>
    <span style={{color:"green"}}>{'<'}div{'>'}</span><br></br>
    <span>{"{"}isLoggedIn{" "}&& {"<"}AdminPanel{"/"}{">"}</span><br></br>
    <span style={{color:"green"}}>{'<'}div{"/"}{'>'}</span><br></br>
    </div>
    <p className='h6 mt-4 mb-4'>All of these approaches also work for conditionally specifying attributes. If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else. </p>
    <p className='h5 mt-5 mb-4'>Rendering lists:--{">"}</p>
     <p className='h6 mt-5 mb-4'>You will rely on JavaScript features like for loop and the array map() function to render lists of components.</p>
     <p className='h6 mt-5 mb-4'>For example, let’s say you have an array of products:</p>
     <div className='code1 mb-4'>
     <span style={{color:'blue'}}>const products{' '}={" "}{'['}</span><br></br>
     <span style={{color:'red'}}>{'{'}{" "}title:'Cabbage',{' '}id{":"}1{"}"}{','}</span><br></br>
     <span style={{color:'red'}}>{'{'}{" "}title:'Garlic',{' '}id{":"}2{"}"}{','}</span><br></br>
     <span style={{color:'red'}}>{'{'}{" "}title:'Apple',{' '}id{":"}3{"}"}{','}</span><br></br>
     <span>{"]"}{";"}</span>
     </div>
     <p className='h6 mt-4 mb-4'>Inside your component, use the map() function to transform an array of products into an array of {'<li>'} items:</p>
     <div className='code1 mb-4 mt-4'>
     <span style={{color:'red'}}>const listItems = products.map{"("}product ={'>'}</span><br></br>
     <span>{'<'}li key={"{"}product.id{"}"}{'>'}</span><br></br>
     <span style={{color:'blue'}}>{"{"}product.title{"}"}</span><br></br>
     <span>{'<'}li{'/'}{'>'}</span><br></br>
     <span>{')'}{";"}</span><br></br>
     <span>return {'('}</span><br></br>
     <span style={{color:'green'}}>{'<'}ul{'>'}{'{'}listItems{'}'}{'<'}ul{'/'}{'>'}</span><br></br>
     <span>{')'}{';'}</span>
     </div>
     <p className='h6 mt-4 mb-4'>Notice how {'<li>'} has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.</p>

    </div>
  );
}

export default Module2;