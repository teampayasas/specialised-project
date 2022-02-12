import React from 'react';
import Navbar from './Navbar';
function App() {
  return (
    // can only return one thing
    // <div className="App"></div>
    <>
      <Navbar />
      <a href="#">Home</a>
      <a href="#">Booking</a>
      <a href="#">Contact</a>
    </>
  );
}

export default App;

// href="https://reactjs.org"