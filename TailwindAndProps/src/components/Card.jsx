import React from "react"; // Importing React library to use JSX and create components

// Defining the Card component, which takes `username` and an optional `btnText` prop
function Card({ username, btnText = "Follow" }) {
    return (
        <>
          {/* Wrapper div for the card with flexbox for layout */}
          <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
                {/* Image section with rounded corners and a height of 80 */}
                <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg" 
                        alt="profile-picture" // Alt text for accessibility
                    />
                </div>
                {/* Text content section of the card */}
                <div className="p-6 text-center">
                    {/* Displaying the username prop */}
                    <h4 className="mb-1 text-xl font-semibold text-slate-800">
                        {username}
                    </h4>
                    {/* Static description of the user's role */}
                    <p className="text-sm font-semibold text-slate-500 uppercase">
                        Product Manager 
                    </p>
                    {/* A brief description about the location */}
                    <p className="text-base text-slate-600 mt-4 font-light">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                    </p>
                </div>
                {/* Button section with a centered layout */}
                <div className="flex justify-center p-6 pt-2 gap-7">
                    <button 
                        className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                        type="button"
                    >
                        {btnText} {/* Displaying the button text, default is "Follow" */}
                    </button>
                </div>
          </div>
        </>
    );
}

// Exporting the Card component to use it in other parts of the application
export default Card;
