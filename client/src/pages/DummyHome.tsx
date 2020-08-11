import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../recoil/userAtom";
import API from "../utils/API";

export default function DummyHome() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data } = await API.getUser();
    setUser(new User(data));
  };

  useEffect(() => console.log(user), [user]);

  return (
    <div>
      <h1>DUMMY HOME PAGE</h1>
    </div>
  );
}
