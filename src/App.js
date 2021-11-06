//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
// import {Header} from './components/Header'
import Nav from './components/Nav';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';

/*
function App() {
  return (
    <>
    <div>
    <p>hi</p>
    </div>
    <h1>welcome</h1>
    <button onClick={test}>click here</button>
    </>
  );
}

export default App;
 */



export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header name="hemanta" age='26'/> */}
        <BrowserRouter>
        <Nav />
        <Route exact path="/" >
            <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        </BrowserRouter>
      </div>
    )
  }
}

