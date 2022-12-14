import './App.css'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor="#03182e";
      document.body.style.color="white";
      document.title='PlagX-Dark Mode';
      // Setting main title again after 2 sec after we have showed the information
      setTimeout(() => {
        document.title='PlagX';
      }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      document.title='PlagX-Light Mode';
      // Setting main title again after 2 sec after we have showed the information
      setTimeout(() => {
        document.title='PlagX';
      }, 2000);
    }
  }

  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <BrowserRouter>
        <Navbar title="PlagX" mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text below" mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
