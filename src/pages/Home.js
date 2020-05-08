import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useHistory} from 'react-router';

function Home({userInformation, loading}) {
    const [allScrapbooks, setAllScrapbooks] = useState([]);
    const [myScrapbook, setScrapbook] = useState('');
    const email = userInformation.email;
    const uid = userInformation.uid;

    useEffect(() => {
        axios
            .get(
                `https://fathomless-savannah-67726.herokuapp.com/`
            )
            .then(function (response) {
            // handle success
            setAllScrapbooks(response.data);
            console.log("response", response) })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []); /* [] is updated and useEffect will keep running */

    let header = '';
    if (allScrapbooks.length != 0) {
        header = "Here are your memories:"
    } else {
        header = "You don't have any memories so far. Why don't you create some?"
    }

    if (loading) return null;

    return(
        <div className = "HomeWrapper">
            <h1> Welcome, {email} </h1>
            <h2> {header} </h2>

            <div className="ScrapbookWrapper">

                {allScrapbooks.map((post, i) => (
                    <div className="SampleWrapper"key={i}> 
                        <a href = {`/post/${post.id}`}>
                        <img src={post.image} alt={post.id} />
                        <h3>{post.scrapbookId}</h3>
                        <p> {post.date} </p>
                         </a> 
                    </div>
                ))} 
            </div>
            <p> {myScrapbook}</p>
        </div>
    );
}

export default Home;