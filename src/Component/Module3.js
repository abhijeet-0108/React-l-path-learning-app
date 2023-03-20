import React from 'react';
import "../App.css";

function Module3() {
  return (
    <div className="container mt-5 ">
      <h1 >Module 3</h1>
      <p className='h6'>This is module 3 content</p>
      <p className='h5'>Responding to events :--{'>'}</p>
      <p className='h6 mb-4'>You can respond to events by declaring event handler functions inside your components:</p>
      <div className='code1'>
      <span style={{color:'blue'}}>function MyButton{'('}{')'}{' '}{'{'}</span><br></br>
      <span style={{color:'blue'}}>function handleClick{'('}{')'}{' '}{'{'}</span><br></br>
      <span style={{color:'red'}}>alert{'('}'You clicked me!'{')'}{';'}</span><br></br>
      <span>{'}'}</span><br></br>
      <span>return {'('}</span><br></br>
      <span style={{color:'green'}}>{'<'}button onClick={'{'}handleClick{'}'}{'>'}</span><br></br>
      <span>Click me</span><br></br>
      <span style={{color:'green'}}>{'<'}{'/'}button{'>'}</span><br></br>
      <span> );</span>
      <span>{'}'}</span>
      </div>
      <p className='h6 mt-4 mb-4'>Notice how {'onClick={handleClick}'} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.</p>
      <p className='h5 mb-4 mt-4'>Updating the screen </p>
      <p className='mt-4 h6 mb-4'>Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.</p>
      <p className='h6 mb-4 mt-4'>First, import useState from React:</p>
      <div className='code1'>
      <span style={{color:'red'}}>import {'{ useState }'} from 'react';</span>
      </div>
      <p className='h6 mt-4 mb-4'>Now you can declare a state variable inside your component:</p>
      <div className='code1'>
      <span style={{color:'blue'}}>function MyButton(){'{'}</span><br></br>
      <span style={{color:'red'}}>{'const [count, setCount] = useState(0);'}</span>
      </div>
      <p className='h6 mt-4 mb-4'>You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].</p>
      <p className='h6 mt-4 mb-4'>The first time the button is displayed, count will be 0 because you passed 0 to {'useState()'}. When you want to change state, call{' setCount()'} and pass the new value to it. Clicking this button will increment the counter:</p>
      <div className='code1 mb-4 mt-4'>
      <span style={{color:'blue'}}>function MyButton() {'{'}</span><br></br>
      <span style={{color:'red'}}>{'const [count, setCount] = useState(0);'}</span><br></br>
      <span>function handleClick() {'{'}</span><br></br>
      <span style={{color:'blue'}}> {'setCount(count + 1)'};</span><br></br>
      <span>{'}'}</span><br></br>
      <span style={{color:'green'}}>return (</span><br></br>
      <span style={{color:'blue'}}>{'<'}button {'onClick={handleClick}'}{'>'}</span><br></br>
      <span>Clicked {'{count}'} times</span><br></br>
      <span>{'<'}/button{'>'}</span><br></br>
      <span>);</span><br></br>
      <span>{'}'}</span>
      </div>
      <p className='h6 mt-4 mb-4'>React will call your component function again. This time, count will be 1. Then it will be 2. And so on.</p>
      <p className='h6 mb-4 mt-4'>If you render the same component multiple times, each will get its own state. Click each button separately:</p>
      <p className='h5 mt-4 mb-4'>Using Hooks :--{'>'}</p>
      <p className='h6 mb-4 mt-4'>Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.</p>
      <p className='h6 mb-4 mt-6'>Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.</p>
      <p className='h5 mb-4 mt-4'>Sharing data between components</p>
      <p className='h6 mt-4 mb-4'>In the previous example, each MyButton had its own independent count, and when each button was clicked, only the count for the button clicked changed:</p>
      <div className='container mb-5'>
      <span><img style={{height:'350px',width:'350px',marginRight:'60px'}} src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_child.png&w=640&q=75' alt='hooks'/></span>
      <span><img style={{height:'350px',width:'350px'}} src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_child_clicked.png&w=640&q=75' alt='hooks'/></span>
      <p className='h6 mt-4 mt-6' style={{marginRight:'40px'}}>Initially, each MyButton’s count state is 0</p>
      <p className='h6 mt-4 mt-6'>The first MyButton updates its count to 1</p>
      <p className='h6 mt-4 mt-5'>However, often you’ll need components to share data and always update together.</p>
      <p className='h6 mt-4 mt-6'>To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.</p>
      <p className='h6 mt-4 mb-4'>In this example, it is MyApp:</p>
      <span><img style={{height:'350px',width:'350px',marginRight:'60px'}} src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_parent.png&w=640&q=75' alt='count'/></span>
      <span><img style={{height:'350px',width:'350px'}} src='https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_parent_clicked.png&w=640&q=75' alt='count'/></span>
      <p className='h6 mt-4 mt-6'>Initially, MyApp’s count state is 0 and is passed down to both children</p>
      <p className='h6 mt-4 mt-6'>On click, MyApp updates its count state to 1 and passes it down to both children</p>
      <p className='h6 mt-4 mt-6'>Now when you click either button, the count in MyApp will change, which will change both of the counts in MyButton. Here’s how you can express this in code.</p>
      <p className='h6 mt-4 mt-6'>First, move the state up from MyButton into MyApp:</p>
      </div>
      <div className='code1 mt-4 mb-4'>
      <span style={{color:'blue'}}>export default function MyApp() {'{'}</span><br></br>
      <span style={{color:'red'}}>{'const [count, setCount] = useState(0);'}</span><br></br>
      <span style={{color:'green'}}>function {'handleClick()'} {'{'}</span><br></br>
      <span>{'setCount(count + 1)'};</span><br></br>
      <span>{'}'}</span><br></br>
      <span>return{'('}</span><br></br>
      <span>{'<'}div{'>'}</span><br></br>
      <span style={{color:'blue'}}>{'<'}h1{'>'}Counters that update separately{'<'}/h1{'>'}</span><br></br>
      <span>{'<'}MyButton /{'>'}</span><br></br>
      <span>{'<'}MyButton /{'>'}</span><br></br>
      <span>{'<'}/div{'>'}</span><br></br>
      <span> {')'};</span><br></br>
      <span>{'}'}</span><br></br>
      <span>function MyButton() {'{'}</span><br></br>
      <span>// ... we're moving code from here ...</span>
      <span>{'}'}</span>
      </div>
      <p className='h6 mt-4 mb-4'>Then, pass the state down from MyApp to each MyButton, together with the shared click handler. You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like {'<img>'}:</p>
      <div className='code1 mt-4 mb-4'>
      <span style={{color:'blue'}}>export default function MyApp() {'{'}</span><br></br>
      <span style={{color:'red'}}>{'const [count, setCount] = useState(0);'}</span><br></br>
      <span style={{color:'green'}}>function {'handleClick()'} {'{'}</span><br></br>
      <span>{'setCount(count + 1)'};</span><br></br>
      <span>{'}'}</span><br></br>
      <span>return{'('}</span><br></br>
      <span>{'<'}div{'>'}</span><br></br>
      <span style={{color:'green'}}>{'<'}h1{'>'}Counters that update together{'<'}/h1{'>'}</span><br></br>
      <span style={{color:'red'}}>{'<'}MyButton {'count={count}'} {'onClick={handleClick} '}/{'>'}</span><br></br>
      <span style={{color:'blue'}}>{'<'}MyButton {'count={count}'} {'onClick={handleClick} '}/{'>'}</span><br></br>
      <span>{'<'}/div{'>'}</span><br></br>
      <span>);</span><br></br>
      <span>{'}'}</span>
      </div>
      <p className='h6 mt-4 mb-4'>The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.</p>
      <p className='h6 mt-4 mb-4'>Finally, change MyButton to read the props you have passed from its parent component:</p>
      <div className='code1 mt-4 mb-4'>
      <span style={{color:'red'}}>function MyButton({'{ count, onClick }'}) {'{'}</span><br></br>
      <span>return (</span><br></br>
      <span style={{color:'blue'}}> {'<'}button {'onClick={onClick}'}{'>'}</span><br></br>
      <span style={{color:'green'}}> Clicked {'{count}'} times</span><br></br>
      <span>{'<'}/button{'>'}</span><br></br>
      <span>);</span><br></br>
      <span>{'}'}</span>
      </div>
      <p className='h6 mb-4 mt-4'>When you click the button, the onClick handler fires. Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1), incrementing the count state variable. The new count value is passed as a prop to each button, so they all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.</p>
    </div>
  );
}

export default Module3;

