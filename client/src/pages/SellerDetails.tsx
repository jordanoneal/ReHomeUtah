import React, { useState } from "react";
import { Form, Input, Label, FormGroup, Col, Button, Container } from 'reactstrap';
import API from "../utils/API";
import { Redirect } from "react-router";
import useForceUserLogin from "../utils/useForceUserLogin";

export const Seller: React.FC = () => {
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
        // if(!pets || (pets && petsExplained)) {
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
              setPathname("/confirmation")
              
        }
        


    return pathname ? (<Redirect to ={pathname}/>) :(
        <>
        <Container className="themed-container">
        <Form onSubmit={handleSumbmit}>
            <Col md={12}>
                <FormGroup>
                    <Label for="exampleYears">How long have you owned this property?</Label>
                    <Input type="number"  name="Years" id="exampleYears" placeholder="Years" onChange={(event) => setYears(event.target.value)}/><br></br>
                    <Input type="number"  name="Months" id="exampleMonths" placeholder="Months" onChange={(event) => setMonths(event.target.value)}/>
                </FormGroup>
            </Col>
            <FormGroup>
                <Label for="exampleDate">When do you need to sell by?</Label>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                    onChange={(event) => setSellBy(event.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">When would you like your home to be listed</Label>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                    onChange={(event) => setHomeListed(event.target.value)}

                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSellingReason">Reason for selling</Label>
                <Input type="textarea" onChange={(event) => setReasonSelling(event.target.value)} name="text" id="exampleSellingReason" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSellingReason">Biggest concerns about selling</Label>
                <Input type="textarea" onChange={(event) => setConcernsSelling(event.target.value)} name="text" id="exampleSellingReason" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSellingReason">What work needs to be done to your home before it goes on the market?</Label>
                <Input type="textarea" onChange={(event) => setNeededWork(event.target.value)} name="text" id="exampleSellingReason" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelectMulti">How many people are currently living in the home?</Label>
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
                <Label for="exampleSellingReason">What will potential buyers like most about your home?</Label>
                <Input type="textarea" name="text" id="exampleSellingReason" onChange={(event) => setHomeFeatures(event.target.value)} />
            </FormGroup>
            <Button color="primary" size="lg">Request buyer's agent service</Button>{ ' ' }
            <Button type="submit" className="btn" color="primary" size="lg">Submit order </Button>
        </Form>

        </Container>
    </>

      );
    }



export default Seller;
