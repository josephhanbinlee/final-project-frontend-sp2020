import React, {Component} from "react";
import axios from 'axios';

/*
function CreateScrapbookForm({createScrapbookFunction }) {
    return (
        <form className="Form CreateScrapbookForm"
        onSubmit={(e) => createScrapbookFunction(e)}>
            <label htmlFor="scrapbook"> Scrapbook Title </label>
            <input type = "text" name="scrapbook" />
            <button>Submit</button>
        </form>
    )
} */

class CreateScrapbookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrapbook: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post(`http://localhost:4000`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {scrapbook} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}
                className="Form CreateScrapbookForm">
                    <label htmlFor="scrapbook"> Scrapbook Title </label>
                    <div> 
                        <input
                        type = "text"
                        name="scrapbook"
                        value = {scrapbook}
                        onChange={this.changeHandler}/>
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default CreateScrapbookForm;

