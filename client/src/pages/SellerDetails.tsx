import React, { useState } from "react";
import API from "../utils/API";
import useForceUserLogin from "../utils/useForceUserLogin";
import { useHistory } from "react-router";

export default function SellerDetails() {
  useForceUserLogin();
  const [years, setYears] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [sellBy, setSellBy] = useState("");
  const [homeListed, setHomeListed] = useState("");
  const [reasonSelling, setReasonSelling] = useState("");
  const [concernsSelling, setConcernsSelling] = useState("");
  const [neededWork, setNeededWork] = useState("");
  const [pets, setPets] = useState("");
  const [currentLiving, setCurrentLiving] = useState<string>("");
  const [homeFeatures, setHomeFeatures] = useState("");

  const history = useHistory();

  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    API.postSeller({
      livedAtProperty: {
        years: parseInt(years),
        months: parseInt(months),
      },
      sellBy: sellBy,
      homeListed: homeListed,
      reasonSelling: reasonSelling,
      concernsSelling: concernsSelling,
      neededWork: neededWork,
      pets: pets,
      currentLiving: parseInt(currentLiving),
      homeFeatures: homeFeatures,
    });

    history.push("/confirmation");
  };

  return (
    <div>
      <form onSubmit={handleSumbmit}>
        <div className="form-group">
          <label>How long have you owned this property?</label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="years"
            placeholder="years"
            onChange={(event) => setYears(event.target.value)}
          ></input>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="months"
            placeholder="months"
            onChange={(event) => setMonths(event.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label>When do you need to sell by</label>
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

        <div className="form-group">
          <label>How many people are currently living in the home?</label>
          <select
            className="custom-select"
            onChange={(event) => setCurrentLiving(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="form-group">
          <label>Any pets?</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(event) => setPets(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>What will potential buyers like most about your home?</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={(event) => setHomeFeatures(event.target.value)}
          ></textarea>
        </div>

        <button className="btn" type="submit">
          Submit order
        </button>
      </form>
    </div>
  );
}
