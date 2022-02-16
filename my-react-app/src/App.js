import React from 'react';
import Cal from './components/calendar';

function App() {
  return (
    <div className="wrapper">
      <h1>Manually Change Bookings</h1>
      <form>
        <input type="text" placeholder="Insert ID number"></input>
        <button>Search</button>
      </form>
      <Cal/>
    </div>
  )
}

export default App;