import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
 // BrowserRouter as Router,
  // Switch,
 // Route
// } from "react-router-dom";


function App() {   //Function based components before F.B.C class based components will be used  it will very lendy.So F.B.C wii be used.
  const[mode, setMode]= useState('light'); //Whether dark mode is enabled or not.
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
     }, 2000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'First React App-Home - Dark Mode';

     // setInterval(() => {
      //  document.title = 'Textutils is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //  document.title = 'Install Textutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title = 'First React App-Home - Light Mode';
    }
  }
  return (
    <>
{/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
{/*<Navbar/>*/}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert}/>
<div className="container my-3">
{/* <Switch> */}
  {/* /users --> Component 1 
      /users/home --> Component 2 */}
  {/* <Route exact path="/about">
      <About/>
  </Route> */}
     {/* <Route exact path="/"> */}
         <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* </Route> */}
  {/* </Switch> */} 
  </div>
  {/* </Router> */}
    </>
   
  );
}

export default App;
