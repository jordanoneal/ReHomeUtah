import React, { useState } from "react";
import API from "../utils/API";
import useForceUserLogin from "../utils/useForceUserLogin";
import { Redirect } from "react-router";
import {
  Form,
  Input,
  Label,
  FormGroup,
  Col,
  Button,
  Container,
} from "reactstrap";

export default function DummySellersDetails() {
  useForceUserLogin();
  const [pathname, setPathname] = React.useState<string>();
  const [years, setYears] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [sellBy, setSellBy] = useState("");
  const [homeListed, setHomeListed] = useState("");
  const [reasonSelling, setReasonSelling] = useState("");
  const [concernsSelling, setConcernsSelling] = useState("");
  const [neededWork, setNeededWork] = useState("");
  const [pets] = useState(false);
  const [currentLiving, setCurrentLiving] = useState<string>("");
  const [homeFeatures, setHomeFeatures] = useState("");

  const handleSumbmit = (event: any) => {
    event.preventDefault();
    console.log(sellBy);
    console.log(homeListed);
    console.log(reasonSelling);
    console.log(concernsSelling);
    console.log(neededWork);

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

    setPathname("/confirmation");
  };

  return pathname ? (
    <Redirect to={pathname} />
  ) : (
    <div>
      <form onSubmit={handleSumbmit}>
        <div className="form-group">
          <label>How long have you owned this property?</label>
          <input
            type="number"
            name="years"
            placeholder="years"
            onChange={(event) => setYears(event.target.value)}
          ></input>
          <input
            type="number"
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

        <FormGroup>
          <Label for="exampleSelectMulti">
            How many people are currently living in the home?
          </Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            onChange={(event) => setCurrentLiving(event.target.value)}
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSellingReason">Any pets? (explain)</Label>
          <Input type="textarea" name="text" id="exampleSellingReason" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSellingReason">
            What will potential buyers like most about your home?
          </Label>
          <Input
            type="textarea"
            name="text"
            id="exampleSellingReason"
            onChange={(event) => setHomeFeatures(event.target.value)}
          />
        </FormGroup>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
