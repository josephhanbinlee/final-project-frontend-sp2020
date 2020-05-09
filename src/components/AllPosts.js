import React, {useState, useEffect} from 'react';
import axios from "axios"

function AllPosts() {
    const [allMemories, setAllMemories] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:4000`
                /*`https://fathomless-savannah-67726.herokuapp.com/` */
                // heroku api website
            )
            .then(function (response) {
                // handle success
                setAllMemories(response.data);
                console.log("response", response) })
            .catch(function (error) {
            // handle error
                console.log(error);
        })
    }, []); /* [] is updated and useEffect will keep running --> bc  */


    return (
        <div>
            <p> Memories go here</p>
            {allMemories.map((post, i) => (
                    <p key={i}> <a href = {`/post/${post.id}`}>{post.scrapbookId} </a> </p>
                ))} 
        </div>
    )
}

export default AllPosts;