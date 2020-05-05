import React from 'react';
import CreateAccountForm from '../components/CreateAccountForm';

function CreateAccount( {CreateAccountFunction} ) {
    return(
        <div className="Wrapper">
            <h1> Create Account </h1>
            <div className="CreateWrapper">
                <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
                <div className="CreateInformation">
                    <h2> About Scrapbook </h2>
                    <p> lorem ipsum...</p>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;