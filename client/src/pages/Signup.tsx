import React from 'react';
import { Redirect } from 'react-router-dom'

export default function Signup() {

    const [pathname, setPathname] = React.useState<string>();
    async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const strWindowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';
        window.open("/auth/google", "_blank", strWindowFeatures);
        // const response = await fetch('/auth/google');
        // console.log(response);
        setPathname('/')
    }
    return pathname ? <Redirect to={pathname}/> : (
        <div>
            <a onClick={handleClick}>Sign In with Google</a>
        </div>
    )
}
