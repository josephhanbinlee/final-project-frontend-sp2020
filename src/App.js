import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import Header from "./components/Header";

// Pages
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Scrapbook from "./pages/Scrapbook";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const[storageRef, setStorageRef] = useState(null);

  var firebaseConfig = {
    apiKey: "AIzaSyBAzVaQUZLREshHTHzbqyI7IY1I-Y6vkaA",
    authDomain: "final-project-d704f.firebaseapp.com",
    databaseURL: "https://final-project-d704f.firebaseio.com",
    projectId: "final-project-d704f",
    storageBucket: "final-project-d704f.appspot.com",
    messagingSenderId: "398220089345",
    appId: "1:398220089345:web:3b626a4fb2e047cd9d4800"

  };

    // Ensure app is initialized when it is ready to be
    useEffect(() => {
      // Ensure app is not initialized more than once
      if (!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      }
  
      // Setting auth to be persistent in SESSION storage, not cookies
      // SESSION is easier to work with
  
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .catch(function(e) {
          console.log('AUTH ERROR', e);
        });

    }, [firebaseConfig]);
    
  
  // Check to see if User is logged in
  // User loads page, check status --> set state accordingly
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        // Logged in
        setUserInformation(user);
        setLoggedIn(true);
      } else {
        // Not logged in
        setUserInformation({});
        setLoggedIn(false);
      }
      // Stop loading once everything is looked over
      setLoading(false);
    })
  
  }, [])

  // Login
  function LoginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log("LOGIN RESPONSE", response);
        console.log("login success")
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log("LOGIN ERROR", error)
      })
  }

  // Logout
  function LogoutFunction() {
    firebase
    .auth()
    .signOut()
    .then(function() {
      setLoggedIn(false);
      console.log("logout success")
    })
    .catch(function(error) {
      console.log("LOGOUT ERROR", error)
    });

  }

  // Create Acc
  function CreateAccountFunction(e) {
    e.preventDefault(); // prevents the form from being set as a default form
    // Default values for testing --> named in CreatAccForm.js
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log("VALID ACCOUNT CREATE", response);
        console.log("account success")
        setLoggedIn(true);
      })
      .catch(function(e) {
        console.log("CREATE ACCOUNT ERROR", e);
      }) 

  }
    
  function createPostWithImage(e) {
    e.preventDefault();
    const storageRef = firebase.storage().ref();
    const fileRef = e.currentTarget.memoryImage.files[0];
    const uploadTask = storageRef
      .child(`${fileRef.name}`)
      .put(fileRef);

    let scrapbookId = e.currentTarget.scrapbookId.value;
    let text = e.currentTarget.text.value;
    let idFromText = scrapbookId.replace(/\s+/g, "-").toLowerCase().substr(0,16);
    let userId = userInformation.uid;
    let myDate = new Date().toDateString();

    uploadTask.on(
      'state_changed',
      (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      }, (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      }, () => {
          // Do something once upload is complete
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

          axios
            .get(
                `https://fathomless-savannah-67726.herokuapp.com/create-scrapbook?scrapbookId=${scrapbookId}&id=${idFromText}&userId=${userId}&text=${text}&image=${downloadURL}&date=${myDate}`
            )
            .then(function (response) {
                console.log('response', response)
            })
            .catch(function(error) {
                console.log(error)
            }) 
        
        });
      });
    setTimeout(function() { alert("You can go back to your memories to find this!"); }, 5000);
  }


  if (loading) return null;

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn}/>
      <Router>

        <Route exact path="/">
          {!loggedIn ? (<Redirect to="/create-account"/> ) : (<Home userInformation={userInformation} loading={loading}/>)}
        </Route>

        <Route exact path="/post/:id">
          {!loggedIn ? (<Redirect to="/login"/> ) : (<Scrapbook/>)}
        </Route>

        <Route exact path="/login">
          {!loggedIn ?
          (<Login LoginFunction={LoginFunction}/>) : (<Redirect to="/" />)}
        </Route>

        <Route exact path="/create-account">
          {!loggedIn ?
          (<CreateAccount CreateAccountFunction={CreateAccountFunction} />) : (<Redirect to="/" />)}
        </Route>

        <Route exact path="/create-scrapbook">
          {!loggedIn ? (<Redirect to ="/login" />) : (<CreatePost userInformation={userInformation}
          createPostWithImage={createPostWithImage}/>)}
        </Route>

      </Router>
    </div>
  );
}

export default App;
