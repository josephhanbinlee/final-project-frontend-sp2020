import React, { useEffect, useState } from 'react';
import axios from "axios";

// Components
import CreateScrapbookForm from '../components/CreateScrapbookForm';

function Home( {userInformation}) {
    console.log(userInformation);
    const [allPosts, setAllPosts] = useState([]);
    const email = userInformation.email;
    const uid = userInformation.uid;

    useEffect(() => {
        axios
            .get(
                `http://localhost:4000`
                // heroku api website
            )
            .then(function (response) {
            // handle success
            setAllPosts(response.data);
            console.log("response", response) })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []); /* [] is updated and useEffect will keep running --> bc  */

function createScrapbookFunction(e) {
    e.preventDefault();
    console.log(e);

    // Send the data to API
    // include queryParams
    // log response
}
    return(
        <div>
            <h1> Welcome, {email} </h1>
            <div className="CreateScrapbook">
                <h2> Make a New Scrapbook! </h2>
                <CreateScrapbookForm createScrapbookFunction={createScrapbookFunction}/>
            </div>
            <div className="">
                {/*Display Posts Here */}

                {allPosts.map((post, i) => (
                    <p key={i}>{post.scrapbook} </p>
                ))}
                
            </div>
        </div>
    );
}

export default Home;