import Header from './Components/Header'
import Feed from './Components/Feed'
import { useState } from 'react'
import Loding from './Components/Loding'

function App() {

  const [show , setShow]= useState(false)
  const themeColorChanger= ()=>{
    setShow(!show)
  }

  return (
    <div className="App">
     <Header show={show} themeColorChanger={themeColorChanger} />
     <Feed show={show} />
    </div>
  );
}

export default App;
