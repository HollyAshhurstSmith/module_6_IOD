import './App.css';
import React from 'react';
import Greeting from './Greeting'; {/* Lab 1/ Exercise 1 */}
import BigCats from './BigCats'; {/* Lab 2,4,5/ Exercise 2,4,5 */}
import Emoji from './Emoji'; {/* Lab 3/ Exercise 3 */}
import Calculator from './Calculator'; {/* Lab 6/ Exercise 6 */}


function App() {
  return (
    <div className="App">
      <Greeting /> {/* default */}
      <Greeting name="Kingsley">Welcome, yo, what's up?</Greeting> {/* Lab 1/ Exercise 1 */}
      <br />

      <h1>Big Cats</h1> {/* Lab 2,4,5/ Exercise 2,4,5 */}
      <BigCats />
      <br />

      <h1>Emoji Mood</h1> {/* Lab 3/ Exercise 3 */}
      <Emoji /> 
    
      <h1>Calculator</h1>  {/* Lab 6/ Exercise 6 */}
      <Calculator />

    </div>
  );
}

export default App;
