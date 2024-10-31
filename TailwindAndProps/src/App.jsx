import { useState } from 'react'; // Importing useState hook from React
import reactLogo from './assets/react.svg'; // Importing React logo (not used in this code)
import viteLogo from '/vite.svg'; // Importing Vite logo (not used in this code)
import './App.css'; // Importing CSS styles for the application
import Card from './components/card'; // Importing the Card component

// Main App component
function App() {
  const [count, setCount] = useState(0); // State variable for count initialized to 0
  
  // Object representing user data
  let myObj = {
    username: "Nick",
    age: 20
  };

  // Sample array (not used in this code)
  let newArr = [1, 2, 3];

  return (
    <>
      {/* Header with Tailwind CSS classes for styling */}
      <h1 className='bg-green-500 text-black p-5 rounded-lg'>Tailwind css</h1>
      <br />
      {/* Card components with different usernames and button texts */}
      <Card username="DevNeon" btnText="Follow 1"></Card>
      <br />
      <Card username="DevNick" btnText="Follow 2"></Card>
      <br />
      <Card username="DeVin"></Card>
    </>
  );
}

// Exporting the App component for use in index.js
export default App;
