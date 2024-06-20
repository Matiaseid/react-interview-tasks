
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


const birds = ['Mockingbird', 'Oriole', 'Parrot', 'Penguin', 'Pigeon', 'Quail', 'Raven', 'Sparrow']


function App() {
  
  const [user, setUser] = useState()
  
  useEffect(() => {
    axios('https://randomuser.me/api/')
      .then(response => {
        setUser(response.data.results[0])
      })
  }, []);
  
  
  return (
    <div className="App">
      
      <h1>Birds</h1> <br />
      <div>
        { /* Here you should use birds.map(...) to display the list of birds */}
      </div>
      
      <h1>Counter</h1> <br />
      
      <div>
        { /* Here you should make a counter
             Use useState for the count starting at 0
             Add a button that increments the counter by 1
             Display the counter value
         */}
      </div>
      
      <div>
        { /* Here you should use user to display
              - first and last name
              - email
              - the medium picture
              - country, state, city
          */}
      </div>
      
      <h1>User</h1> <br />
      <pre style={{maxWidth: '100%'}}>
        {JSON.stringify(user, null, 2)}
      </pre>
      
      <div>
        { /* Here you should make the button fetch a new random user */}
        <button>Fetch new user</button>
      </div>
      
      
      <h1>Pokemon</h1> <br />
      
      <div>
        { /* Here you should make a new component called Pokemon that will fetch data from
             https://pokeapi.co/api/v2/pokemon/ditto and display the name and the image (sprites.front_default)
         */}
      </div>
      
      <div>
        { /* Here you should make a new component called Pokemon2 that takes name as a prop and
             fetch data from https://pokeapi.co/api/v2/pokemon/{name} and display the name and the image (sprites.front_default)
             Then you should use this component to display the following pokemons: squirtle, pikachu, charizard
         */}
      </div>
      
      <div>
        { /* Here you should make a new component called PokemonSearch that has an input field and a button
              When you enter a name in the input field and click the button it should fetch the pokemon with that name
         */}
      </div>
      
      
      <h1>CSS</h1> <br />
      
      { /* Can you center this blue div horizontally? */}
      
      <div style={{width: '100%', backgroundColor: 'white', margin: 20}}>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
      </div>
      
      
      
      { /* Can you make these divs appear in a row? */}
      <div style={{width: '100%', backgroundColor: 'white', margin: 20}}>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
      </div>
      
      
      { /* Can you make these divs appear in a 2x2 grid using "display: grid"? */}
      <div style={{width: '100%', backgroundColor: 'white', margin: 20}}>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
        <div style={{width: 150, height: 150, margin: 20, backgroundColor: 'blue'}}></div>
      </div>
    
    </div>
  );
}

export default App;
