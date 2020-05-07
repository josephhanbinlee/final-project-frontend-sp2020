import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useHistory} from 'react-router';

// Components
import CreateScrapbookForm from '../components/CreateScrapbookForm';
import MemoriesList from '../components/CreateMemoryForm';

function Home( {userInformation}) {
    let history = useHistory();

    console.log(userInformation);
    const [allScrapbooks, setAllScrapbooks] = useState([]);
    const[myScrapbook, setScrapbook] = useState('');
    const email = userInformation.email;
    const uid = userInformation.uid;

    useEffect(() => {
        axios
            .get(
                `http://localhost:4000`
                /*`https://fathomless-savannah-67726.herokuapp.com/` */
                // heroku api website
            )
            .then(function (response) {
            // handle success
            setAllScrapbooks(response.data);
            console.log("response", response) })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []); /* [] is updated and useEffect will keep running --> bc  */

    console.log(allScrapbooks);

    function createScrapbookFunction(e) {
        e.preventDefault();
        let scrapbookId = e.currentTarget.scrapbookId.value;
        let idFromText = scrapbookId.replace(/\s+/g, "-").toLowerCase().substr(0,16);
        let userId = uid;

        console.log(scrapbookId, idFromText, userId);

        axios
        .get(
            `http://localhost:4000/create-scrapbook?scrapbookId=${scrapbookId}&id=${idFromText}&userId=${userId}`
        )
        .then(function (response) {
            console.log('response', response)
        })
        .catch(function(error) {
            console.log(error)
        })

    }

    return(
        <div className = "HomeWrapper">
            <h1> Welcome, {email} </h1>
            <div className="CreateScrapbook">
                <h2> <a href="/create-scrapbook"> Make a New Scrapbook! </a> </h2>
                <CreateScrapbookForm createScrapbookFunction={createScrapbookFunction} />

            </div>
            <div className="ScrapbookWrapper">

                {allScrapbooks.map((post, i) => (
                    <p key={i}> <a href = {`/post/${post.id}`}>{post.scrapbookId} </a> </p>
                ))} 
            </div>
            <p> {myScrapbook}</p>
        </div>
    );
}

export default Home;