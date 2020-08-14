import React from 'react'

export default function Signup() {
    async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const strWindowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';
        window.open("/auth/google", "_blank", strWindowFeatures);
        // const response = await fetch('/auth/google');
        // console.log(response);
    }
    return (
        <div>
            <a href="#" onClick={handleClick}>Sign In with Google</a>
        </div>
    )
}
