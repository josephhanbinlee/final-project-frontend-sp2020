import React from "react";


function CreateMemoryForm({createScrapbookFunction }) {
    return (
        <form className="Form CreateMemoryForm"
        onSubmit={(e) => createScrapbookFunction(e)}>
            <label htmlFor="memoryId"> Memory Label </label>
            <input type = "text" name="memoryId" />
            <button>Submit</button>
        </form>
    )
} 


export default CreateMemoryForm;