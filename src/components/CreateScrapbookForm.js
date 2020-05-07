import React, {Component} from "react";


function CreateScrapbookForm({createScrapbookFunction }) {
    return (
        <form className="Form CreateScrapbookForm"
        onSubmit={(e) => createScrapbookFunction(e)}>
            <label htmlFor="scrapbookId"> Scrapbook Title </label>
            <input type = "text" name="scrapbookId" />
            <button>Submit</button>
        </form>
    )
} 


export default CreateScrapbookForm;