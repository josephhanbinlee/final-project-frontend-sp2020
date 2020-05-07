import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"
import CreateMemoryForm from "../components/CreateMemoryForm";
import AllPosts from "../components/AllPosts";

function Scrapbook() {
    const { id } = useParams();
    const[postData, setPostData] = useState({});
    console.log("id", id)

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

    console.log("text", postData)

    return(
        <div className="Scrapbook">
            <img src={postData.image} alt={postData.id} />
            <p>{postData.text}</p>
        </div>
    )
}

export default Scrapbook;