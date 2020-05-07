import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"
import CreateMemoryForm from "../components/CreateMemoryForm";

function Scrapbook() {
    const { id } = useParams();
    const[postData, setPostData] = useState({});
    console.log("id", id)

    useEffect(() => {
        axios
            .get(`http://localhost:4000/post/${id}`)
            .then(function(response) {
                setPostData(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
    }, []);

    return(
        <div className="Scrapbook">
            <p> Single Post </p>
            <p>{postData.scrapbookId}</p>
            <p>{postData.text}</p>

            <CreateMemoryForm />
        </div>
    )
}

export default Scrapbook;