import React, { useState } from "react";
import { Form, Input, Label, FormGroup, Col, Button, Container } from 'reactstrap';
import API from "../utils/API";


export const SellerDetails: React.FC = (props) => {
    const [sellBy, setSellBy] = useState("");
    const [homeListed, setHomeListed] = useState("");
    const [reasonSelling, setReasonSelling] = useState("");
    const [concernsSelling, setConcernsSelling] = useState("");
    const [neededWork, setNeededWork] = useState("");

    const handleSumbmit = (event: any) => {
        event.preventDefault();
        console.log(sellBy);
        console.log(homeListed);
        console.log(reasonSelling);
        console.log(concernsSelling);
        console.log(neededWork);

        // API.postSeller({
        //     sellBy: sellBy,
        //     homeListed: homeListed,
        //     reasonSelling: reasonSelling,
        //     concernsSelling: concernsSelling,
        //     neededWork: neededWork,
        //   });
        };


    return (
        <>
        <Container className="themed-container">
        <Form onSubmit={handleSumbmit}>
            <Col md={2}>
                <FormGroup>
                    <Label for="exampleYears">How long have you owned this property?</Label>
                    <Input type="text"  name="Years" id="exampleYears" placeholder="Years"/>
                    <Input type="text"  name="Months" id="exampleMonths" placeholder="Months"/>
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
                <Input type="textarea" name="text" id="exampleSellingReason" />
            </FormGroup>
        </Form>

        <Button color="primary" size="lg">Request buyer's agent service</Button>{ ' ' }
        <Button color="primary" size="lg">Submit order</Button>
        </Container>
    </>

      );
    }

export default SellerDetails;
