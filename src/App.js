import React, { useState } from 'react';
import data from './data/data';
import List from './components/List';
function App() {
  const [people, setPeople ] = useState(data)
  const clearHandler = () => {
    setPeople([])
  }
  return (
          <main>
            <section className="container">
              <h3>{people.length} Birthdays today</h3>
              <List people={people} />
              <button onClick={clearHandler}>Clear All</button>
            </section>
          </main>
  )
}

export default App;
