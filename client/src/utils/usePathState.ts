import {useEffect} from "react";
import useUserState from "./useUserState";
import { useRecoilState } from "recoil";
import { pathAtom } from "../recoil/pathAtom";

export default function usePathState() {
    const [pathname, setPathname] = useRecoilState(pathAtom);
    const [user] = useUserState();

    useEffect(() => {
        if(user) {
            setPathname("")
        }
        else {
            setPathname("/")
        }
    }, [setPathname, user])

    return pathname

}
