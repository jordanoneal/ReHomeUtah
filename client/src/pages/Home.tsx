import React, { useEffect } from "react";
import useUserState from "../utils/useUserState";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import HomeJumbotron from "../components/HomeJumbotron";
import "../styles/DummyHome.css";

export default function DummyHome() {
  const [user, postUser, login, logout] = useUserState();
  useEffect(() => console.log(user), [user]);

  const [firstName, setFirstName] = React.useState("");
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
    } else {
      setFirstName("Guest");
    }
  }, [user]);

  // function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  //   if(!user) {
  //     login();
  //   } else {
  //     logout();
  //   }
  // }

  return (
    <div>
      <h2>Welcome {firstName}</h2>
      <HomeJumbotron />
    </div>
  );
}
