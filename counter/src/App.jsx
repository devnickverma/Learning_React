import { useState } from 'react'; // Importing useState hook from React for state management
import reactLogo from './assets/react.svg'; // Importing React logo for potential use
import viteLogo from '/vite.svg'; // Importing Vite logo for potential use
import './App.css'; // Importing CSS file for styling the App component

function App() {
  // Declaring a state variable 'counter' initialized to 15, and 'setCounter' function to update it
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState(''); // State for message display

  // Function to increase the counter value by 1
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); // Updating state using setCounter function
      setMessage(''); // Clear message
    } else {
      setMessage('Maximum limit reached'); // Set message if max limit is reached
    }
  };

  // Function to decrease the counter value by 1
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1); // Updating state using setCounter function
      setMessage(''); // Clear message
    } else {
      setMessage('Minimum limit reached'); // Set message if min limit is reached
    }
  };

  // The component's rendered output
  return (
    <>
      <h1>React</h1> {/* Displaying the title */}

      <h2>Counter value : {counter}</h2> {/* Displaying the current value of the counter */}
      
      <button onClick={addValue}>Add Value</button> {/* Add Value button */}

      <br /> {/* Line break for spacing */}
      <br /> {/* Line break for spacing */}

      <button onClick={removeValue}>Remove Value</button> {/* Remove Value button */}

      {message && <p>{message}</p>} {/* Display message if it exists */}
    </>
  );
}

export default App; // Exporting the App component as default for use in other files
