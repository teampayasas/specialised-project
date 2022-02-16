import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <h1>Manually Change Bookings</h1>
      <form>
        <input type="text" placeholder="Insert ID number"></input>
        <button>Search</button>
        {/* <button>Edit</button> */}
      </form>
    </div>
  )
}

export default App;