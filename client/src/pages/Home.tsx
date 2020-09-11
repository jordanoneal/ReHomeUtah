import React from "react";
// import useUserState from "../utils/useUserState";
import HomeJumbotron from "../components/HomeJumbotron";
import AdventureMedia from "../components/AdventureMedia/index";
import JourneyMedia from "../components/JourneyMedia/index";
import Footer from "../components/Footer/index";
import "../styles/DummyHome.css";

export default function HomePage() {
  // const [user] = useUserState();

  return (
    <div>
      <HomeJumbotron />
      <AdventureMedia />
      <JourneyMedia />
      <Footer />
    </div>
  );
}
