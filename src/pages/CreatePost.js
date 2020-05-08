import React from 'react';
import axios from 'axios';

import CreateScrapbookForm from '../components/CreateScrapbookForm';

function CreatePost({userInformation, createPostWithImage}) {

    return(
        <div className="Form CreateScrapbookForm">
            <h1> Create a New Scrapbook! </h1>
            <CreateScrapbookForm createScrapbookFunction={createPostWithImage}/>
        </div>
    )
}

export default CreatePost;