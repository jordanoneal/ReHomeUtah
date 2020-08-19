import React, { useEffect } from 'react'
import useUserState from './useUserState'
import { useHistory } from "react-router-dom";
import { User } from '../recoil/userAtom';

type useForceUserLoginReturnType = [
    User | undefined,
    (user: User) => void,
    () => void,
    () => void
  ]

export default function useForceUserLogin() : useForceUserLoginReturnType {
    const userState = useUserState();
    const [user] = userState;
    let history = useHistory();

    useEffect(() => {
        if(user === false) {
            //track where we were
            //redirect to login
            history.push("/login")

        }
    })

    return userState as useForceUserLoginReturnType;
}
