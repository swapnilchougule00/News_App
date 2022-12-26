import Header from './Components/Header'
import Feed from './Components/Feed'
import { useState } from 'react'
import { Route , Routes} from "react-router-dom";
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {

  const [show , setShow]= useState(false)
  const themeColorChanger= ()=>{
    setShow(!show)
  }

  return (
    <div className="App">
      <Header show={show} themeColorChanger={themeColorChanger}/>
    <Routes>
      <Route path='/' element={<Feed show={show} />}/>
      <Route path='/Contact' element={<Contact show={show} />}/>
    </Routes>
     <Footer show={show} />
    </div>
  );
}

export default App;
