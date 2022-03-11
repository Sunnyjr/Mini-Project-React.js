import './App.css';
import Counterproject from './component/Counterproject';
import TemperatureControlApp from './component/TemperatureControlApp';
// import './component/TemperatureControlApp.scss'

function App() { 

 return(
   
   <div>
       {/* <Counterproject /> */}
       <TemperatureControlApp />

   </div>
  );
};
export default App;



// export default function App() {
//   const cart = [
//     ["Corn", "Potato", "Radish"],
//     ["Tomato", "Graphes", "Mango"],
//   ];
//   return (
//     <div>
//       {cart.map((items, index) => {
//         return (
//           <ol>
//             {items.map((subItems, sIndex) => {
//               return <li> {subItems} </li>;
//             })}
//           </ol>
//         );
//       })}
//     </div>
//   );
// }

// import React, { useEffect, useState} from 'react';
// import About from './About';
// import axios from 'axios';

// function App(){
  
//   const [notes, getNotes] = useState('');

//   useEffect(() => { //useEffect runs after the component is rendered. Adding the empty brackets [ ] as an argument is necessary so the code doesn’t run in an infinite loop.
//     getAllNotes();
//   }, [])
      
//   const url ="https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b";
//   //url ko url nam k object me store kiya  n axios me use kiya
  
//   const getAllNotes =() => {
//     axios.get(`${url}notes`) //Axios is a promise-based library, so the promise must be handled. I am going to use `then` to handle the promise if it is fulfilled, and `catch` if it is rejected (aka, I get an error). Then is a callback function that automatically has the response object as an argument.
//                       // we can easily send asynchronous HTTP requests to REST APIs and perform create, read, update and delete operations.  
//                       //When we send a request to the API using axios, it returns a response. The response object consists of: data, status,headers,config, reqest.
 
//       .then((response) => {
//       const allNotes = response.data.notes.allNotes;
//       getNotes(allNotes);//add our data too state.
//     })
//     .catch(error => console.error(`Error: ${error}`));
//   } //I save my data into a variable I call `allNotes`. I got `response` and `data` from the response object, and then drilled into my own data object to get `notes`, and finally `allNotes`. 
   
//   return (
//        <div> 
//            <h1>hi i Am a function </h1>
//            <About/>
//        </div>
      
//   )
// export default App;








//*************Apply, call , Bind in JS.**************
// Bind() :- "The bind method creates a new function and sets the this keyword to the specified object.""
// Syntax:- function.bind(thisArg, optionalArguments)
// Call() :-"The call method sets the this inside the function and immediately executes that function."
// The difference between call() and bind():- 
//  is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.

// Context API Hook - "if you want to pass Parent data  to the perticular Child/Component using create context without sending props its called useContext(). "
//to pass data we need Provider to pass data.and we wrap the child component in provider. and consume the context with usecontext().

// *************useEffect() Hook************
// What is useEffect hook in React?
// By using this Hook, you tell React that your component needs to do something after render. React will remember
// the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
// Why is useEffect used?
// useEffect Hook is to do side-effects of using class-based components.
// For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
// import React, {useState, useEffect} from 'react';
// function App() {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{ //similar to componentDidMount() and componentDidUpdate;
//         alert("I am clicked"); // useEffect render after the component rendered.
//     });
//     return (
//         <div>
//             <div>click me to run{count} </div> 
//             <button onClick={() => setCount(count + 1)}> click me </button>
//         </div>
//     );
// };
// ************UseState() hook*************
// What is useState Hook in React?
// The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.

// What is the use of useState () in Hook?
// useState is a Hook that allows you to have state variables in functional components. You pass the initial
// state to this function and it returns a variable with the current state value (not necessarily the initial state) 
// and another function to update this value.

// How do you use useState in React class?
// import React, { useState } from "react"; useState takes just one argument which is the intial value, and 
// returns a stateful value and a function to change it, we destructured it like this: const [state, setState] = useState(initialValue);
// Example:- import React, {useState} from 'react';
// function App() {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//         <div>
//             <div>click me to run{count} </div> 
//             <button onClick={() => setCount(count + 1)}> click me </button>
//         </div>
//         </>
//     );
// };
// ***************Feature of Reactjs******
// -JSX
// -Components
// -One-way-databinding:-"ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding"
// -Virtual DOM
// -Simplicity :-"ReactJS uses JSX file which makes the application simple and to code as well as understand."
// -Performance :-"This feature makes it much better than other frameworks out there today."


// "NPM install" installs dependencies into the node_modules/ directory, for the node
//  project you're working on. You can call install on another node.js project (module), to install it as a dependency for your project.
// npm run build runs the script "build" and created a script which runs your application - let's say server.js
// npm start runs the "start" script which will then be "node server.js"

// How do I create a react application?
// If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.
//  If you've already created the create-react-app you can skip this section. Install create-react-app by running 
//  this command in your terminal: C:Users Your Name >npm install -g create-react-app

//***********Controle and Uncontrole component:-***********
// Controle:- "An input form element whose value is controlled by React in this way is called a “controlled component”.
// we should always use control component becouse its  better obtimize  DOM manupilation.

//Uncontrole:- "To get value of form directly(using ref) without state called Unconrole component".
// "jab koi bhi form banate hay  to use 2 tarike se handle karte  hay 1. by using state 2. by using ref(form ki direct valuse get kare)"
//this is read only. 

// ****************DOM vs vertual DOM*********
//DOM :- it is progrsmming interface for html and xml document.it represent the page sp that programs can change the document structure,stylen content. 
//(document object model ) document containe tages and code i.e called document.
//object:- html,head,js,body all are object to the document.
//model represent the way of writing the code .

//vertual dom :- its create a exact copy of REAL DOM  and its fater than dom , if u modifyed somthing in this
//  node/component then react update that modifed component on vertual DOM and then upodate real dom.

// 13) which component do you used mostly?why? -funciton component
//If we store data in local storage then how it will be access in another PC - its dosnt accessable 

// *****************NPM Run Build and NPM start**********
// npm run build builds the app for production to the build folder. It correctly bundles React 
// in production mode and optimizes the build for the best performance.
// jab hum run npm run build to ek folder banta hay build name ka or usme src n HTML,CSS JS k files copy past 
// ho jate hay or jab npm start karte hay to build folder  se compile hota hay code. server side se .
// diferance bet build  & start:-
// When we run npm start, it actually runs (react-scripts start) command from above file.
//  Similarly, build command runs. It optimizes our code without running development server 
//  and create ready to use files. Node modules contains all the other required dependencies
//   but we generally don't need to do anything there.

// *************Lazy Loading**********
// its is used to handle the big data and code copmplaxity.
// javascript software development By definition, lazy loading is a way to postpone the 
// loading of non-critical assets such as images, videos or simply some data at page load time.
// import React, {Suspense, lazy} from 'react';
// //import About from './About';
// const About = lazy(() =>import('./About'))

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Lazy loading</h1>
//         <Suspense fallback={<div>please wait.... about is loading</div>}>
//         <About />
//         </Suspense>
//       </div>
//     )
//   }
// }
// export default App;



// import { Component } from 'react/cjs/react.production.min';
// import './App.css';
// import AAA from './component/AAA';
// import BB from './component/BB'

// class Parent extends Component{
//   render() {
//     return(
//       <div className='add'>
//         <h1><Child name="First child" /></h1>
//         <h2><AAA name="second child"  /></h2>
//         <h2><BB name="third child"  /></h2>
//         <h2><BB name="third child"  /></h2>
//         </div>
//     );
//   }
// }

// const Child =(props) =>{
//   return <p>
//     {props.name}
    
//   </p>
// }

// export default Parent;
