# React App Setup and Concepts

## Step 1: Create a New React App
To create a new React application, run the following command:

npm create vite@latest

This command initializes a new Vite project with React. Vite is a modern build tool that offers fast development and optimized builds.

## Step 2: Install Dependencies
Once your project is created, navigate into the project directory and install the required dependencies:

npm install

This command installs all the required `node_modules` for your React application. These modules include React and other dependencies needed for your app to run.

## Lecture 5: Assignment
### Task:
Implement functionality to ensure the counter value remains between a maximum of 20 and a minimum of 0. This means you should modify the `addValue` and `removeValue` functions to include these constraints.

## Key Concepts

### Virtual DOM
A lightweight representation of the actual DOM in memory. It helps React efficiently update the browser’s DOM by comparing changes. Only necessary updates are made to the real DOM for better performance.

### Fiber
React’s internal engine for handling the reconciliation algorithm. It breaks rendering into smaller, prioritized tasks for smoother performance and allows asynchronous rendering, making apps more responsive.

### Reconciliation
The process of determining what changes are needed in the DOM. It compares current and previous Virtual DOM versions to find updates, minimizing direct DOM manipulation for faster, optimized updates.

## Install Tailwind CSS
To install Tailwind CSS, follow these steps:

1. Visit the Tailwind CSS installation guide: 
   [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)

2. Install Tailwind CSS as a development dependency by running the following command in your terminal:

npm install -D tailwindcss

3. Initialize Tailwind CSS to create a configuration file:

npx tailwindcss init

## Props in React
Props (short for properties) are used to pass data from one component to another in React, allowing components to be dynamic and reusable.

### Example Props for the Card Component:
- **username**: (string) The name of the user displayed on the card.
- **btnText**: (string, optional) The text to be displayed on the button. Default value is "Follow".

### Usage:
<Card username="DevNeon" btnText="Follow 1" />

This will render a card with the username "DevNeon" and a button labeled "Follow 1".
