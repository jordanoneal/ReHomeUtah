import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function DummySellersDetails() {
  const [sellBy, setSellBy] = useState("");
  const [homeListed, setHomeListed] = useState("");
  const [reasonSelling, setReasonSelling] = useState("");
  const [concernsSelling, setConcernsSelling] = useState("");
  const [neededWork, setNeededWork] = useState("");
  // const [explainWork, setExplainWork] = useState("")
  // const [currentLiving, setCurrentLiving] = useState("")
  // const [pets, setPets] = useState("")
  // const [explainPets, setExplainPets] = useState("")
  // const [homeFeatures, setHomeFeatures] = useState("")

  const handleSumbmit = (event: any) => {
    event.preventDefault();
    console.log(sellBy);
    console.log(homeListed);
    console.log(reasonSelling);
    console.log(concernsSelling);
    console.log(neededWork);
    // console.log(explainWork);
    // console.log(currentLiving);
    // console.log(pets);
    // console.log(explainPets);
    // console.log(homeFeatures);

    API.postSeller({
      sellBy: sellBy,
      homeListed: homeListed,
      reasonSelling: reasonSelling,
      concernsSelling: concernsSelling,
      neededWork: neededWork,
    });

    // API.postSeller(
    //   new Seller({
    //     // _id: "", // don't know what to assign property
    //     sellBy: sellBy,
    //     homeListed: homeListed,
    //     reasonSelling: reasonSelling,
    //     concernsSelling: concernsSelling,
    //     neededWork: neededWork,
    //   })
    // );
  };

  return (
    <div>
      <form onSubmit={handleSumbmit}>
        <div className="form-group">
          <label>How long have you owned this property?</label>
          <div className="form-inline">
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="years"></input>
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="months"></input>
          </div>
        </div>
        <div className="form-group">
          <label>When do you need to sell by?</label>
          <input
            type="date"
            onChange={(event) => setSellBy(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>When would you like your home to be listed</label>
          <input
            type="date"
            onChange={(event) => setHomeListed(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label>Reason for selling</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(event) => setReasonSelling(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Biggest concerns about selling</label>
          <textarea
            title="Thank you for sharing your concerns with us. We take them very seriously"
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(event) => setConcernsSelling(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>
            What work needs to be done to your home before it goes on the
            market?
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(event) => setNeededWork(event.target.value)}
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
