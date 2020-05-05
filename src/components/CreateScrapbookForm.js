import React from "react";

function CreateScrapbookForm({createScrapbookFunction }) {
    return (
        <form className="Form CreateScrapbookForm"
        onSubmit={(e) => createScrapbookFunction(e)}>
            <label htmlFor="scrapbook"> Scrapbook Title </label>
            <input type = "text" name="scrapbook" />
            <button>Submit</button>
        </form>
    )
}


export default CreateScrapbookForm;