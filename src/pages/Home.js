import React, { useEffect, useState } from 'react';
import axios from "axios";

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


    return(
        <div>
            <h1> Welcome, {email} </h1>
            <p> {uid} </p>
            <div className="">
                {/*Display Posts Here */}
                {allPosts.map((post, i) => (
                    <p key={i}>{post.text} </p>
                ))}
            </div>
        </div>
    );
}

export default Home;