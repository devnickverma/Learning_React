import { useState } from "react"; // Importing useState hook from React

function App() {
  // State to hold the current background color, initialized to "olive"
  const [color, setColor] = useState("olive");

  return (
    <div 
      className="w-full h-screen duration-200" 
      style={{ backgroundColor: color }} // Set the background color based on state
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Button components for changing the background color */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")} // Set color to red when clicked
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")} // Set color to green when clicked
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")} // Set color to blue when clicked
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")} // Set color to purple when clicked
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")} // Set color to orange when clicked
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
            onClick={() => setColor("cyan")} // Set color to cyan when clicked
          >
            Cyan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
            onClick={() => setColor("magenta")} // Set color to magenta when clicked
          >
            Magenta
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")} // Set color to yellow when clicked
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lime" }}
            onClick={() => setColor("lime")} // Set color to lime when clicked
          >
            Lime
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")} // Set color to brown when clicked
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; // Export the App component to be used in other files
