
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Interview Preparation Day 6</h1>

      <h3>Q1. What is an event in React ?</h3>
      <p>Ans. An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading a web page, pressing a key, window resizes, and other interactions are called events. <br />
          React has its own handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event. 
      </p>

      <h3>Q2. What is memory leak and how to overcome ?</h3>
      <p>Ans. Memory leak occurs when programers create a memory in heap and forget to delete it. The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the applications fails, or the systme shows down vastly. Memory leaks ar particularly serious issues for programs like demons and servers which definition never terminate.</p>

      <h3>Q3. Do you prefer function-based or class component and why ?</h3>
      <p>Ans. Functional Component. A functional component is just a plain javascript pure function that accepts props as an argument and returns a React element(JSX) . A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components .</p>

      <h3>Q4. Explain reducer as pure function in redux .</h3>
      <p>Ans. In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action. </p>

      <h3>Q5. Why do we use redux thunk ?</h3>
      <p>Ans. The most common use case for Redux Thunk is form communicating asynchronously with an external API to retrieve or save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API. Redux Thunk is middleware that allows you return functions, rather than just actions , within Redux . Thsi allows for delayed actions , including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous ,for example , using axios to send a GET reques.</p>

      <h3>Q6. What do you know about NPM ?</h3>
      <p>Ans. NPM stands for 'Node Package Module', npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private develpment as well.
        <p>npm consists of three distinct components: </p>
        <li>1. the website</li>
        <li>2. the Command Line Interface (CLI) </li>
        <li>3. the registry</li>
      </p>


    </div>
  );
}

export default App;
