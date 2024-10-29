import { useState } from 'react'; // Importing useState hook from React for state management
import reactLogo from './assets/react.svg'; // Importing React logo for potential use
import viteLogo from '/vite.svg'; // Importing Vite logo for potential use
import './App.css'; // Importing CSS file for styling the App component

function App() {
  // Declaring a state variable 'counter' initialized to 15, and 'setCounter' function to update it
  const [counter, setCounter] = useState(15);

  // Function to increase the counter value by 1
  const addValue = () => {
    setCounter(counter + 1); // Updating state using setCounter function
  }

  // Function to decrease the counter value by 1
  const removevalue = () => {
    setCounter(counter - 1); // Updating state using setCounter function
  }

  // The component's rendered output
  return (
    <>
      <h1>React</h1> {/* Displaying the title */}

      <h2>Counter value : {counter}</h2> {/* Displaying the current value of the counter */}
      
      <button
        onClick={addValue} // Setting up an onClick event to call addValue function
      >
        Add Value
      </button>

      <br /> {/* Line break for spacing */}
      <br /> {/* Line break for spacing */}

      <button 
        onClick={removevalue} // Setting up an onClick event to call removevalue function
      >
        Remove Value
      </button>
    </>
  )
}

export default App; // Exporting the App component as default for use in other files
