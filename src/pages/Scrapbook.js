import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"
import CreateMemoryForm from "../components/CreateMemoryForm";
import AllPosts from "../components/AllPosts";

function Scrapbook() {
    const { id } = useParams();
    const[postData, setPostData] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:4000/scrapbook/${id}`)
            .then(function(response) {
                setPostData(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
    }, []);

    return(
        <div className="Scrapbook">
            <h2>{postData.scrapbookId}</h2>
            <img src={postData.image} alt={postData.id} />
            <h4 id="date">{postData.date}</h4>
            <p>{postData.text}</p>
        </div>
    )
}

export default Scrapbook;