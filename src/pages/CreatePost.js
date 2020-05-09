import React from 'react';

import CreateScrapbookForm from '../components/CreateScrapbookForm';

function CreatePost({userInformation, createPostWithImage}) {

    return(
        <div className="Form CreateScrapbookForm">
            <h1> What do you want to remember? </h1>
            <CreateScrapbookForm createScrapbookFunction={createPostWithImage}/>
        </div>
    )
}

export default CreatePost;