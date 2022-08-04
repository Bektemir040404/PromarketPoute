import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState([])

  const func = () => {
    const pp = prompt('Досунун аты ким?')
    setName( p => [...p, pp]
    )
  }

  

  return (
    <>
    <h1>To do list ({name.length})</h1>
    <button onClick={func}>Add friends</button> 
    <ul>{name.map(Element =>{
      return <li>{Element} ({Element.length})</li>
    })}</ul>
    </>
  );
}

export default App;
