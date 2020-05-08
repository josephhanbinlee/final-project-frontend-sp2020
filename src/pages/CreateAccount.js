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
                    <p> Scrapbook is a new social media site dedicated to helping you store important memories in your life. </p>
                    <p> Don't spend so much time focusing on getting likes. Post your pictures and memories just for you. </p>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;