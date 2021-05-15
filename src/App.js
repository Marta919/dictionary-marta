import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return (
    <div className="container">
    <h1> Dictionary for Everyone </h1>
     <h2> Which words do you want to put in your mind? </h2>
    <Dictionary />
   
    <footer className="open"> Coded by <a className="mina" href="https://github.com/Marta919"> Marta D'Orazio </a></footer>
    </div>
  );
}

export default App;