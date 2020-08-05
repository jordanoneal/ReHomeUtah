import React from 'react'

export default function Signup() {
    async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const response = await fetch('/auth/google');
        console.log(response);
    }
    return (
        <div>
            <a onClick={handleClick}>Sign In with Google</a>
        </div>
    )
}
