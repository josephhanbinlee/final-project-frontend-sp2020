import React from 'react';

function CreatePost() {
    return <div>
        <h1> Create Post </h1>
    </div>
};

/*
const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const blogposts = db.collection("blogposts");

const form = `<form action="/create/submit">
<input type="text" name="title" placeholder="Title" />
<input type="text" name="text" placeholder="Text" />
<input type="text" name="author" placeholder="Author" />
<button type="submit">Submit</button>
</form>`;

// /create
router.get("/", (req, res) => res.send(form));


// /create/submit
router.get("/submit", (req, res) => {
    const queryParams = req.query;

    blogposts.doc().set(queryParams)
    .then(function(doc) {
        res.send("<h1>Submission Successful</h1><p><a href='/create'>Create another post</a></p>");
    }).catch(function(error) {
        console.log('Error', error);
        res.send(`Error Submitting: ${error.toString()}`);
    });
});
module.exports = router; */

export default CreatePost;
