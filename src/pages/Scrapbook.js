import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"

function Scrapbook() {
    const { id } = useParams();
    const[postData, setPostData] = useState({});

    useEffect(() => {
        axios
            .get(`https://fathomless-savannah-67726.herokuapp.com/scrapbook/${id}`)
            .then(function(response) {
                setPostData(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
    }, []);

    return(
        <div className="Scrapbook">
            <a href="/"> &larr; Go back </a>
            <h2>{postData.scrapbookId}</h2>
            <img src={postData.image} alt={postData.id} />
            <h4 id="date">{postData.date}</h4>
            <p>{postData.text}</p>
        </div>   
    )
}

export default Scrapbook;