import React, {Component} from "react";


function CreateScrapbookForm({createScrapbookFunction}) {
    return (
        <form className="Form CreateScrapbookForm"
        onSubmit={(e) => createScrapbookFunction(e)}>
            <label htmlFor="scrapbookId"> A few words to title your memory: </label>
            <input type = "text" name="scrapbookId" />
            <label htmlFor="scrapbookId"> Description </label>
            <input type = "text" name="text" />
            <label htmlFor="memoryImage">Image</label>
            <input type="file" name="memoryImage" class="file-select" accept="image/*"/>
            <button>Submit</button>
        </form>
    )
} 


export default CreateScrapbookForm;