import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

// Pages
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
      </Router>
    </div>
  );
}

export default App;
