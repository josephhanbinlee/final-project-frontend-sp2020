import React from 'react';
import axios from 'axios';

import CreateScrapbookForm from '../components/CreateScrapbookForm';

function CreatePost({userInformation}) {

    function createScrapbookFunction(e) {
        const uid = userInformation.uid;


        e.preventDefault();
        let scrapbookId = e.currentTarget.scrapbookId.value;
        let text = e.currentTarget.text.value;
        let idFromText = scrapbookId.replace(/\s+/g, "-").toLowerCase().substr(0,16);
        let userId = uid;

        console.log(scrapbookId, idFromText, userId, text);

        axios
            .get(
                `http://localhost:4000/create-scrapbook?scrapbookId=${scrapbookId}&id=${idFromText}&userId=${userId}&text=${text}`
            )
            .then(function (response) {
                console.log('response', response)
            })
            .catch(function(error) {
                console.log(error)
            })

        }

    console.log(userInformation);

    return(
        <div className="Form CreateScrapbookForm">
            <h1> Create a New Scrapbook! </h1>
            <CreateScrapbookForm createScrapbookFunction={createScrapbookFunction}/>
        </div>
    )
}

export default CreatePost;