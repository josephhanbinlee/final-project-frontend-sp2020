import React from 'react';

function Header( {LogoutFunction, isLoggedIn}) {
    return (
        <header className="Header">
            <div className="Header_Wrapper">
                <div className="Header_logo"> <a href="/"> Scrapbook </a> </div>
                <nav className="Header_nav">
                    {isLoggedIn && <a href="/">My Memories</a>}
                    {!isLoggedIn && <a href="create-account">Create Account</a> }
                    {!isLoggedIn && <a href="/login">Login</a> }
                    {isLoggedIn && <a href="/create-scrapbook">Create Memory </a>}
                    {isLoggedIn && <a onClick={() => LogoutFunction()}>Log Out</a>}
                </nav>
            </div>
        </header>
    );
}

export default Header;